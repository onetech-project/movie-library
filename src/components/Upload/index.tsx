import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Colors } from '../../utils';
import * as Progress from 'react-native-progress';
import { FlatList } from 'react-native-gesture-handler';
import styles from './styles';
import { pickFile } from './utils';

interface Props {
  onPressUpload?: any,
  onPressPreview?: any,
  onPressDownload?: any,
  onPressDelete?: any,
  apiUrl: string,
  files?: [],
  onUploaded?: any,
  onUploadFailed?: any,
  onUploadCanceled?: any,
  title: string,
  token: any
}

const Upload: React.FC<Props> = (props) => {
  const [files, setFiles] = useState([]);

  const handlePickFile = () => {
    pickFile({
      onPicked: (res: any) => {
        setFiles([...files, res])
      }
    });
  }

  const handlePreview = (item: any) => {

  }

  const handleDownload = (item: any) => {

  }

  const handleDelete = (item: any) => {
    const data = files.filter(file => file._id !== item._id);
    props.onPressDelete?.(data);
    setFiles(data);
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{props.title}</Text>
        <Icon name="ios-cloud-upload" size={25} color={Colors.red} onPress={handlePickFile} />
      </View>
      <FlatList
        data={files}
        style={styles.list}
        ListEmptyComponent={() => (
          <View style={[styles.itemContainer, styles.listEmpty]}>
            <Icon size={25} name="ios-close-circle" color={Colors.gray70} />
          </View>
        )}
        renderItem={({ item }) => (
          <View style={[styles.itemContainer]}>
            <Icon style={[styles.fileIcon, item?._id ? styles.fileIconSuccess : styles.fileIconFailed]} name="ios-document" size={25} />
            <View style={styles.fileInfo}>
              <Text style={styles.fileName}>{item?.name}</Text>
              {(!item?._id && !item?.error) && (
                <Progress.Bar progress={item.percentCompleted} indeterminate width={null} style={styles.progressBar} color={Colors.red} />
              )}
              {item.error && (
                <Text style={styles.errorMessage}>{item?.error.message}</Text>
              )}
            </View>
            {item?._id && (
              <View style={styles.action}>
                <>
                  <Icon name="ios-eye" size={20} color={Colors.gray70} onPress={() => handlePreview(item)} />
                  <Icon name="ios-save" size={20} color={Colors.gray70} onPress={() => handleDownload(item)} />
                  <Icon name="ios-trash-bin" size={20} color={Colors.gray70} onPress={() => handleDelete(item)} />
                </>
              </View>
            )}
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