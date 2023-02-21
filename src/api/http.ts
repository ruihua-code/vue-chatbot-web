import { ElLoading, ElMessage } from 'element-plus';
import 'element-plus/es/components/message/style/css';
import 'element-plus/es/components/loading/style/css';
import axios, { type AxiosRequestConfig, type AxiosResponse } from 'axios';

let loadingInstance: any;

const instance = axios.create({
  timeout: 120000,
});

interface Config extends AxiosRequestConfig {
  showLoading?: boolean;
}

instance.interceptors.request.use((config: Config) => {
  if (loadingInstance) {
    loadingInstance.close();
  }

  if (config?.showLoading) {
    loadingInstance = ElLoading.service({
      customClass: 'http-loading',
      text: '加载中...',
      fullscreen: false,
    });
  }

  return {
    ...config,
    // header中添加鉴权
    headers: {
      ...config.headers,
    },
  };
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    loadingInstance.close();
    if (response.status === 200) {
      /* 处理下载相关接口 */
      if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
        return Promise.resolve(response);
      }
      /* 常规http请求响应 */
      return Promise.resolve(response.data);
    } else {
      return Promise.reject(response.data);
    }
  },
  (error) => {
    loadingInstance.close();
    let errorMessage: string = error.message || '';
    if (error.response.status === 500) {
      errorMessage = '请求服务器失败，请重试！';
    }
    if (403 === error.response.status) {
      window.location.href = `${import.meta.env.BASE_URL}no-permission`;
    }

    if (401 === error.response.status) {
      errorMessage = '登录已过期，请重新登录';
      setTimeout(() => {
        window.location.replace(`${import.meta.env.BASE_URL}login`);
      }, 2000);
    }

    ElMessage.error({
      message: errorMessage,
    });
    return Promise.reject(error);
  },
);

export interface ApiResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}

export type ApiPromiseResponse<T> = Promise<ApiResponse<T>> | Promise<any>;

const http = {
  get: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.get(url, config),
  post: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.post(url, data, config),
  put: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.put(url, data, config),
  delete: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.delete(url, config),
};

export default http;
