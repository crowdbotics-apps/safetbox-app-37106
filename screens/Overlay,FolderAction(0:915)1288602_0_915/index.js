import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_0_914}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e526a60-5f4c-49b3-b571-33d68089f077"
          }}
          style={styles.ImageBackground_0_894}
        />
        <View style={styles.View_0_913}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4179fa8-049c-4ee4-b91f-44598d27cd2d"
            }}
            style={styles.ImageBackground_0_896}
          />
          <View style={styles.View_0_897}>
            <Text style={styles.Text_0_897}>
              Rename Copy Duplicate Move to Folder
            </Text>
          </View>
          <View style={styles.View_0_898}>
            <Text style={styles.Text_0_898}>Delete Folder</Text>
          </View>
          <View style={styles.View_0_907}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97969be0-1349-4f10-adab-b84e587afef9"
              }}
              style={styles.ImageBackground_0_899}
            />
            <View style={styles.View_0_906}>
              <View style={styles.View_0_900}>
                <Text style={styles.Text_0_900}>Adobe Meeting Notes</Text>
              </View>
              <View style={styles.View_0_901}>
                <Text style={styles.Text_0_901}>
                  Secure Folder in Private Vault
                </Text>
              </View>
              <View style={styles.View_0_902}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_902_0_2839}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce78eccc-ad42-490d-b671-efa59a7c3138"
                  }}
                  style={styles.ImageBackground_I0_902_0_2840}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebb1da69-2dc7-4ac7-af02-82ecc313358d"
                  }}
                  style={styles.ImageBackground_I0_902_0_2841}
                />
                <View style={styles.View_I0_902_0_2844}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f828b47c-f1b5-4940-a24b-692241481af4"
                    }}
                    style={styles.ImageBackground_I0_902_0_2842}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e740b9f-faca-438a-b7bb-b3b2ce0dda01"
                    }}
                    style={styles.ImageBackground_I0_902_0_2843}
                  />
                </View>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68c2bde7-3e74-4d54-97b5-e9fc09a0e8f0"
                }}
                style={styles.ImageBackground_0_905}
              />
            </View>
          </View>
          <View style={styles.View_0_911}>
            <View style={styles.View_0_908}>
              <Text style={styles.Text_0_908}>Share Secure Copy</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a39857fb-c439-4b69-a259-19152268171c"
              }}
              style={styles.ImageBackground_0_909}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c0346e1-0490-403f-a794-32611db72110"
              }}
              style={styles.ImageBackground_0_910}
            />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7613077a-9b6c-4b51-a60a-f3e048f44634"
            }}
            style={styles.ImageBackground_0_912}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_0_914: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_894: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_913: {
    width: wp("95%"),
    height: hp("82%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_896: {
    width: wp("95%"),
    height: hp("82%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_897: {
    width: wp("39%"),
    top: hp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_897: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_898: {
    width: wp("35%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_898: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_907: {
    width: wp("84%"),
    height: hp("21%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_0_899: {
    width: wp("84%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_906: {
    width: wp("57%"),
    height: hp("15%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_0_900: {
    width: wp("57%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_900: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_901: {
    width: wp("48%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_901: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_902: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_902_0_2839: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_902_0_2840: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_902_0_2841: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_902_0_2844: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_902_0_2842: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_902_0_2843: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_905: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  View_0_911: {
    width: wp("49%"),
    height: hp("10%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  View_0_908: {
    width: wp("49%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_908: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_909: {
    width: wp("40%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_910: {
    width: wp("40%"),
    height: hp("0%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_912: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
