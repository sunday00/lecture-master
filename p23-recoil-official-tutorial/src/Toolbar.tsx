import {Icon, IconButton, VStack} from '@chakra-ui/react'
// import {useContext} from 'react'
import {Square} from 'react-feather'
import { /* useRecoilState,*/ useSetRecoilState } from 'recoil';
import { elementState } from './Canvas';
// import {ElementsContext} from './Canvas'

export const Toolbar = () => {
    // const {addElement} = useContext(ElementsContext)
    // const [elements, setElements] = useRecoilState(elementState)
    const setElements = useSetRecoilState(elementState)

    return (
      <VStack
        position="absolute"
        top="20px"
        left="20px"
        backgroundColor="white"
        padding={2}
        boxShadow="md"
        borderRadius="md"
        spacing={2}
      >
          <IconButton
            // onClick={addElement}
            onClick={() => {
              setElements((elements) => [...elements, elements.length])
            }}
            aria-label="Add rectangle"
            icon={<Icon style={{width: 24, height: 24}} as={Square} />}
          />
      </VStack>
    )
}
