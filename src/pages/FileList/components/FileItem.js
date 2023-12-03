import { YStack, XStack, Button, ListItem, SizableText, AlertDialog } from 'tamagui'
import { MaterialIcons } from '@expo/vector-icons'

const FileItem = ( { fileName, fileType } ) => {
  return (
    <AlertDialog>
      <AlertDialog.Trigger>
        <ListItem bc='$blue5' br='$4'>
          <SizableText
            size='$5'
            fontWeight='bold'
          >
           {fileName}
          </SizableText>
          <MaterialIcons
            size={40}
            color='#fff'
            name={fileType === 'image'? 'image' : fileType === 'pdf'? 'picture-as-pdf' : 'insert-drive-file'}
          />
        </ListItem>
      </AlertDialog.Trigger>

      <AlertDialog.Portal>
        <AlertDialog.Overlay
          key="overlay"
          animation="quick"
          opacity={0.5}
          exitStyle={{ opacity: 0 }}
        />
        <AlertDialog.Content
          bordered
          elevate
          key="content"
          minWidth='85%'
          animation={[
            'quick',
            {
              opacity: {
                overshootClamping: true,
              },
            },
          ]}
          enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
          exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
          x={0}
          scale={1}
          opacity={1}
          y={0}
        >
          <YStack space>
            <AlertDialog.Title>Arquivo</AlertDialog.Title>
            <AlertDialog.Description>
              O que você deseja fazer?
            </AlertDialog.Description>

            <XStack space="$3" justifyContent="flex-end">
              <AlertDialog.Cancel asChild>
                <Button bc='$red11Light'>
                  Exluir
                </Button>
              </AlertDialog.Cancel>
              <AlertDialog.Action asChild>
                <Button theme="active">
                  Baixar
                </Button>
              </AlertDialog.Action>
            </XStack>
          </YStack>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog>
  )
}

export default FileItem