import { Item } from '@/views/ItemView.vue';
import { User } from '@/views/UserView.vue';

export type State = {
  news: [],
  jobs: [],
  asks: [],
  user: User,
  item: Item
};
