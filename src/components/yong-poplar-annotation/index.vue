<template>
  <div class="container">
    <div class="annotation fade-in" ref="annotation"></div>
    <div class="category" @click="onSelect">
      <div
        class="category-item"
        :data-item="JSON.stringify(item)"
        v-for="item in categorys"
        :key="item.id"
        :style="{ backgroundColor: item.color }">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, reactive } from 'vue';
import { Action, Annotator } from 'poplar-annotation';
// import Highlighter from 'web-highlighter';

// new Highlighter().run();
const categorys = ref([
  {
    id: 4,
    text: 'N药物治疗方案',
    color: '#4E988F',
    borderColor: '#4E988F',
  },
  {
    id: 14,
    text: 'N手术名称',
    color: '#E9B888',
    borderColor: '#E9B888',
  },
]);
const data = reactive({
  content:
    '小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案小张于我院2021年3月4日，实行THP方案，采用高过敏药物紫杉醇进入治疗，2022年1月3日进行保乳术，实行H方案',
  labelCategories: [
    {
      id: 4,
      text: 'N药物治疗方案',
      color: '#4E988F',
      borderColor: '#4E988F',
    },
    {
      id: 14,
      text: 'N手术名称',
      color: '#E9B888',
      borderColor: '#E9B888',
    },
  ],
  labels: [
    {
      id: 0,
      categoryId: 4,
      startIndex: 17,
      endIndex: 22,
    },
    {
      id: 1,
      categoryId: 14,
      startIndex: 50,
      endIndex: 53,
    },
    {
      id: 2,
      categoryId: 4,
      startIndex: 56,
      endIndex: 59,
    },
    {
      id: 3,
      categoryId: 4,
      startIndex: 156,
      endIndex: 159,
    },
  ],
  connectionCategories: [
    {
      id: 0,
      text: 'R0001',
    },
    {
      id: 1,
      text: 'R0001',
    },
    {
      id: 2,
      text: 'R0001',
    },
  ],
  connections: [],
});
let annotator = ref();
let currentSelectText = {
  startIndex: 0,
  endIndex: 0,
};

const onSelect = (e: any) => {
  if (e.target.className !== 'category-item') return;
  if (currentSelectText.startIndex === 0 && currentSelectText.endIndex === 0) return;
  const cate = JSON.parse(e.target.dataset.item);
  annotator.value.applyAction(Action.Label.Create(cate.id, currentSelectText.startIndex, currentSelectText.endIndex));
};
const annotation = ref();
onMounted(() => {
  annotator.value = new Annotator(data, annotation.value, {
    labelPadding: 5,
    lineHeight: 3,
    unconnectedLineStyle: 'none',
    contentEditable: false,
  });

  // 在用户在页面上选取了一段文本后，会触发textSelected事件
  annotator.value.on('textSelected', (startIndex: number, endIndex: number) => {
    currentSelectText = { startIndex, endIndex };
    // svg内容选中之后会失去高亮，抛出一个异常可以解决这个问题！！！
    console.clear();
    throw new Error('不用担心，这并不是一个报错');
  });
  annotator.value.on('labelClicked', (id: number) => {
    // 输出用户点击的label的ID
    console.log(id);
  });
});
</script>

<style lang="scss" scoped>
@import '@/assets/styles/variables.module';

.container {
  height: 600px;
  border: 1px solid;
}

:deep(.annotation) {
  position: relative;
  float: left;
  width: calc(100% - 300px);
  height: 100%;
  overflow: hidden;
  overflow-y: auto;

  svg {
    width: 100%;

    text ::selection {
      background: $primary-color;
    }
  }

  .poplar-annotation-content {
    width: 100% !important;
  }

  .poplar-annotation-label {
    // stroke: #333;
  }

  // label hover效果
  .poplar-annotation-label.hover {
    g > rect {
      stroke: red;
    }
  }
}

.category {
  display: flex;
  row-gap: 5px;
  column-gap: 5px;
  width: 300px;
  height: 100%;
  padding: 5px;
  overflow: hidden;
  border-left: 1px solid;

  &-item {
    height: 33px;
    padding: 0 6px;
    line-height: 33px;
    cursor: pointer;
    border-radius: 6px;

    &:hover {
      box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
    }
  }
}
</style>
