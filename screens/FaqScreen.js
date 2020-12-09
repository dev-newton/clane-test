import React, {useState, useRef} from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {Transition, Transitioning} from 'react-native-reanimated';

import styles from './styles/FaqScreenStyles';
import data from '../data/faq-data';
import Colors from '../constants/Colors';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

export default function FaqScreen() {
  const [currentIndex, setCurrentIndex] = useState(null);

  const ref = useRef();

  return (
    <Transitioning.View ref={ref} transition={transition}>
      <Text style={styles.headerTitle}>FAQ</Text>
      <ScrollView>
        {data.map(({question, answer}, index) => {
          return (
            <View key={question}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.animateNextTransition();
                  setCurrentIndex(index === currentIndex ? null : index);
                }}
                style={
                  index === currentIndex
                    ? styles.cardContainer2
                    : styles.cardContainer
                }
                activeOpacity={0.9}>
                <View style={styles.cardRow}>
                  <View style={styles.card}>
                    <Text
                      style={
                        index === currentIndex
                          ? styles.headingQuestion2
                          : styles.headingQuestion
                      }>
                      {question}
                    </Text>
                    {index === currentIndex && (
                      <View style={styles.headingBody}>
                        <Text style={styles.headingAnswer}>{answer}</Text>
                      </View>
                    )}
                  </View>
                  <View>
                    <Icon
                      style={styles.icon}
                      name={
                        index === currentIndex
                          ? 'chevron-circle-down'
                          : 'chevron-circle-right'
                      }
                      size={20}
                      color={Colors.primary_light_1}
                    />
                  </View>
                </View>
              </TouchableOpacity>
              <View style={styles.horLine} />
            </View>
          );
        })}
      </ScrollView>
    </Transitioning.View>
  );
}
