import DocumentPicker from 'react-native-document-picker';
import api from '../../api';
import { HttpHelper } from '../../utils';
interface PickFileProps {
  onPicked?: Function,
  onCancel?: Function,
  onFailed?: Function,
}

export const pickFile = async (props: PickFileProps) => {
  const { doc, docx, xls, xlsx, pdf, ppt, pptx } = DocumentPicker.types;
  try {
    const file = await DocumentPicker.pick({
      type: [doc, docx, xls, xlsx, pdf, ppt, pptx],
      allowMultiSelection: false
    });
    props.onPicked({ ...file[0], status: 'uploading' })
    await uploadToServer({
      url: api.partnershipsAttachment,
      file: file[0],
      onUploadProgress: (progress: any) => {
        // props.onPicked?.(progress)
      },
      onSuccess: (data: any) => props.onPicked(data),
      onError: (data: any) => props.onPicked(data),
    })
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      props.onCancel?.(err);
    } else {
      props.onFailed?.(err);
    }
  }
};

export const pickMultipleFile = async (props: PickFileProps) => {
  const { doc, docx, xls, xlsx, pdf, ppt, pptx } = DocumentPicker.types;
  try {
    const files = await DocumentPicker.pickMultiple({
      type: [doc, docx, xls, xlsx, pdf, ppt, pptx],
    });
    for (const file of files) {
      await uploadToServer({
        url: api.partnershipsAttachment,
        file,
        onUploadProgress: (progress: any) => {
          // props.onPicked?.(progress)
        },
        onSuccess: (data: any) => props.onPicked(data),
        onError: (data: any) => props.onPicked(data),
      })
    }
  } catch (err) {
    if (DocumentPicker.isCancel(err)) {
      props.onCancel?.(err);
    } else {
      props.onFailed?.(err);
    }
  }
};

interface UploadToServerProps {
  url: string,
  onUploadProgress?: Function,
  onSuccess?: Function,
  onError?: Function,
  file: any
}

export const uploadToServer = async (props: UploadToServerProps) => {
  const data = new FormData();
  data.append('file', {
    uri: props.file.uri,
    name: props.file.name,
    type: props.file.type
  });

  const config = {
    onUploadProgress: (event: any) => {
      const percentCompleted = Math.round((event.loaded * 100) / event.total);
      props.onUploadProgress?.({ percentCompleted, ...props.file });
    },
    headers: {
      'Content-type': 'multipart/form-data'
    }
  };

  try {
    const result = await HttpHelper.post(props.url, data, config);
    props.onSuccess?.({ ...result.data.data, ...props.file, status: 'success' });
  } catch (error) {
    props.onError?.({ error, ...props.file, status: 'failed' });
  }
};