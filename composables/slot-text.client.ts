/**
 * Get reactive reference to the current textContent of slot.
  @param {string} name the name of the slot
  @param {object} slotProps the slot bindings(props) as an object
  @returns {string} the textContent of the slot
  */

// biome-ignore lint/suspicious/noExplicitAny: just any here
export const useSlotText = <T=any>(name: string, slotProps: T) => {
  const slot = useSlots()[name]
  const text = ref()

  //get text from every element in the slot recursively
  function getText(nodes?: VNode[]) {
    if (!nodes) return ""
    let text = ""
    for (const node of nodes) {
      if (typeof node.children === 'string') {
        text += node.children
        return
      }

      if (Array.isArray(node.children) && node.children.length)
        return getText(node.children as VNode[])

    }
    return text
  }

  if (slot) {
    const nodes = slot(slotProps)
    text.value = getText(nodes)
  }

  //watch for changes and update
  watch(() => useSlots()[name], () => {
    const slot = useSlots()[name]
    if (slot)
      text.value = getText(slot(slotProps))
  })

  return computed(() => text.value)
}
