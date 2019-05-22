import { StyleSheet } from 'react-native';

const mainColor = '#143441';

export { mainColor };

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  paddingContainer: {
    flex: 1,
    padding: 30,
  },
  text: {
    fontSize: 15,
    color: mainColor,
  },
  titleText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: mainColor,
  },
  largeText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: mainColor,
  },
  labelText: {
    fontSize: 12,
    color: mainColor,
    marginVertical: 10,
  },
  placeholderText: {
    fontSize: 15,
    color: 'gray',
  },
  button: {
    height: 50,
    backgroundColor: mainColor,
    borderRadius: 5,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 15,
    textAlign: 'center',
    color: 'white',
  },
  searchBox: {
    height: 50,
    backgroundColor: 'lightgray',
    borderRadius: 5,
    paddingHorizontal: 20,
    justifyContent: 'center',
  },
});
