<template>
        <div>
          <form @submit.prevent="beginValid"
          class="userData">
            <label for="name">Имя</label>
            <input
              :class="{'invalid' :$v.form.userName.$error}"
              v-model.trim="form.userName"
              class="userName userInput"
              id="name"
              type="text">
              <div
              class="redWarning"
              v-if="$v.form.userName.$dirty && !$v.form.userName.minLength"
              >
                Имя должно быть не менее 2 символов!
              </div>
              <div
              class="redWarning"
              v-if="$v.form.userName.$dirty && !$v.form.userName.required">
                Обязательное поле для заполнения!
              </div>
            <label for="surname">Фамилия</label>
            <input
            :class="{'invalid' :$v.form.userSurname.$error}"
              class="userSurname userInput"
              id="surname"
              type="text"
              v-model.trim="form.userSurname">
              <div
              class="redWarning"
              v-if="$v.form.userSurname.$dirty && !$v.form.userSurname.required">
                Обязательное поле для заполнения!
              </div>
              <div
              class="redWarning"
              v-if="$v.form.userSurname.$dirty && !$v.form.userSurname.minLength"
              >
                Фамилия должна быть не менее 2 символов!
              </div>
            <label for="number">Телефон</label>
            <input
            :class="{'invalid' :$v.form.userNumber.$error}"
              class="userNumber userInput"
              id="number"
              type="number"
              v-model.trim="form.userNumber">
              <div
              class="redWarning"
              v-if="$v.form.userNumber.$dirty && !$v.form.userNumber.required">
                Обязательное поле для заполнения!
              </div>
              <div
              class="redWarning"
              v-if="$v.form.userNumber.$dirty && !$v.form.userNumber.minLength"
              >
                Номер должен быть не менее 11 символов!
              </div>
            <label for="city">Город</label>
            <input
            :class="{'invalid' :$v.form.userCity.$error}"
              class="userCity userInput"
              id="city"
              type="text"
              v-model.trim="form.userCity">
              <div
              class="redWarning"
              v-if="$v.form.userCity.$dirty && !$v.form.userCity.required">
                Обязательное поле для заполнения!
              </div>
              <button class="btn_order_comfirm" type="submit">Подтвердить заказ</button>
          </form >
          <p class="renderText" v-if="CART.length < 1">
            Добавьте товар для оформления!
          </p>
            <div
            v-if="CART.length"
            class="cartOrder">
               <h2>Корзина</h2>
            <table>
              <thead>
                <tr>
                  <th class="product_name">Товар</th>
                  <th class="product_total">Подытог</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <div
                    class="unit_item_order"
                    v-for="itemOrder in CART"
                    :key="itemOrder.id"
                    >{{ itemOrder.name}}
                     <b>{{ itemOrder.price }}</b>
                    x {{ itemOrder.quantity }}
                   </div>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th>Итого</th>
                  <td class="total_price_order">{{totalPrice}}</td>
                </tr>
              </tfoot>
              </table>
          </div>
        </div>
</template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength } from 'vuelidate/lib/validators'
import { mapGetters } from 'vuex'
export default {
  mixins: [validationMixin],
  data: function () {
    return {
      form: {
        userName: '',
        userSurname: '',
        userNumber: '',
        userCity: ''
      }
    }
  },
  components: {
  },
  methods: {
    beginValid () {
      this.$v.form.$touch()
    }
  },
  computed: {
    ...mapGetters([
      'CART'
    ]),
    totalPrice () {
      return this.CART.reduce((startValue, curValue) => {
        return startValue + Math.round((curValue.price * curValue.quantity) * 1000)
      }, 0)
    }
  },
  validations: {
    form: {
      userName: {
        required,
        minLength: minLength(2)
      },
      userSurname: {
        required,
        minLength: minLength(2)
      },
      userNumber: {
        required,
        minLength: minLength(11)
      },
      userCity: {
        required
      }
    }
  }
}
</script>
