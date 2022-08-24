import {
  Delete as DeleteIcon,
  Send as SendIcon,
  Save as SaveIcon,
  Edit as EditIcon,
} from '@mui/icons-material';

const data = [
  {
    text: 'Button variants',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
      },
      {
        text: 'Contained',
        variant: 'contained',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
      },
    ],
  },
  {
    text: 'Disabled buttons',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        disabled: true,
      },
      {
        text: 'Contained',
        variant: 'contained',
        disabled: true,
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        disabled: true,
      },
    ],
  },
  {
    text: 'Small button sizes',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        size: 'small',
      },
      {
        text: 'Contained',
        variant: 'contained',
        size: 'small',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        size: 'small',
      },
    ],
  },
  {
    text: 'Medium button sizes',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        size: 'medium',
      },
      {
        text: 'Contained',
        variant: 'contained',
        size: 'medium',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        size: 'medium',
      },
    ],
  },
  {
    text: 'Large button sizes',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        size: 'large',
      },
      {
        text: 'Contained',
        variant: 'contained',
        size: 'large',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        size: 'large',
      },
    ],
  },
  {
    text: 'Button secondary color',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        color: 'secondary',
      },
      {
        text: 'Contained',
        variant: 'contained',
        color: 'secondary',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        color: 'secondary',
      },
    ],
  },
  {
    text: 'Button success color',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        color: 'success',
      },
      {
        text: 'Contained',
        variant: 'contained',
        color: 'success',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        color: 'success',
      },
    ],
  },
  {
    text: 'Button error color',
    buttons: [
      {
        text: 'Text',
        variant: 'text',
        color: 'error',
      },
      {
        text: 'Contained',
        variant: 'contained',
        color: 'error',
      },
      {
        text: 'Outlined',
        variant: 'outlined',
        color: 'error',
      },
    ],
  },
  {
    text: 'Button with icons and label',
    buttons: [
      {
        text: 'Delete',
        variant: 'contained',
        color: 'error',
        startIcon: <DeleteIcon />,
      },
      {
        text: 'Send',
        variant: 'contained',
        endIcon: <SendIcon />,
      },
      {
        text: 'Save',
        variant: 'contained',
        color: 'success',
        startIcon: <SaveIcon />,
      },
      {
        text: 'Edit',
        variant: 'contained',

        startIcon: <EditIcon />,
      },
    ],
  },
  {
    text: 'Loading buttons',
    buttons: [
      {
        text: 'Submit',
        variant: 'outline',
        loading: true,
      },
      {
        text: 'Submit',
        variant: 'contained',
        loading: true,
      },
      {
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
