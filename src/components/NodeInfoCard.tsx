import type { FC } from 'react';
import { Card, CardContent, Typography, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface NodeInfo {
  id: string;
  label: string;
  color: string;
}

interface Props {
  node: NodeInfo;
  onClose: () => void;
}

const NodeInfoCard: FC<Props> = ({ node, onClose }) => {
  return (
    <Card sx={{ width: 250, borderRadius: 3, boxShadow: 4, position: 'relative' }}>
      <IconButton
        size="small"
        onClick={onClose}
        sx={{ position: 'absolute', top: 8, right: 8 }}
      >
        <CloseIcon />
      </IconButton>
      <CardContent>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }} fontFamily={'Segoe UI Symbol'} color='#24140e'>
          Node Infomation
        </Typography>
        <Typography variant="h6"><strong>ID:</strong> {node.id}</Typography>
        <Typography variant="h6"><strong>ラベル:</strong> {node.label}</Typography>
        <Typography variant="h6">
          <strong>色:</strong>{' '}
          <Box component="span" sx={{ color: node.color }}>{node.color}</Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default NodeInfoCard;
