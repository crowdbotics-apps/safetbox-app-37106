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
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc9dee9d-a746-426a-9759-7cd6d8ef9891"
        }}
        style={styles.ImageBackground_0_1076}
      />
      <View style={styles.View_0_1094}>
        <View source={{ uri: "null" }} style={styles.View_0_1077} />
        <View style={styles.View_0_1078}>
          <Text style={styles.Text_0_1078}>Private Vault</Text>
        </View>
        <View style={styles.View_0_1079}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c294b0f6-e406-4d9a-a7ad-2d3c2e73804f"
            }}
            style={styles.ImageBackground_I0_1079_0_3138}
          />
          <View style={styles.View_I0_1079_0_2409}>
            <Text style={styles.Text_I0_1079_0_2409}>Search</Text>
          </View>
          <View style={styles.View_I0_1079_0_3139}>
            <View style={styles.View_I0_1079_0_3139_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d239a52-8285-4bd4-9d1f-4f0a9b5b65a5"
                }}
                style={styles.ImageBackground_I0_1079_0_3139_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/151e931c-1830-495a-ab8c-c6e05456b73b"
                }}
                style={styles.ImageBackground_I0_1079_0_3139_0_2776}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1082}>
          <View source={{ uri: "null" }} style={styles.View_0_1080} />
          <View style={styles.View_0_1081}>
            <Text style={styles.Text_0_1081}>Edit</Text>
          </View>
        </View>
        <View style={styles.View_0_1089}>
          <View source={{ uri: "null" }} style={styles.View_0_1083} />
          <View style={styles.View_0_1088}>
            <View source={{ uri: "null" }} style={styles.View_0_1084} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48608bea-b994-457f-9623-2fee9ceebcf0"
              }}
              style={styles.ImageBackground_0_1087}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9cab14c-d76c-4250-9b42-0e9b3b4ec54a"
          }}
          style={styles.ImageBackground_0_1093}
        />
      </View>
      <View style={styles.View_0_1095}>
        <View style={styles.View_I0_1095_0_985}>
          <View style={styles.View_I0_1095_0_3140}>
            <Text style={styles.Text_I0_1095_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1095_0_3141}>
            <Text style={styles.Text_I0_1095_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1095_0_984}>
          <Text style={styles.Text_I0_1095_0_984}>Yesterday</Text>
        </View>
        <View style={styles.View_I0_1095_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1095_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56edff64-cb17-4541-8034-a44965b79c43"
            }}
            style={styles.ImageBackground_I0_1095_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/724ff4a9-c681-4961-b106-dcdcf4709c3f"
            }}
            style={styles.ImageBackground_I0_1095_0_794_0_796}
          />
          <View style={styles.View_I0_1095_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ab567ea-f49c-4a62-b1fc-17f4c06036d1"
              }}
              style={styles.ImageBackground_I0_1095_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/265eba2a-5664-451a-bc62-914a8618bfe9"
              }}
              style={styles.ImageBackground_I0_1095_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1098}>
        <View style={styles.View_0_1096}>
          <Text style={styles.Text_0_1096}>Photography</Text>
        </View>
        <View style={styles.View_0_1097}>
          <Text style={styles.Text_0_1097}>Photography</Text>
        </View>
      </View>
      <View style={styles.View_0_1099}>
        <Text style={styles.Text_0_1099}>Yesterday</Text>
      </View>
      <View style={styles.View_0_1100}>
        <View source={{ uri: "null" }} style={styles.View_I0_1100_0_2888} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/869189b1-e737-4c73-9b1c-f9417470d1a6"
          }}
          style={styles.ImageBackground_I0_1100_0_795}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3dfe437-bf7f-4609-b9fa-66aa4a8faa10"
          }}
          style={styles.ImageBackground_I0_1100_0_796}
        />
        <View style={styles.View_I0_1100_0_2891}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdac7e9a-55af-4b5e-b442-6bb19200bbb3"
            }}
            style={styles.ImageBackground_I0_1100_0_2889}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd57c1ab-9954-47ed-8001-707bb2983668"
            }}
            style={styles.ImageBackground_I0_1100_0_2890}
          />
        </View>
      </View>
      <View style={styles.View_0_1101}>
        <View style={styles.View_I0_1101_0_985}>
          <View style={styles.View_I0_1101_0_3140}>
            <Text style={styles.Text_I0_1101_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1101_0_3141}>
            <Text style={styles.Text_I0_1101_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1101_0_984}>
          <Text style={styles.Text_I0_1101_0_984}>Yesterday</Text>
        </View>
        <View style={styles.View_I0_1101_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1101_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f9e9502-bf15-4d80-bfbf-fea17f2619c3"
            }}
            style={styles.ImageBackground_I0_1101_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f37894f0-4fba-4b78-9fa6-5a840b16de2f"
            }}
            style={styles.ImageBackground_I0_1101_0_794_0_796}
          />
          <View style={styles.View_I0_1101_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/932a61d9-2e79-4d95-9cd2-f8117c094552"
              }}
              style={styles.ImageBackground_I0_1101_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4124ae8d-3139-482d-b6fa-1c003aace013"
              }}
              style={styles.ImageBackground_I0_1101_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1102}>
        <View style={styles.View_I0_1102_0_985}>
          <View style={styles.View_I0_1102_0_3140}>
            <Text style={styles.Text_I0_1102_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1102_0_3141}>
            <Text style={styles.Text_I0_1102_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1102_0_984}>
          <Text style={styles.Text_I0_1102_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_1102_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1102_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ba4a5cc-28e7-4dff-9a70-da5c17e1fcb8"
            }}
            style={styles.ImageBackground_I0_1102_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/000f2307-61e6-4ee0-a02b-f0d1190e4caa"
            }}
            style={styles.ImageBackground_I0_1102_0_794_0_796}
          />
          <View style={styles.View_I0_1102_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09f51d3a-65c9-4e4a-923f-a83c803250c4"
              }}
              style={styles.ImageBackground_I0_1102_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14ecd30e-f66f-47b2-8d60-3209ab7bf66a"
              }}
              style={styles.ImageBackground_I0_1102_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1103}>
        <View style={styles.View_I0_1103_0_985}>
          <View style={styles.View_I0_1103_0_3140}>
            <Text style={styles.Text_I0_1103_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1103_0_3141}>
            <Text style={styles.Text_I0_1103_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1103_0_984}>
          <Text style={styles.Text_I0_1103_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_1103_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1103_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c8909bd-80e9-4a8b-bb38-b9058c5c66c6"
            }}
            style={styles.ImageBackground_I0_1103_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e419dfd-6a13-4310-bd0b-af4dc4cc5e66"
            }}
            style={styles.ImageBackground_I0_1103_0_794_0_796}
          />
          <View style={styles.View_I0_1103_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41e92729-52b6-4d7f-9ebd-abe39b73f7ab"
              }}
              style={styles.ImageBackground_I0_1103_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/370b4810-4ff2-4940-a237-7d019c97d070"
              }}
              style={styles.ImageBackground_I0_1103_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1104}>
        <View style={styles.View_I0_1104_0_985}>
          <View style={styles.View_I0_1104_0_3140}>
            <Text style={styles.Text_I0_1104_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1104_0_3141}>
            <Text style={styles.Text_I0_1104_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1104_0_984}>
          <Text style={styles.Text_I0_1104_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_1104_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1104_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1523f691-cfa2-43c0-ba1f-8042d2a015c0"
            }}
            style={styles.ImageBackground_I0_1104_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2900f0ef-ee47-45fc-8a95-c97751f720cf"
            }}
            style={styles.ImageBackground_I0_1104_0_794_0_796}
          />
          <View style={styles.View_I0_1104_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfe6e3c3-a988-47fa-8f61-2d6f2b82bf78"
              }}
              style={styles.ImageBackground_I0_1104_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a5cd112-9797-4359-a9e0-52a566b996dd"
              }}
              style={styles.ImageBackground_I0_1104_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1105}>
        <View style={styles.View_I0_1105_0_985}>
          <View style={styles.View_I0_1105_0_3140}>
            <Text style={styles.Text_I0_1105_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1105_0_3141}>
            <Text style={styles.Text_I0_1105_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1105_0_984}>
          <Text style={styles.Text_I0_1105_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_1105_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1105_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f55bce4-9b66-4139-8456-2324d698aa46"
            }}
            style={styles.ImageBackground_I0_1105_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a0765f5-ea9e-4b36-a3f7-02f17b4ab57d"
            }}
            style={styles.ImageBackground_I0_1105_0_794_0_796}
          />
          <View style={styles.View_I0_1105_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc7821f3-fffc-45be-a068-6cfad712e9f7"
              }}
              style={styles.ImageBackground_I0_1105_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70c2f8aa-6f4b-4ae3-9a53-12e55cee9586"
              }}
              style={styles.ImageBackground_I0_1105_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1106}>
        <View style={styles.View_I0_1106_0_985}>
          <View style={styles.View_I0_1106_0_3140}>
            <Text style={styles.Text_I0_1106_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1106_0_3141}>
            <Text style={styles.Text_I0_1106_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1106_0_984}>
          <Text style={styles.Text_I0_1106_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_1106_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1106_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e9fc43c-fe1b-4abe-8f6e-ac273bf11188"
            }}
            style={styles.ImageBackground_I0_1106_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e8dd8ea-b80a-4d5e-8089-ec88c7f9f980"
            }}
            style={styles.ImageBackground_I0_1106_0_794_0_796}
          />
          <View style={styles.View_I0_1106_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e83a8381-bc73-4191-b0f1-1d6f66d23d42"
              }}
              style={styles.ImageBackground_I0_1106_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f45f5fd-c2d0-4a95-bf29-7848bfb4eff9"
              }}
              style={styles.ImageBackground_I0_1106_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1107}>
        <View style={styles.View_I0_1107_0_985}>
          <View style={styles.View_I0_1107_0_3140}>
            <Text style={styles.Text_I0_1107_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_1107_0_3141}>
            <Text style={styles.Text_I0_1107_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_1107_0_984}>
          <Text style={styles.Text_I0_1107_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_1107_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_1107_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d28ff6c3-a159-4158-8d3c-a07b211e2dd5"
            }}
            style={styles.ImageBackground_I0_1107_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0c348ca-0342-469f-aed8-c2a849d967aa"
            }}
            style={styles.ImageBackground_I0_1107_0_794_0_796}
          />
          <View style={styles.View_I0_1107_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e0a6176-7873-4b55-82c9-c096a174c433"
              }}
              style={styles.ImageBackground_I0_1107_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f43e34b-bbde-4323-89cf-52a377c7d975"
              }}
              style={styles.ImageBackground_I0_1107_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1108}>
        <View source={{ uri: "null" }} style={styles.View_I0_1108_0_3062} />
        <View style={styles.View_I0_1108_0_3082}>
          <View style={styles.View_I0_1108_0_3076}>
            <View style={styles.View_I0_1108_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_1108_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70afacb9-b25d-41d6-9078-d593e6bc62ed"
                }}
                style={styles.ImageBackground_I0_1108_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44a1921c-2625-4bd9-a249-efd0ad0e7bc7"
                }}
                style={styles.ImageBackground_I0_1108_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f8afa2f-48a9-4dc7-91a0-0f4d23f768b3"
              }}
              style={styles.ImageBackground_I0_1108_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a4d23b19-f0fd-4aca-a51a-97822920b7dc"
              }}
              style={styles.ImageBackground_I0_1108_0_3075}
            />
          </View>
          <View style={styles.View_I0_1108_0_3077}>
            <Text style={styles.Text_I0_1108_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f18163b-5294-45f2-94d6-83d24d58863e"
            }}
            style={styles.ImageBackground_I0_1108_0_3081}
          />
        </View>
        <View style={styles.View_I0_1108_0_3083}>
          <Text style={styles.Text_I0_1108_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_1108_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab5e07ff-eeea-481f-b0fd-dab2e7af9e79"
            }}
            style={styles.ImageBackground_I0_1108_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b6c2efb-6c5a-474c-a491-aec630800de1"
            }}
            style={styles.ImageBackground_I0_1108_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_0_1111}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f13cf33-ce95-416c-ae0e-5bb391c9a9c4"
          }}
          style={styles.ImageBackground_0_1109}
        />
        <View style={styles.View_0_1110}>
          <Text style={styles.Text_0_1110}>Most Recent</Text>
        </View>
      </View>
      <View style={styles.View_0_1114}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06068c77-5f92-4d9d-af8d-c992b1a70f9d"
          }}
          style={styles.ImageBackground_0_1112}
        />
        <View style={styles.View_0_1113}>
          <Text style={styles.Text_0_1113}>Last Month</Text>
        </View>
      </View>
      <View style={styles.View_0_1121}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33e97f93-eb79-40bc-a114-f8a4beb2dcb3"
          }}
          style={styles.ImageBackground_0_1117}
        />
        <View style={styles.View_0_1118}>
          <View source={{ uri: "null" }} style={styles.View_I0_1118_0_2845} />
          <View style={styles.View_I0_1118_0_2846}>
            <Text style={styles.Text_I0_1118_0_2846}>Log</Text>
          </View>
          <View style={styles.View_I0_1118_0_2849}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f78b8767-c0e1-491e-8491-6a3fd74e6430"
              }}
              style={styles.ImageBackground_I0_1118_0_2847}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab634623-c0df-43aa-94a2-bca9c8a9e499"
              }}
              style={styles.ImageBackground_I0_1118_0_2848}
            />
          </View>
        </View>
        <View style={styles.View_0_1119}>
          <View source={{ uri: "null" }} style={styles.View_I0_1119_0_2857} />
          <View style={styles.View_I0_1119_0_2858}>
            <Text style={styles.Text_I0_1119_0_2858}>Shared</Text>
          </View>
          <View style={styles.View_I0_1119_0_2866}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/648be621-4dcc-4953-a227-c92473bb889e"
              }}
              style={styles.ImageBackground_I0_1119_0_2859}
            />
            <View style={styles.View_I0_1119_0_2862}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d81df59b-abd2-4d7c-ac3c-cd5e78ac2903"
                }}
                style={styles.ImageBackground_I0_1119_0_2860}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c743b465-395f-4c7f-a395-beac03644f4f"
                }}
                style={styles.ImageBackground_I0_1119_0_2861}
              />
            </View>
            <View style={styles.View_I0_1119_0_2865}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8da812b-6f57-44cc-8d26-151c0d0f5c51"
                }}
                style={styles.ImageBackground_I0_1119_0_2863}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1efbe334-b043-4c86-8500-5a2e1487c8eb"
                }}
                style={styles.ImageBackground_I0_1119_0_2864}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1120}>
          <View source={{ uri: "null" }} style={styles.View_I0_1120_0_2872} />
          <View style={styles.View_I0_1120_0_2873}>
            <Text style={styles.Text_I0_1120_0_2873}>Private</Text>
          </View>
          <View style={styles.View_I0_1120_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd12d546-7b60-4995-98fb-818679faeef7"
              }}
              style={styles.ImageBackground_I0_1120_0_2874}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b422cf27-a064-446c-bc5e-5991d139c334"
              }}
              style={styles.ImageBackground_I0_1120_0_2875}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1162}>
        <View style={styles.View_0_1160}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbeb4555-0689-44ea-bfa7-e3ef863b0ce0"
            }}
            style={styles.ImageBackground_0_1122}
          />
          <View style={styles.View_0_1123}>
            <Text style={styles.Text_0_1123}>Share with</Text>
          </View>
          <View style={styles.View_0_1124}>
            <Text style={styles.Text_0_1124}>End-to-End Encryption</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1223a817-b1bd-4e1a-ac73-3c0df683dd93"
            }}
            style={styles.ImageBackground_0_1131}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efbe0ed4-a5b9-4b9b-bed2-4a4206b333c5"
            }}
            style={styles.ImageBackground_0_1132}
          />
          <View style={styles.View_0_1134}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/926e5452-3889-4457-901d-fd2b031c4800"
              }}
              style={styles.ImageBackground_I0_1134_0_2763}
            />
            <View style={styles.View_I0_1134_0_2767}>
              <View style={styles.View_I0_1134_0_1133}>
                <Text style={styles.Text_I0_1134_0_1133}>
                  Share Secure Copy
                </Text>
              </View>
              <View style={styles.View_I0_1134_0_2766}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/591d397f-498a-41e0-80ad-0be793712923"
                  }}
                  style={styles.ImageBackground_I0_1134_0_2764}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4086234-6f46-4772-bb53-7705d41ed199"
                  }}
                  style={styles.ImageBackground_I0_1134_0_2765}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_0_1137}>
            <View source={{ uri: "null" }} style={styles.View_I0_1137_0_2754} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a310a5b-646b-4188-b689-7c7f6201a0e1"
              }}
              style={styles.ImageBackground_I0_1137_0_2755}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d878988-efb2-452b-887a-52d8be1dcd51"
              }}
              style={styles.ImageBackground_I0_1137_0_2757}
            />
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_1147}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_945"))
            }
          >
            <View style={styles.View_0_1139}>
              <View style={styles.View_0_1138}>
                <Text style={styles.Text_0_1138}>Lauren Rochford</Text>
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e978e27b-f820-4cd3-bd29-0b1dfb105b56"
              }}
              style={styles.ImageBackground_0_1140}
            />
            <View style={styles.View_0_1146}>
              <View style={styles.View_0_1145}>
                <View style={styles.View_0_1144}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb768e73-81a8-4d52-87e1-b6196373bb6b"
                    }}
                    style={styles.ImageBackground_0_1143}
                  />
                </View>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_1158}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("10014_2138"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a53f2fe4-a8b7-47d0-bd2a-9a69efb9fe8a"
              }}
              style={styles.ImageBackground_0_1149}
            />
            <View style={styles.View_0_1152}>
              <View style={styles.View_0_1150}>
                <Text style={styles.Text_0_1150}>Adobe Meeting Notes</Text>
              </View>
              <View style={styles.View_0_1151}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_1151_0_2839}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99942a01-cd91-4f6d-96e3-85bfc4ffb02c"
                  }}
                  style={styles.ImageBackground_I0_1151_0_2840}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ffd6756-ec6a-4819-977e-b82c0843e9d9"
                  }}
                  style={styles.ImageBackground_I0_1151_0_2841}
                />
                <View style={styles.View_I0_1151_0_2844}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14c61b5e-4e40-4318-9258-45ee2dd029a6"
                    }}
                    style={styles.ImageBackground_I0_1151_0_2842}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d2059a5-8828-47d4-8c41-558fb11c323e"
                    }}
                    style={styles.ImageBackground_I0_1151_0_2843}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1157}>
              <View source={{ uri: "null" }} style={styles.View_0_1153} />
              <View style={styles.View_0_1156}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8fd6382a-7933-4743-98ae-aeb3889e1009"
                  }}
                  style={styles.ImageBackground_0_1155}
                />
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f23184ac-b208-4876-95ec-1580d63c4e21"
          }}
          style={styles.ImageBackground_0_1161}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_0_1076: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1094: {
    width: wp("100%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1077: {
    width: wp("100%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1078: {
    width: wp("49%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_1078: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1079: {
    width: wp("83%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1079_0_3138: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1079_0_2409: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_1079_0_2409: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1079_0_3139: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1079_0_3139_0_2777: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1079_0_3139_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1079_0_3139_0_2776: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  },
  View_0_1082: {
    width: wp("45%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_0_1080: {
    width: wp("45%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1081: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_1081: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1089: {
    width: wp("48%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1083: {
    width: wp("48%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1088: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1084: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1087: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1093: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_0_1095: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1095_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1095_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1095_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1095_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1095_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1095_0_984: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1095_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1095_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1095_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1095_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1095_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1095_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1095_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1095_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1098: {
    width: wp("25%"),
    height: hp("5%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1096: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1096: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1097: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1097: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1099: {
    width: wp("14%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_0_1099: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1100: {
    width: wp("23%"),
    height: hp("10%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1100_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1100_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1100_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1100_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1100_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1100_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1101: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1101_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1101_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1101_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1101_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1101_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1101_0_984: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1101_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1101_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1101_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1101_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1101_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1101_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1101_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1101_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1102: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1102_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1102_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1102_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1102_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1102_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1102_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1102_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1102_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1102_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1102_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1102_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1102_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1102_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1102_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1103: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1103_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1103_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1103_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1103_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1103_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1103_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1103_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1103_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1103_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1103_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1103_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1103_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1103_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1103_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1104: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1104_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1104_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1104_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1104_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1104_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1104_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1104_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1104_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1104_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1104_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1104_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1104_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1104_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1104_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1105: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1105_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1105_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1105_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1105_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1105_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1105_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1105_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1105_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1105_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1105_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1105_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1105_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1105_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1105_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1106: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1106_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1106_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1106_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1106_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1106_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1106_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1106_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1106_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1106_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1106_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1106_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1106_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1106_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1106_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1107: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1107_0_985: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1107_0_3140: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1107_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1107_0_3141: {
    flexGrow: 1,
    width: wp("25%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1107_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1107_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_1107_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1107_0_794: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1107_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_1107_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1107_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_1107_0_794_0_2891: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1107_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1107_0_794_0_2890: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1108: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1108_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1108_0_3082: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1108_0_3076: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1108_0_3067: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1108_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1108_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1108_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1108_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_1108_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_1108_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_1108_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_1108_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_1108_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_1108_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1108_0_3093: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1108_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_1108_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_1111: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%")
  },
  ImageBackground_0_1109: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1110: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_1110: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1114: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%")
  },
  ImageBackground_0_1112: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1113: {
    width: wp("18%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    justifyContent: "flex-start"
  },
  Text_0_1113: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1121: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1117: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1118: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1118_0_2845: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1118_0_2846: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1118_0_2846: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1118_0_2849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1118_0_2847: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1118_0_2848: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_0_1119: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1119_0_2857: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1119_0_2858: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1119_0_2858: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1119_0_2866: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1119_0_2859: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1119_0_2862: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1119_0_2860: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1119_0_2861: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1119_0_2865: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1119_0_2863: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1119_0_2864: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1120: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1120_0_2872: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1120_0_2873: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1120_0_2873: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1120_0_2876: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1120_0_2874: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1120_0_2875: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1162: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1160: {
    width: wp("95%"),
    height: hp("48%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1122: {
    width: wp("95%"),
    height: hp("48%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1123: {
    width: wp("16%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1123: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1124: {
    width: wp("35%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_1124: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1131: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  ImageBackground_0_1132: {
    width: wp("84%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1134: {
    width: wp("84%"),
    height: hp("7%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1134_0_2763: {
    flexGrow: 1,
    width: wp("84%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1134_0_2767: {
    flexGrow: 1,
    width: wp("31%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1134_0_1133: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_1134_0_1133: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1134_0_2766: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1134_0_2764: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1134_0_2765: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_1137: {
    width: wp("14%"),
    height: hp("5%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1137_0_2754: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1137_0_2755: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1137_0_2757: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  TouchableOpacity_0_1147: {
    width: wp("84%"),
    height: hp("8%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1139: {
    width: wp("33%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_0_1138: {
    width: wp("33%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1138: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1140: {
    width: wp("84%"),
    height: hp("0%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1146: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1145: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1144: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1143: {
    width: wp("10%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_0_1158: {
    width: wp("95%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1149: {
    width: wp("95%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1152: {
    width: wp("59%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_0_1150: {
    width: wp("44%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_0_1150: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1151: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1151_0_2839: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_1151_0_2840: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1151_0_2841: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_1151_0_2844: {
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
  ImageBackground_I0_1151_0_2842: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1151_0_2843: {
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
  View_0_1157: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1153: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1156: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_1155: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1161: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
