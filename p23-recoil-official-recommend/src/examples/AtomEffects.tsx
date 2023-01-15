import {Button} from '@chakra-ui/button'
import {Input} from '@chakra-ui/input'
import {Box, Divider, Heading, VStack} from '@chakra-ui/layout'
import React, {useState} from 'react'
import {
  atom,
  atomFamily,
  DefaultValue,
  useRecoilCallback,
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
} from 'recoil'
import {shoppingListAPI} from './FakeApi'

type ItemType = {
  label: string
  checked: boolean
}

class CachedApi {
  cachedItems: Record<string, ItemType> | undefined

  private async getItems() {
    if(!this.cachedItems) this.cachedItems = await shoppingListAPI.getItems()

    return this.cachedItems
  }

  async getIds() {
    return Object.keys(await this.getItems()).map((id) => parseInt(id))
  }

  async getItem(id: number) {
    const items = await this.getItems()
    if(items[id] === undefined) return new DefaultValue()
    return items[id]
  }
}

const cachedApi = new CachedApi()

const idsState = atom<number[]>({
  key: 'ids',
  default: [],
  effects: [
    ({setSelf}) => {
      setSelf(cachedApi.getIds())
    },
  ],
})

type DefaultItemState = {
  label: string;
  checked: boolean;
}

const itemState = atomFamily<ItemType, number>({
  key: 'item',
  default: {label: '', checked: false},
  effects: (id) => [
    ({onSet, setSelf, trigger}) => {
      setSelf(cachedApi.getItem(id))

      onSet((item: DefaultValue|DefaultItemState, oldItem: DefaultValue|DefaultItemState) => {
        if(oldItem instanceof DefaultValue && trigger === 'get') return

        if(item instanceof DefaultValue) {
          shoppingListAPI.deleteItem(id).then(() => console.log('done'))
        } else {
          shoppingListAPI.createOrUpdateItem(id, item).then(() => console.log('done'))
        }
      })
    },
  ],
})

export const AtomEffects = () => {
  const ids = useRecoilValue(idsState)
  const resetList = useResetRecoilState(idsState)
  const nextId = ids.length

  const insertItem = useRecoilCallback(({set}) => (label: string) => {
    set(idsState, [...ids, nextId])
    set(itemState(nextId), {label, checked: false})
  })

  return (
    <Container onClear={() => resetList()}>
      {ids.map((id) => (
        <Item key={id} id={id} />
      ))}
      <NewItemInput
        onInsert={(label) => {
          insertItem(label)
        }}
      />
    </Container>
  )
}

const Container: React.FC<{onClear: () => void}> = ({children, onClear}) => {
  return (
    <Box display="flex" flexDir="column" alignItems="center" pt={10}>
      <Box width="400px" backgroundColor="yellow.100" p={5} borderRadius="lg">
        <Heading size="lg" mb={4}>
          Shopping List
        </Heading>
        <VStack spacing={3} divider={<Divider borderColor="rgba(86, 0, 0, 0.48)" />}>
          {children}
        </VStack>
      </Box>
      <Button variant="link" mt={3} onClick={onClear}>
        Clear list
      </Button>
    </Box>
  )
}

type ItemProps = {
  id: number
}

const Item = ({id}: ItemProps) => {
  const [item, setItem] = useRecoilState(itemState(id))

  return (
    <Box
      rounded="md"
      textDecoration={item.checked ? 'line-through' : ''}
      opacity={item.checked ? 0.5 : 1}
      _hover={{textDecoration: 'line-through'}}
      cursor="pointer"
      width="100%"
      onClick={() => setItem({...item, checked: !item.checked})}
    >
      {item.label}
    </Box>
  )
}

const NewItemInput = ({onInsert}: {onInsert: (label: string) => void}) => {
  const [value, setValue] = useState('')

  return (
    <Input
      value={value}
      placeholder="New item"
      padding={0}
      height="auto"
      border="none"
      _focus={{border: 'none'}}
      _placeholder={{color: 'rgba(86, 0, 0, 0.48)'}}
      onChange={(e) => {
        setValue(e.currentTarget.value)
      }}
      onKeyPress={({key}) => {
        if (key === 'Enter') {
          onInsert(value)
          setValue('')
        }
      }}
    />
  )
}