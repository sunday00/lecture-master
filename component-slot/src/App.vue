<template>
  <Layout>
    <template #header>
      HEADER IS HERE
    </template>
    <template #default>
      <div>
        <PropStyleButton
          text="Prop press" 
          :show-icon="true" 
        />
        <PropStyleButton 
          text="Prop press"
          :show-icon="false" 
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="true" 
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="true"
        />
        <PropStyleButton 
          text="Prop press" 
          :show-icon="false" 
        />
        <PropStyleButton
          text="Prop press" 
          :show-icon="true" 
        />
        <SlotStyleButton>
          <NoodleIcon />
          Slot PRESS
        </SlotStyleButton>
        <SlotStyleButton>
          Slot PRESS
          <NoodleIcon />
        </SlotStyleButton>
        <SlotStyleButton>
          <NoodleIcon />
          Slot PRESS
        </SlotStyleButton>
      </div>
      <div>
        <div>
          <RandomUser 
            :additional-info="user => user.phone" 
          >
            <template #loading>
              <AppSpinner />
            </template>
          </RandomUser>
        </div>
        <div>
          <RandomUser>
            <template #loading>
              <AppSpinner />
            </template>
            <template 
              #additionalInfo="{item}"
            >
              <p>{{ item.phone }}</p>
              <p>{{ item.email }}</p>
            </template>
          </RandomUser>
        </div>
        <div>
          <RandomUser>
            <template #loading>
              <AppSpinner />
            </template>
            <template 
              #listitem="{remove, user: peep}"
            >
              <pre>{{ peep.location.street.name }}</pre>
              <p>
                <SlotStyleButton @click="remove(peep)">
                  remove
                </SlotStyleButton>
              </p>
            </template>
          </RandomUser>
        </div>
        <div>
          <RandomUser>
            <template #userlist="{list: users, remove}">
              <AppUserCardList :list="users">
                <template #[selected]="{ text }">
                  <h4>{{ text }}</h4>
                </template>
                <template #additionalInfo="{item:user}">
                  <SlotStyleButton @click="remove(user)">
                    remove
                  </SlotStyleButton>
                </template>
              </AppUserCardList>
            </template>
          </RandomUser>
          <select v-model="selected">
            <option value="first">first</option>
            <option value="last">last</option>
            <option value="full">full</option>
          </select>
        </div>
      </div>
    </template>

    <template #aside>
      aside IS HERE
    </template>

    <template #footer>
      FOOTER IS HERE
    </template>
  </Layout>
</template>

<script>
import PropStyleButton from './components/PropStyleButton.vue';
import SlotStyleButton from './components/SlotStyleButton.vue';
import NoodleIcon from './components/NoodleIcon';
import AppSpinner from './components/AppSpinner';
import RandomUser from './components/RandomUser';
import AppUserCardList from './components/AppUserCardList';

import Layout from './components/Layout';

export default {
  name: 'App',
  components: {
    PropStyleButton, SlotStyleButton, NoodleIcon,
    Layout, 

    AppSpinner, RandomUser, 

    AppUserCardList,

  },data(){
    return {
      selected: 'first'
    }
  },
  methos: {
    
  }
}
</script>

<style>
#app main > div{
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin: 60px auto;
  display: flex;
}
</style>
