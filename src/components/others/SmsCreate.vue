<template>
    <div>
      <form>
        <label for="sms" class="label">Ваше смс</label>
          <input class="qqq" id="sms" placeholder="Введите смс код"
             @blur="$v.form.login.$touch()"
             :class="{'invalid' :$v.form.login.$error}"
             v-model.trim="form.login"
             type="text">
            <div v-if="!$v.form.login.required" class="invalid-feedback">
                 Обязательное поле для заполнения
            </div>
            <div v-if="$v.form.login.$model.length > 4" class="invalid-feedback">
             Должно быть не более 4 символов
         </div>
            <div>
              <button  type="submit"
                       @click="checkForm"
                       v-bind:disabled="$v.form.login.$invalid"
                       class="send" >Отправить
              </button>
            </div>
      </form>
    </div>
  </template>

<script>
import { validationMixin } from 'vuelidate'
import { required, minLength, maxLength, numeric } from 'vuelidate/lib/validators'
export default {
  mixins: [validationMixin],
  name: 'smsCreate',
  data: function () {
    return {
      form: {
        login: ''
      }
    }
  },
  methods: {
    checkForm () {
      const url = 'http://localhost:3000/sms/check'
      fetch(url, {
        method: 'POST',
        body: JSON.stringify(this.form),
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        }
      })
        .then(response => {
          if (response.status === 200) {
            alert('success')
          } else {
            throw new Error()
          }
        })
        .catch(error => alert('ERROR', error))
    }
  },
  validations: {
    form: {
      login: {
        required,
        numeric,
        minLength: minLength(4),
        maxLength: maxLength(4)
      }
    }
  }
}
</script>
