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
      <View style={styles.View_0_956}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a193155-5b1d-4128-889b-7e4df2614566"
          }}
          style={styles.ImageBackground_0_929}
        />
        <View style={styles.View_0_930}>
          <Text style={styles.Text_0_930}>Or</Text>
        </View>
        <View style={styles.View_0_939}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c976d15a-65e3-4f06-a356-8a51b72d1453"
            }}
            style={styles.ImageBackground_0_931}
          />
          <View style={styles.View_0_938}>
            <View style={styles.View_0_932}>
              <Text style={styles.Text_0_932}>Adobe Meeting Notes</Text>
            </View>
            <View style={styles.View_0_933}>
              <Text style={styles.Text_0_933}>
                Secure Folder in Private Vault
              </Text>
            </View>
            <View style={styles.View_0_934}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_934_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a729667d-2b48-4eae-a7f7-f762fd4adf53"
                }}
                style={styles.ImageBackground_I0_934_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b36a3378-4a82-412f-98a4-c23d926b04ac"
                }}
                style={styles.ImageBackground_I0_934_0_2841}
              />
              <View style={styles.View_I0_934_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6ee572ad-a369-442b-91c3-250b7cc9d562"
                  }}
                  style={styles.ImageBackground_I0_934_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bcccc81-71ea-459e-95e1-7d273552ffa3"
                  }}
                  style={styles.ImageBackground_I0_934_0_2843}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8a7590d-b104-455c-86d2-3f62a07de404"
              }}
              style={styles.ImageBackground_0_937}
            />
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_0_943}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_0_940}>
            <Text style={styles.Text_0_940}>Share with</Text>
          </View>
          <View style={styles.View_0_941}>
            <Text style={styles.Text_0_941}>Email, name or public key</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/324c34bb-cea6-4d7d-bbd8-6fe01d9ac356"
            }}
            style={styles.ImageBackground_0_942}
          />
        </TouchableOpacity>
        <View style={styles.View_0_946}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c2ca2b82-b4fd-452a-974c-3ed7a9d15a40"
            }}
            style={styles.ImageBackground_I0_946_0_2768}
          />
          <View style={styles.View_I0_946_0_2769}>
            <Text style={styles.Text_I0_946_0_2769}>Share secure link</Text>
          </View>
          <View style={styles.View_I0_946_0_2772}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b581a23-467f-4ab6-9569-2fdee71d1b6d"
              }}
              style={styles.ImageBackground_I0_946_0_2770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d60cf435-b5aa-4a22-b3ca-a34212c8a058"
              }}
              style={styles.ImageBackground_I0_946_0_2771}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/747502a5-5507-4387-9fc0-df47a71bc8e0"
          }}
          style={styles.ImageBackground_0_953}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("100%") },
  View_0_956: {
    width: wp("95%"),
    height: hp("88%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_929: {
    width: wp("95%"),
    height: hp("88%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_930: {
    width: wp("4%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_930: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_939: {
    width: wp("84%"),
    height: hp("32%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_0_931: {
    width: wp("84%"),
    height: hp("32%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_938: {
    width: wp("57%"),
    height: hp("23%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_0_932: {
    width: wp("57%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_932: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_933: {
    width: wp("48%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_933: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_934: {
    width: wp("13%"),
    height: hp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_934_0_2839: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_934_0_2840: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_934_0_2841: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_934_0_2844: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_934_0_2842: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_934_0_2843: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_937: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%")
  },
  TouchableOpacity_0_943: {
    width: wp("84%"),
    height: hp("15%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_940: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_940: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_941: {
    width: wp("64%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_941: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_942: {
    width: wp("84%"),
    height: hp("0%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_946: {
    width: wp("53%"),
    height: hp("10%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_946_0_2768: {
    flexGrow: 1,
    width: wp("53%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_946_0_2769: {
    flexGrow: 1,
    width: wp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I0_946_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_946_0_2772: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_946_0_2770: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_946_0_2771: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_953: {
    width: wp("7%"),
    height: hp("5%"),
    top: hp("50%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
