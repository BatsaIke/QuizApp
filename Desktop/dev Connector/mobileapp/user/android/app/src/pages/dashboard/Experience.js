import React, { Fragment } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { deleteExperience } from '../../component/api/profileActions';
import formatDate from '../../utils/formatDate';

const Experience = ({ experience }) => {
  const experiences = experience.map((exp) => (
    <View key={exp._id} style={styles.experienceItem}>
      <Text style={styles.tableCell}>{exp.company}</Text>
      <Text style={styles.tableCell}>{exp.title}</Text>
      <Text style={styles.tableCell}>
        {formatDate(exp.from)} - {exp.to ? formatDate(exp.to) : 'Now'}
      </Text>
      <View style={styles.tableCellButtons}>
       
        {/* <TouchableOpacity
          onPress={() => handleView(exp._id)}
          style={[styles.button, styles.viewButton]}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => deleteExperience(exp._id)}
          style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  ));

  return (
    <Fragment>
      <Text style={styles.heading}>Experience Credentials</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderCell}>Company</Text>
        <Text style={styles.tableHeaderCell}>Title</Text>
        <Text style={styles.tableHeaderCell}>Years</Text>
        <Text style={styles.tableHeaderCell}>Actions</Text>
      </View>
      {experiences}
    </Fragment>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  tableHeader: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  tableHeaderCell: {
    flex: 1,
    fontWeight: 'bold',
  },
  experienceItem: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    marginBottom: 10,
  },
  tableCell: {
    flex: 1,
  },
  tableCellButtons: {
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  button: {
    width: '100%', // Set a fixed width for the buttons
    height: 30, // Set a fixed height for the buttons
    padding: 5,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 2,
  },
  buttonText: {
    color: '#fff',
    fontSize: 10,
  },
  editButton: {
    backgroundColor: '#007bff', // Edit color
  },
  viewButton: {
    backgroundColor: '#28a745', // View color
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Delete color
  },
});

export default Experience;
