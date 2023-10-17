---
layout: about
---

<script>
export default {
  setup() {
    const data = [{
      label: '昵称',
      value: 'Hua',
    }, {
      label: '邮箱',
      value: 'sykesl@qq.com',
    }, {
      label: '居住地',
      value: 'Inner Mongolia'
    }, {
      label: '家乡',
      value: 'Inner Mongolia',
    }, {
      label: '地址',
      value: 'balbalabalabalbalabalabalbalabala'
    }];

    return {
      data
    }
  },
}
</script>


<a-descriptions style="margin-top: 20px" size="large" :data="data" title="关于我" layout="inline-vertical" />