import {StyleSheet} from 'react-native';
import Colors from '../../constants/Colors';

export default StyleSheet.create({
  headerTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 15,
    paddingVertical: 10,
    color: Colors.white,
    textAlign: 'center',
    backgroundColor: Colors.primary,
    width: '100%',
  },
  cardContainer: {
    marginHorizontal: 20,
    paddingVertical: 20,
    flexGrow: 1,
  },
  cardContainer2: {
    backgroundColor: Colors.primary_light,
    marginHorizontal: 0,
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  horLine: {
    borderColor: Colors.grey,
    borderWidth: 0.3,
  },
  headingQuestion: {
    fontFamily: 'OpenSans-Bold',
    color: Colors.black,
    fontWeight: '300',
    marginVertical: 5,
  },
  headingQuestion2: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: '300',
    marginVertical: 5,
    color: Colors.primary,
  },
  headingAnswer: {
    fontFamily: 'OpenSans-Regular',
    color: Colors.black,
  },
  icon: {
    justifyContent: 'center',
  },
  card: {
    width: '90%',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexGrow: 1,
  },
});
