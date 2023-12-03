import { useState } from 'react';
import { YStack, XStack, Button, useTheme, Image, SizableText } from 'tamagui'
import { Feather, AntDesign } from '@expo/vector-icons'
import * as DocumentPicker from 'expo-document-picker';


const Home = () => {
  const theme = useTheme();
  const [document, setDocument] = useState(null)
  const [documentType, setDocumentType] = useState('')

  const pickDocument = async () => {
    try {
      const res = await DocumentPicker.getDocumentAsync({});

      if (res) {
        setDocument(res.assets[0])
        if (res.assets[0].mimeType.includes('pdf')) setDocumentType('pdf')
        else if (res.assets[0].mimeType.includes('image')) setDocumentType('image')
        else setDocumentType('other')
        console.log(res)
      }
    } catch (error) {
      console.log('Error ao selecionar arquivo: ', error)
    }
  }

  return (
    <YStack
      f={1}
      jc='center'
      ai='center'
    >
      <YStack
        width='95%'
        ai='center'
        space='$2.5'
        p='$4'
        br='$4'
      >
        {documentType === 'image' &&
        <YStack
          ai='center'
        >
          <Image
            source={{uri: `${document.uri}`, width: 200, height: 300,}}
            br='$4'
          />
          <SizableText color='$gray8Dark' size='$8' fontWeight='bold'>
            {document.name}
          </SizableText>
        </YStack>}

        {documentType === 'pdf' &&
        <YStack
          ai='center'
        >
          <AntDesign name="pdffile1" size={100} color="black" />
          <SizableText color='$gray8Dark' size='$8' fontWeight='bold'>
            {document.name}
          </SizableText>
        </YStack>}

        {documentType === 'other' &&
        <YStack
          ai='center'
        >
          <AntDesign name="file1" size={100} color="black" />
          <SizableText color='$gray8Dark' size='$8' fontWeight='bold'>
            {document.name}
          </SizableText>
        </YStack>}
        <XStack
          space='$1.5'
        >
          <Button
            onPress={() => pickDocument()}
            backgroundColor={theme.blue7}
            iconAfter={<Feather size={25} name='file-plus'/>}
          >
           {document? 'Selecione outro arquivo' : 'Selecione um arquivo'}
          </Button>
        
          {document && <Button
            onPress={() => pickDocument()}
            backgroundColor={theme.green8}
            iconAfter={<Feather size={25} name='upload-cloud'/>}
          >
            Salvar
          </Button>}
        </XStack>
      </YStack>
    </YStack>
  )
}

export default Home