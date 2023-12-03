import { YStack } from 'tamagui';

import FileItem from './components/FileItem';

const FileList = () => {
  return (
    <YStack f={1} jc="center" ai="center">
      <YStack width="90%" space="$3">
        <FileItem fileName="teste" fileType="image" />
        <FileItem fileName="teste2" fileType="pdf" />
        <FileItem fileName="teste3" fileType="other" />
      </YStack>
    </YStack>
  );
};

export default FileList;
