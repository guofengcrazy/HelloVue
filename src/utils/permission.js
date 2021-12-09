export default function permission (Vue) {
  Vue.directive('has', {
    mounted(el, binding) {
      const keywords = ['second']
      if (!keywords.includes(binding.value)) {
        el.style['pointer-events']= 'none'
      }
      console.log(el)
      console.log(binding)
    } 
  })
}