<template>
  <canvas ref="canvasEle" class="canvas"></canvas>
</template>
<script lang="ts" setup>
import { onMounted, ref } from 'vue';

const props = defineProps<{
  width: number;
  height: number;
}>();

const box = {
  width: 512,
  height: 512,
};

const duration = 0.2;
let ctx = ref().value;
let canvasEle = ref();

onMounted(async () => {
  ctx = canvasEle.value.getContext('2d');

  //抗锯齿
  let width = box.width;
  let height = box.height;
  if (window.devicePixelRatio) {
    canvasEle.value.style.width = `${props.width} px`;
    canvasEle.value.style.height = `${props.height}px`;
    canvasEle.value.height = height * window.devicePixelRatio;
    canvasEle.value.width = width * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
  }
  ctx.lineWidth = '1';
  ctx.fillStyle = 'rgba(0,0,0,0)';
  ctx.fillRect(0, 0, canvasEle.value.width, canvasEle.value.height);

  await onLeft();
  await sleep(duration);
  await onRight();
  await sleep(duration);
  await onBottom();
});

function sleep(time: number) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(0);
    }, time * 1000);
  });
}

// 结束绘制路径，填充颜色
const onFill = async () => {
  await sleep(duration);
  ctx.closePath();
  await sleep(duration);
  ctx.stroke();
  await sleep(duration);
  ctx.fill();
};

/**
 * 绘制路径
 *  fillStyle: 填充颜色
 *  strokeStyle: 路径颜色
 *  time: 绘制一条路径的时间
 **/
const onDrawPath = async (arr: Array<Array<number>>, fillStyle: string, strokeStyle: string, time = duration) => {
  ctx.beginPath();
  ctx.fillStyle = fillStyle;
  ctx.strokeStyle = strokeStyle;

  for (let i = 0; i < arr.length; i++) {
    ctx.lineTo(arr[i][0], arr[i][1]);
    await sleep(time);
    ctx.stroke();
  }
};

const onLeft = async () => {
  const arr = [
    [86.8, 301.3],
    [243.1, 183],
    [243.1, 21.2],
    [86.8, 137.9],
  ];
  await onDrawPath(arr, '#1B98D3', '#1B98D3');
  await onFill();
};

const onRight = async () => {
  const arr = [
    [267.5, 21.2],
    [267.5, 183],
    [423.8, 301.3],
    [423.8, 137.9],
  ];

  await onDrawPath(arr, '#1B98D3', '#1B98D3');
  await onFill();
};

const onBottom = async () => {
  const arr = [
    [254.5, 202.8],
    [86.8, 329.5],
    [86.8, 492.9],
    [254.5, 364.9],
    [423.8, 492.9],
    [423.8, 329.5],
  ];

  await onDrawPath(arr, '#7DB62C', '#7DB62C');
  await onFill();
};
</script>
