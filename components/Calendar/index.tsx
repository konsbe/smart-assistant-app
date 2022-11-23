import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Calendar} from 'react-native-calendars';
import {Card, Avatar} from 'react-native-paper';
// import Typography from '../components/Typography';

const timeToString = (time: string | number | Date) => {
  const date = new Date(time);
  return date.toISOString().split('T')[0];
};

const Schedule: React.FC = () => {
  const [items, setItems] = useState({});

  const loadItems = (day: { timestamp: any }) => {
    
      for (let i = -15; i < 85; i++) {
        const time = day.timestamp + i * 24 * 60 * 60 * 1000;
        const strTime = timeToString(time);
        if (!items[strTime]) {
          items[strTime] = [];
          const numItems = Math.floor(Math.random() * 3 + 1);
          for (let j = 0; j < numItems; j++) {
            items[strTime].push({
              name: 'Item for ' + strTime + ' #' + j,
              height: Math.max(50, Math.floor(Math.random() * 150)),
            });
          }
        }
      }
      const newItems = {};
      Object.keys(items).forEach((key) => {
        newItems[key] = items[key];
      });
      setItems(newItems);
  };

  const renderItem = (item: { name: any; }) => {
    return (
      <TouchableOpacity style={{marginRight: 10, marginTop: 17}}>
        <Card>
          <Card.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <Text>{item.name}</Text>
              <Avatar.Text label="J" />
            </View>
          </Card.Content>
        </Card>
      </TouchableOpacity>
    );
  };

  return (
    <View style={{display:'flex', margin:20, width:'100%'}}>
     <Calendar
  markingType={'multi-period'}
  markedDates={{
    '2022-10-14': {
      periods: [
        {startingDay: true, endingDay: false, color: '#5f9ea0'},
        {startingDay: true, endingDay: true, color: '#ffa500'},
        {startingDay: true, endingDay: false, color: '#f0e68c'}
      ]
    },
    '2022-10-15': {
      periods: [
        {startingDay: false, endingDay: true, color: '#5f9ea0'},
        {color: 'transparent'},
        {selected: true, endingDay: false, color: '#f0e68c'}
      ]
    },
    '2022-10-16': {
      periods: [
        {startingDay: true, endingDay: true, color: '#ffa500'},
        {color: 'transparent'},
        {startingDay: false, endingDay: true, color: '#f0e68c'}
      ]
    }
  }}
/>
    </View>
  );
};

export default Schedule;