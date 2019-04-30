import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import calculadora from '@/components/calculadora.vue'

describe('calculadora.vue', () => {
  it('Test para borrar el actual', () => {
    const wrapper = shallowMount(calculadora)
    //expect(wrapper.text()).to.include(msg)

    expect(wrapper.vm.actual).to.equals('')
  })
})

describe('calculadora.vue', () => {
    it('Test para multiplicar', () => {
      const wrapper = shallowMount(calculadora)
      //expect(wrapper.text()).to.include(msg)
      wrapper.vm.actual = 2
      wrapper.vm.multiplicar()
      wrapper.vm.actual = 3
      wrapper.vm.igual()
      expect(wrapper.vm.actual).to.equals('6')
    })
  })

 describe('calculadora.vue', () => {
    it('Test para sumar', () => {
      const wrapper = shallowMount(calculadora)
      //expect(wrapper.text()).to.include(msg)
      wrapper.vm.actual = 53
      wrapper.vm.sumar()
      wrapper.vm.actual = 145
      wrapper.vm.igual()
      expect(wrapper.vm.actual).to.equals('198')
    })
  })

  describe('calculadora.vue', () => {
    it('Test para el signo', () => {
      const wrapper = shallowMount(calculadora)
      //expect(wrapper.text()).to.include(msg)
      wrapper.vm.actual = '2'
      wrapper.vm.signo()
      expect(wrapper.vm.actual).to.equals('-2')
    })
  })

  describe('calculadora.vue', () => {
    it('Test para dividir', () => {
      const wrapper = shallowMount(calculadora)
      //expect(wrapper.text()).to.include(msg)
      wrapper.vm.actual = 64
      wrapper.vm.dividir()
      wrapper.vm.actual = 4
      wrapper.vm.igual()
      expect(wrapper.vm.actual).to.equals('16')
    })
  })
