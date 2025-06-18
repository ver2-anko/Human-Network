// src/components/CardList.tsx
import { Card, CardContent, Typography, List, ListItem } from '@mui/material';

type CardListProps = {
  title: string;
  items: string[];
};

const CardList = ({ title, items }: CardListProps) => {
  return (
    <Card sx={{ minWidth: 250, mx: 1 }}>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <List dense>
          {items.map((item, index) => (
            <ListItem key={index} sx={{ pl: 0 }}>
              ・{item}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default CardList;