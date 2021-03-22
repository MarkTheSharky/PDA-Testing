import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import App from '@/App.vue'

describe('App.vue', () => {

  it('enterNum changes running total', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('5');
    expect(wrapper.vm.runningTotal).to.equal(9)
  })

  it('should ADD 1 to 4 and get 5', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 4
    wrapper.vm.add('1');
    expect(wrapper.vm.runningTotal).to.equal(5)
  })

  it('should SUBTRACT 4 from 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 7
    wrapper.vm.subtract('4');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should MULTIPLY 3 by 5 and get 15', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 3
    wrapper.vm.multiply('5');
    expect(wrapper.vm.runningTotal).to.equal(15)
  })

  it('should DIVIDE 21 by 7 and get 3', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.previousTotal = 21
    wrapper.vm.divide('7');
    expect(wrapper.vm.runningTotal).to.equal(3)
  })

  it('should concatenate multiple number button clicks', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('1')
    wrapper.vm.numberClick('2')
    wrapper.vm.numberClick('3')
    wrapper.vm.numberClick('4')
    wrapper.vm.numberClick('5');
    expect(wrapper.vm.runningTotal).to.equal(12345)
  })

  it('should chain multiple operations together', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.numberClick('5')
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick('2')
    wrapper.vm.operatorClick('-')
    wrapper.vm.numberClick('1')
    wrapper.vm.operatorClick('=')
    expect(wrapper.vm.previousTotal).to.equal(9)
  })

  it('should clear the running total without affecting the calculation', () => {
    const wrapper = shallowMount(App)
    wrapper.vm.runningTotal = 0
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('*')
    wrapper.vm.numberClick(5)
    wrapper.vm.operatorClick('=')
    wrapper.vm.clearClick();
    expect(wrapper.vm.runningTotal).to.equal(0)
    expect(wrapper.vm.previousTotal).to.equal(25)
  })

})
