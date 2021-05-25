<template>
  <div class="profile">
    <div class="profile__title">
      <i class="fa fa-info-circle icon"></i><h3>Account</h3>
    </div>
    <div class="profile__infos">
      <h3 class="profile__info">Name: <span>{{ user.name }}</span> </h3>
      <h3 class="profile__info">E-mail: <span>{{ user.email }}</span></h3>
    </div>
    <div class="profile__update-btn-area">
      <Btn text="update account"/>
    </div>
  </div>
</template>

<script>
import Btn from '../buttons/Btn';

export default {
  name: "Accounts",
  components: {
    Btn
  },
  props: {
    user: Object
  }
}
</script>

<style lang="scss">
  .profile {
  background-color: #fff;
  border-radius: 2px;
  padding: 2rem 2rem;
  width: 50%;
  color: #333;
  margin-top: 6rem;

  .profile__title {
    display: flex;
    justify-content: center;
    margin-bottom: 3rem;
    font-size: 1.3rem;
    .icon {
      margin-top: 4px;
      margin-right: 2px;
    }
  }

  .profile__info {
    padding-bottom: 1.5rem;

    span {
      color: rgb(121, 117, 117);
    }
  }

  .profile__update-btn-area {
    display: flex;
    justify-content: center;
    margin-top: 2rem;
  }
}
</style>