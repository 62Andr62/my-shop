/* eslint-env mocha */

import { shallowMount } from '@vue/test-utils'
import assert from 'assert'
import HelloWorld from '../../src/components/HelloWorld'
import SmsCreate from '../../src/components/SmsCreate'
import sinon from 'sinon'

describe('HelloWorld', () => {
  const wrapper = shallowMount(HelloWorld)

  beforeEach(function () {
    sinon.stub(wrapper.vm, 'test1')
  })
  it('отображается кнопка, которая вызывает метод test', () => {
    assert.deepStrictEqual(JSON.stringify(wrapper.vm.showButton), 'true', 'should be true')
    wrapper.vm.test()
  })
})


describe('checkForm method', () => {
  it('should fetch data from server and alert success when response status is 200', async () => {
  const form = { name: 'John', phone: '1234567890' }
  const url = 'http://localhost:3000/sms/check'
  
  global.fetch = jest.fn().mockImplementation(() => {
    return Promise.resolve({
      status: 200
    })
  })
  
  const wrapper = shallowMount(SmsCreate, {
    data() {
      return {
        form: form
      }
    }
  })
  
  await wrapper.vm.checkForm()
  
  expect(fetch).toHaveBeenCalledWith(url, {
    method: 'POST',
    body: JSON.stringify(form),
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    }
  })
  
  expect(alert).toHaveBeenCalledWith('success')
  })
})