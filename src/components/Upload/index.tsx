import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { pickFile } from './utils';

interface Props {
  onPressUpload?: Function,
  onPressPreview?: Function,
  onPressDownload?: Function,
  onPressDelete?: Function,
  apiUrl: string,
  files?: [],
  onUploaded?: Function,
  onUploadFailed?: Function,
  onUploadCanceled?: Function,
  title: string,
  token: any
}

const Upload: React.FC<Props> = (props) => {
  const [files, setFiles] = useState([]);

  const handlePickFile = () => {
    pickFile({ onPicked: (res: any) => { setFiles([...files, res]) } });
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Icon style={styles.uploadIcon} name="ios-cloud-upload" size={25} color={Colors.gray70} onPress={handlePickFile} />
      </View>
      <FlatList
        data={files}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Icon style={styles.fileIcon} name="ios-document" size={25} color={Colors.gray70} />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{item.name}</Text>
              {item.percentCompleted && item.percentCompleted < 100 && (
                <Progress.Bar progress={item.percentCompleted} width={null} style={styles.progressBar} color={Colors.red} />
              )}
            </View>
            <View style={styles.action}>
              <Icon name="ios-eye" size={20} color={Colors.gray70} onPress={props.onPressPreview} />
              <Icon name="ios-save" size={20} color={Colors.gray70} onPress={props.onPressDownload} />
              <Icon name="ios-trash-bin" size={20} color={Colors.gray70} onPress={props.onPressDelete} />
            </View>
          </View>
        )}
      />
    </View>
  )
}

Upload.defaultProps = {
  onPressUpload: () => { },
  onPressPreview: () => { },
  onPressDownload: () => { },
  onPressDelete: () => { },
  apiUrl: '',
  title: 'Attachment',
  files: [],
  onUploaded: () => { },
};

export default Upload;