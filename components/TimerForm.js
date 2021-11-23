import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";

import TimerButton from "./TimerButton";

export default function TimerForm({
  id,
  title,
  project,
  onFormClose,
  onFormSubmit,
}) {
  const [titles, setTitles] = useState(id ? title : "");
  const [projects, setProjects] = useState(id ? project : "");

  const submitText = id ? "Update" : "Create";

  const handleTitleChange = (val) => {
    setTitles(val);
  };

  const handleProjectChange = (val) => {
    setProjects(val);
  };

  const handleSubmit = () => {
    console.log("Handle Submitted", id, titles, projects);
    onFormSubmit({
      id,
      title,
      project,
    });
  };

  return (
    <View style={styles.formContainer}>
      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}> Title </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={titles}
            onChangeText={(val) => handleTitleChange(val)}
          />
        </View>
      </View>

      <View style={styles.attributeContainer}>
        <Text style={styles.textInputTitle}> Project </Text>
        <View style={styles.textInputContainer}>
          <TextInput
            style={styles.textInput}
            value={projects}
            onChangeText={(val) => handleProjectChange(val)}
          />
        </View>
      </View>

      <View style={styles.buttonGroup}>
        <TimerButton
          small
          color="#21BA45"
          title={submitText}
          onPress={handleSubmit}
        />
        <TimerButton
          small
          color="#DB2828"
          title="Cancel"
          onPress={onFormClose}
        />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: "white",
    borderColor: "#D6D7DA",
    borderWidth: 2,
    borderRadius: 10,
    padding: 15,
    margin: 15,
    marginTop: 40, //remove if required
    elevation: 2, //remove if required
  },
  textInput: { height: 30, padding: 5, fontSize: 12 },
  textInputContainer: {
    borderColor: "#D6D7DA",
    borderRadius: 2,
    borderWidth: 1,
    marginBottom: 5,
  },
  textInputTitle: { fontSize: 14, fontWeight: "bold", marginBottom: 5 },
  attributeContainer: { marginVertical: 8 },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
