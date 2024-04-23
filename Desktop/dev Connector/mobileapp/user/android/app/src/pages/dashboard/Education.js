import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { deleteEducation } from '../../component/api/profileActions';
import formatDate from '../../utils/formatDate';

const Education = ({ education }) => {
  const educations = education.map((edu) => (
    <View key={edu._id} style={styles.educationItem}>
      <Text style={styles.tableCell}>{edu.school}</Text>
      <Text style={styles.tableCell}>{edu.degree}</Text>
      <Text style={styles.tableCell}>
        {formatDate(edu.from)} - {edu.to ? formatDate(edu.to) : 'Now'}
      </Text>
      <View style={styles.tableCellButtons}>
        {/* <TouchableOpacity
          onPress={() => handleView(edu._id)} // Assuming handleView needs to be implemented
          style={[styles.button, styles.viewButton]}>
          <Text style={styles.buttonText}>View</Text>
        </TouchableOpacity> */}
        <TouchableOpacity
          onPress={() => deleteEducation(edu._id)}
          style={[styles.button, styles.deleteButton]}>
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  ));

  return (
    <View style={styles.educationContainer}>
      <Text style={styles.header}>Education Credentials</Text>
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderCell}>School</Text>
        <Text style={styles.tableHeaderCell}>Degree</Text>
        <Text style={styles.tableHeaderCell}>Years</Text>
        <Text style={styles.tableHeaderCell}>Actions</Text>
      </View>
      {educations}
    </View>
  );
};

const styles = StyleSheet.create({
  educationContainer: {
    marginVertical: 10,
  },
  header: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
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
  educationItem: {
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
    width: '100%',
    height: 30,
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
  viewButton: {
    backgroundColor: '#28a745', // View color
  },
  deleteButton: {
    backgroundColor: '#dc3545', // Delete color
  },
});

export default Education;
