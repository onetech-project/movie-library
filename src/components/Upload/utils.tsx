import axios from 'axios';
import DocumentPicker from 'react-native-document-picker';

interface PickFileProps {
  onPicked?: Function,
  onCancel?: Function,
  onFailed?: Function,
  token?: string,
}

export const pickFile = async (props: PickFileProps) => {
  const { doc, docx, xls, xlsx, pdf, ppt, pptx } = DocumentPicker.types;
  try {
    const file = await DocumentPicker.pick({
      type: [doc, docx, xls, xlsx, pdf, ppt, pptx],
    });
    await uploadToServer({
      url: 'https://api.imgur.com/3/image',
      file: file[0],
      onUploadProgress: (progress: any) => props.onPicked?.(progress),
      onSuccess: (data: any) => props.onPicked?.(data),
      token: props.token
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
        url: 'https://api.imgur.com/3/image',
        file,
        onUploadProgress: (progress: any) => props.onPicked?.(progress),
        onSuccess: (data: any) => props.onPicked?.(data),
        token: props.token
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
  token: string,
}

export const uploadToServer = async (props: UploadToServerProps) => {
  var data = new FormData();
  data.append('file', {
    uri: props.file.uri,
    name: props.file.name,
    type: props.file.type
  });
  console.log(data);

  let config = {
    onUploadProgress: function (progressEvent: any) {
      const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
      props.onUploadProgress?.({ percentCompleted, ...props.file });
    },
    headers: {
      Authorization: `Beare ${props.token}`
    }
  };

  try {
    const result = await axios.post(props.url, data, { headers: config });
    props.onSuccess?.({ ...result.data, percentCompleted: 100, ...props.file });
  } catch (error) {
    console.log(error);
    props.onError?.(error);
  }
};