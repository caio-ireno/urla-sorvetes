import { useBreakpointValue } from '@chakra-ui/react'

export default function IsMobile() {
  return useBreakpointValue({
    base: true,
    md: false,
  })
}