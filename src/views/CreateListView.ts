import ListView from '@v/ListView.vue';
import { VNode, VueConstructor } from 'vue';

export default function createListView(viewName: string) {
  return {
    name: viewName,
    render(createElement: (a: VueConstructor<Vue>) => VNode) {
      return createElement(ListView);
    },
  };
}
