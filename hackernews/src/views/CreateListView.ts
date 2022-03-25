import ListView from '@v/ListView.vue';
import { Component, VNode } from 'vue';

export default function createListView(viewName: string) {
  return {
    name: viewName,
    render(createElement: (a: Component) => VNode) {
      return createElement(ListView);
    },
  };
}
