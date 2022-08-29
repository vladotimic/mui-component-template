import {
  Delete as DeleteIcon,
  Send as SendIcon,
  Save as SaveIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const data = [
  {
    id: '1',
    text: 'Button variants',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
      },
    ],
  },
  {
    id: '2',
    text: 'Disabled buttons',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        disabled: true,
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        disabled: true,
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        disabled: true,
      },
    ],
  },
  {
    id: '3',
    text: 'Small button sizes',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        size: 'small',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        size: 'small',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        size: 'small',
      },
    ],
  },
  {
    id: '4',
    text: 'Medium button sizes',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        size: 'medium',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        size: 'medium',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        size: 'medium',
      },
    ],
  },
  {
    id: '5',
    text: 'Large button sizes',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        size: 'large',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        size: 'large',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        size: 'large',
      },
    ],
  },
  {
    id: '6',
    text: 'Button secondary color',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        color: 'secondary',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        color: 'secondary',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        color: 'secondary',
      },
    ],
  },
  {
    id: '7',
    text: 'Button success color',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        color: 'success',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        color: 'success',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        color: 'success',
      },
    ],
  },
  {
    id: '8',
    text: 'Button error color',
    buttons: [
      {
        id: '1',
        text: 'Text',
        variant: 'text',
        color: 'error',
      },
      {
        id: '2',
        text: 'Contained',
        variant: 'contained',
        color: 'error',
      },
      {
        id: '3',
        text: 'Outlined',
        variant: 'outlined',
        color: 'error',
      },
    ],
  },
  {
    id: '9',
    text: 'Button with icons and label',
    buttons: [
      {
        id: '1',
        text: 'Delete',
        variant: 'contained',
        color: 'error',
        startIcon: <DeleteIcon />,
      },
      {
        id: '2',
        text: 'Send',
        variant: 'contained',
        endIcon: <SendIcon />,
      },
      {
        id: '3',
        text: 'Save',
        variant: 'contained',
        color: 'success',
        startIcon: <SaveIcon />,
      },
      {
        id: '4',
        text: 'Edit',
        variant: 'contained',
        startIcon: <EditIcon />,
      },
    ],
  },
  {
    id: '10',
    text: 'Loading buttons',
    buttons: [
      {
        id: '1',
        text: 'Submit',
        variant: 'outline',
        loading: true,
      },
      {
        id: '2',
        text: 'Submit',
        variant: 'contained',
        loading: true,
      },
      {
        id: '3',
        text: 'Save',
        variant: 'contained',
        loading: true,
        loadingPosition: 'start',
        startIcon: <SaveIcon />,
      },
    ],
  },
];

export default data;
