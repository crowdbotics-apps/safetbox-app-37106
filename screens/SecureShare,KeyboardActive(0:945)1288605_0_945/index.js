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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4671ad6d-74f4-49ae-a373-fb915229aa03"
        }}
        style={styles.ImageBackground_0_958}
      />
      <View style={styles.View_0_976}>
        <View source={{ uri: "null" }} style={styles.View_0_959} />
        <View style={styles.View_0_960}>
          <Text style={styles.Text_0_960}>Private Vault</Text>
        </View>
        <View style={styles.View_0_961}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dde42c3b-0dc3-43a6-8f90-bef9ac549cd6"
            }}
            style={styles.ImageBackground_I0_961_0_3138}
          />
          <View style={styles.View_I0_961_0_2409}>
            <Text style={styles.Text_I0_961_0_2409}>Search</Text>
          </View>
          <View style={styles.View_I0_961_0_3139}>
            <View style={styles.View_I0_961_0_3139_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5a1c853-5f80-4e71-8f8e-b565db50fafe"
                }}
                style={styles.ImageBackground_I0_961_0_3139_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a26d8bff-64df-4963-b715-2f9687409eb9"
                }}
                style={styles.ImageBackground_I0_961_0_3139_0_2776}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_964}>
          <View source={{ uri: "null" }} style={styles.View_0_962} />
          <View style={styles.View_0_963}>
            <Text style={styles.Text_0_963}>Edit</Text>
          </View>
        </View>
        <View style={styles.View_0_971}>
          <View source={{ uri: "null" }} style={styles.View_0_965} />
          <View style={styles.View_0_970}>
            <View source={{ uri: "null" }} style={styles.View_0_966} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f49ce629-1dac-4393-abf9-7cc92d18750f"
              }}
              style={styles.ImageBackground_0_969}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8f54e28-ca93-4576-b36b-8eb884c1250b"
          }}
          style={styles.ImageBackground_0_975}
        />
      </View>
      <View style={styles.View_0_977}>
        <View style={styles.View_I0_977_0_985}>
          <View style={styles.View_I0_977_0_3140}>
            <Text style={styles.Text_I0_977_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_977_0_3141}>
            <Text style={styles.Text_I0_977_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_977_0_984}>
          <Text style={styles.Text_I0_977_0_984}>Yesterday</Text>
        </View>
        <View style={styles.View_I0_977_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_977_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec8035db-28b3-4ed0-9366-4569c1e92b94"
            }}
            style={styles.ImageBackground_I0_977_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6418f77a-fc65-4d61-8c47-b5f0eb6f5a84"
            }}
            style={styles.ImageBackground_I0_977_0_794_0_796}
          />
          <View style={styles.View_I0_977_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8357e494-0e78-489f-8037-ecaec1b8ff4d"
              }}
              style={styles.ImageBackground_I0_977_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74da9017-ca62-4c6a-9eca-b4be6b1d0b38"
              }}
              style={styles.ImageBackground_I0_977_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_980}>
        <View style={styles.View_0_978}>
          <Text style={styles.Text_0_978}>Photography</Text>
        </View>
        <View style={styles.View_0_979}>
          <Text style={styles.Text_0_979}>Photography</Text>
        </View>
      </View>
      <View style={styles.View_0_981}>
        <Text style={styles.Text_0_981}>Yesterday</Text>
      </View>
      <View style={styles.View_0_982}>
        <View source={{ uri: "null" }} style={styles.View_I0_982_0_2888} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2013559-f394-4b04-8b58-a62118d8fb20"
          }}
          style={styles.ImageBackground_I0_982_0_795}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e69e0638-ea07-421f-a7d7-98d5ebbafe8b"
          }}
          style={styles.ImageBackground_I0_982_0_796}
        />
        <View style={styles.View_I0_982_0_2891}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ff4c54de-6358-4c2b-9b44-1d751a6e4b09"
            }}
            style={styles.ImageBackground_I0_982_0_2889}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5855124-739a-44ab-8afd-3c2d90445352"
            }}
            style={styles.ImageBackground_I0_982_0_2890}
          />
        </View>
      </View>
      <View style={styles.View_0_983}>
        <View style={styles.View_I0_983_0_985}>
          <View style={styles.View_I0_983_0_3140}>
            <Text style={styles.Text_I0_983_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_983_0_3141}>
            <Text style={styles.Text_I0_983_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_983_0_984}>
          <Text style={styles.Text_I0_983_0_984}>Yesterday</Text>
        </View>
        <View style={styles.View_I0_983_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_983_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d599100b-9a3d-4dbd-ab9c-f5046b76bce9"
            }}
            style={styles.ImageBackground_I0_983_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dff1e05e-3dc4-49eb-b4e2-981fd42e42ef"
            }}
            style={styles.ImageBackground_I0_983_0_794_0_796}
          />
          <View style={styles.View_I0_983_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51e84e3f-83a3-4e3e-a13b-b148bdd73f42"
              }}
              style={styles.ImageBackground_I0_983_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c01e13e-f0d5-49ff-860a-0c0fa52fbb84"
              }}
              style={styles.ImageBackground_I0_983_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_986}>
        <View style={styles.View_I0_986_0_985}>
          <View style={styles.View_I0_986_0_3140}>
            <Text style={styles.Text_I0_986_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_986_0_3141}>
            <Text style={styles.Text_I0_986_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_986_0_984}>
          <Text style={styles.Text_I0_986_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_986_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_986_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2923bb9d-36e2-4e37-9bb7-4fa13818b388"
            }}
            style={styles.ImageBackground_I0_986_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/75f68b74-6ef3-402c-924c-bed3c48ca935"
            }}
            style={styles.ImageBackground_I0_986_0_794_0_796}
          />
          <View style={styles.View_I0_986_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/459448aa-0a38-46f9-88b8-e0f3e0630125"
              }}
              style={styles.ImageBackground_I0_986_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad8ec0b0-eeca-4a40-a23c-5072f2303c60"
              }}
              style={styles.ImageBackground_I0_986_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_987}>
        <View style={styles.View_I0_987_0_985}>
          <View style={styles.View_I0_987_0_3140}>
            <Text style={styles.Text_I0_987_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_987_0_3141}>
            <Text style={styles.Text_I0_987_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_987_0_984}>
          <Text style={styles.Text_I0_987_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_987_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_987_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80fb41b5-3512-4519-8c94-f5f58d2bb95d"
            }}
            style={styles.ImageBackground_I0_987_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/245ab578-59e8-4715-937a-800486fe2ac5"
            }}
            style={styles.ImageBackground_I0_987_0_794_0_796}
          />
          <View style={styles.View_I0_987_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3cfc6a3-8013-4c46-9027-e5528b3b6cbd"
              }}
              style={styles.ImageBackground_I0_987_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c94cca1-1c36-4fbe-a4fa-cc9d793f8e95"
              }}
              style={styles.ImageBackground_I0_987_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_988}>
        <View style={styles.View_I0_988_0_985}>
          <View style={styles.View_I0_988_0_3140}>
            <Text style={styles.Text_I0_988_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_988_0_3141}>
            <Text style={styles.Text_I0_988_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_988_0_984}>
          <Text style={styles.Text_I0_988_0_984}>Monday</Text>
        </View>
        <View style={styles.View_I0_988_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_988_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/825f08ba-214e-49ff-b10a-6f6be853eaad"
            }}
            style={styles.ImageBackground_I0_988_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/626b6a3b-d69d-4002-a647-dfbb4edc603c"
            }}
            style={styles.ImageBackground_I0_988_0_794_0_796}
          />
          <View style={styles.View_I0_988_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf521682-02ca-4fbc-ae39-5186a33193a9"
              }}
              style={styles.ImageBackground_I0_988_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f7a37b1-ab14-4908-9971-403007988659"
              }}
              style={styles.ImageBackground_I0_988_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_989}>
        <View style={styles.View_I0_989_0_985}>
          <View style={styles.View_I0_989_0_3140}>
            <Text style={styles.Text_I0_989_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_989_0_3141}>
            <Text style={styles.Text_I0_989_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_989_0_984}>
          <Text style={styles.Text_I0_989_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_989_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_989_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2e2f9f5-ef26-4599-bc77-95e5ec0e5df4"
            }}
            style={styles.ImageBackground_I0_989_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b134a9b-3ec2-4c15-99a3-65464118bd67"
            }}
            style={styles.ImageBackground_I0_989_0_794_0_796}
          />
          <View style={styles.View_I0_989_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd9276dd-38d2-4663-b531-ac78ca5438ce"
              }}
              style={styles.ImageBackground_I0_989_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b27e5f90-9403-4bc5-86e1-3ecd90cddf29"
              }}
              style={styles.ImageBackground_I0_989_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_990}>
        <View style={styles.View_I0_990_0_985}>
          <View style={styles.View_I0_990_0_3140}>
            <Text style={styles.Text_I0_990_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_990_0_3141}>
            <Text style={styles.Text_I0_990_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_990_0_984}>
          <Text style={styles.Text_I0_990_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_990_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_990_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1263670-d825-447f-841d-3c108da11290"
            }}
            style={styles.ImageBackground_I0_990_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/69215b91-3ba3-485c-80b5-c1a970efb1dc"
            }}
            style={styles.ImageBackground_I0_990_0_794_0_796}
          />
          <View style={styles.View_I0_990_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfa4d895-42bf-49b0-8e4f-1ffe4cf673ea"
              }}
              style={styles.ImageBackground_I0_990_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4d878b6-6f86-4fce-b5e8-821fc75a297b"
              }}
              style={styles.ImageBackground_I0_990_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_991}>
        <View style={styles.View_I0_991_0_985}>
          <View style={styles.View_I0_991_0_3140}>
            <Text style={styles.Text_I0_991_0_3140}>
              2018 Financial Prerequisites
            </Text>
          </View>
          <View style={styles.View_I0_991_0_3141}>
            <Text style={styles.Text_I0_991_0_3141}>
              2018 Financial Prerequisites
            </Text>
          </View>
        </View>
        <View style={styles.View_I0_991_0_984}>
          <Text style={styles.Text_I0_991_0_984}>Sunday</Text>
        </View>
        <View style={styles.View_I0_991_0_794}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I0_991_0_794_0_2888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9494e926-cdc3-48ef-8461-a5486dd13fe3"
            }}
            style={styles.ImageBackground_I0_991_0_794_0_795}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66397d60-35a9-491d-8862-0f0d18ac9124"
            }}
            style={styles.ImageBackground_I0_991_0_794_0_796}
          />
          <View style={styles.View_I0_991_0_794_0_2891}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22e920c7-bc97-43e6-9a0a-5d80b681643c"
              }}
              style={styles.ImageBackground_I0_991_0_794_0_2889}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8383b4eb-7412-40a8-8b42-64ed07bafbab"
              }}
              style={styles.ImageBackground_I0_991_0_794_0_2890}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_992}>
        <View source={{ uri: "null" }} style={styles.View_I0_992_0_3062} />
        <View style={styles.View_I0_992_0_3082}>
          <View style={styles.View_I0_992_0_3076}>
            <View style={styles.View_I0_992_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_992_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5957f01-5597-4999-9cb6-4a0d8dd85963"
                }}
                style={styles.ImageBackground_I0_992_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2ca0bc24-f2cf-49de-b5a9-932de2f29840"
                }}
                style={styles.ImageBackground_I0_992_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81719726-8b71-45ea-ad33-0581f81b73c5"
              }}
              style={styles.ImageBackground_I0_992_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51117267-20b2-4bc8-a048-0f1aa4b8064b"
              }}
              style={styles.ImageBackground_I0_992_0_3075}
            />
          </View>
          <View style={styles.View_I0_992_0_3077}>
            <Text style={styles.Text_I0_992_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/854026b6-96eb-4a53-946d-a1b8885f730a"
            }}
            style={styles.ImageBackground_I0_992_0_3081}
          />
        </View>
        <View style={styles.View_I0_992_0_3083}>
          <Text style={styles.Text_I0_992_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_992_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f16c1712-1481-4e3b-ac74-c380e475b0c9"
            }}
            style={styles.ImageBackground_I0_992_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7093bdbd-0fb4-4aab-a9d8-6960cbe562a7"
            }}
            style={styles.ImageBackground_I0_992_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_0_995}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99dfede4-5e84-4800-883d-d75063c0be00"
          }}
          style={styles.ImageBackground_0_993}
        />
        <View style={styles.View_0_994}>
          <Text style={styles.Text_0_994}>Most Recent</Text>
        </View>
      </View>
      <View style={styles.View_0_998}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b5d5080-d057-4747-b188-edda59076134"
          }}
          style={styles.ImageBackground_0_996}
        />
        <View style={styles.View_0_997}>
          <Text style={styles.Text_0_997}>Last Month</Text>
        </View>
      </View>
      <View style={styles.View_0_1005}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/837ac581-2133-414a-8580-40b3724d50ff"
          }}
          style={styles.ImageBackground_0_1001}
        />
        <View style={styles.View_0_1002}>
          <View source={{ uri: "null" }} style={styles.View_I0_1002_0_2845} />
          <View style={styles.View_I0_1002_0_2846}>
            <Text style={styles.Text_I0_1002_0_2846}>Log</Text>
          </View>
          <View style={styles.View_I0_1002_0_2849}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d176dfbe-5398-4560-a9ef-64d1e6ef8ad6"
              }}
              style={styles.ImageBackground_I0_1002_0_2847}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51b204cc-0a8e-4f35-a5b9-152bc0a4950e"
              }}
              style={styles.ImageBackground_I0_1002_0_2848}
            />
          </View>
        </View>
        <View style={styles.View_0_1003}>
          <View source={{ uri: "null" }} style={styles.View_I0_1003_0_2857} />
          <View style={styles.View_I0_1003_0_2858}>
            <Text style={styles.Text_I0_1003_0_2858}>Shared</Text>
          </View>
          <View style={styles.View_I0_1003_0_2866}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81f54d99-4f29-4dc6-bf87-e4d259d609c1"
              }}
              style={styles.ImageBackground_I0_1003_0_2859}
            />
            <View style={styles.View_I0_1003_0_2862}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8cdbdcd-38f2-44b0-bfd1-5ec9c79c1eb2"
                }}
                style={styles.ImageBackground_I0_1003_0_2860}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2906353a-c51c-4ef2-bbc9-e38ac0888be8"
                }}
                style={styles.ImageBackground_I0_1003_0_2861}
              />
            </View>
            <View style={styles.View_I0_1003_0_2865}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b87e403-be45-46ba-8aed-2da7c9fbc76d"
                }}
                style={styles.ImageBackground_I0_1003_0_2863}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57ee14b2-5713-4020-bd42-10dd2b4bd6fa"
                }}
                style={styles.ImageBackground_I0_1003_0_2864}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_1004}>
          <View source={{ uri: "null" }} style={styles.View_I0_1004_0_2872} />
          <View style={styles.View_I0_1004_0_2873}>
            <Text style={styles.Text_I0_1004_0_2873}>Private</Text>
          </View>
          <View style={styles.View_I0_1004_0_2876}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47aa92ba-7f97-411b-95cd-b9a44d1251e1"
              }}
              style={styles.ImageBackground_I0_1004_0_2874}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/46876e5a-8d42-4825-8ec7-c65e952c2f65"
              }}
              style={styles.ImageBackground_I0_1004_0_2875}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_1068}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f2ce4b2-8706-47fd-a438-2d9d85ad5f42"
          }}
          style={styles.ImageBackground_0_1006}
        />
        <View style={styles.View_0_1067}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/237df3e5-27bd-4268-a3dc-f88defb5fd45"
            }}
            style={styles.ImageBackground_0_1007}
          />
          <View style={styles.View_0_1008}>
            <Text style={styles.Text_0_1008}>Share with</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_1018}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_1020"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8c874a4-375b-423a-9d12-9834fe0cf1c4"
              }}
              style={styles.ImageBackground_0_1009}
            />
            <View style={styles.View_0_1012}>
              <View style={styles.View_0_1010}>
                <Text style={styles.Text_0_1010}>Adobe Meeting Notes</Text>
              </View>
              <View style={styles.View_0_1011}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_1011_0_2839}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6d8f8a5-2879-4f15-9b01-c14bd99b6d9c"
                  }}
                  style={styles.ImageBackground_I0_1011_0_2840}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b742c4bd-3dcd-43b4-b437-a4b9011437da"
                  }}
                  style={styles.ImageBackground_I0_1011_0_2841}
                />
                <View style={styles.View_I0_1011_0_2844}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8622bc1d-1638-4281-96d0-9ab8dabeefeb"
                    }}
                    style={styles.ImageBackground_I0_1011_0_2842}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7134a81b-e875-448c-b986-e56daabbcb53"
                    }}
                    style={styles.ImageBackground_I0_1011_0_2843}
                  />
                </View>
              </View>
            </View>
            <View style={styles.View_0_1017}>
              <View source={{ uri: "null" }} style={styles.View_0_1013} />
              <View style={styles.View_0_1016}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72ed413e-dd0e-46fb-a044-833a681895b0"
                  }}
                  style={styles.ImageBackground_0_1015}
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/123517fa-c404-4d30-abd0-edded45e6cb0"
            }}
            style={styles.TouchableOpacity_0_1021}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_1020"))
            }
          />
          <View style={styles.View_0_1023}>
            <Text style={styles.Text_0_1023}>Laur</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36e8c85f-a7d0-4397-a674-d0d97262b03e"
            }}
            style={styles.ImageBackground_0_1025}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8c8962d-b2c7-4075-a08a-876a649edb60"
            }}
            style={styles.ImageBackground_0_1028}
          />
          <View style={styles.View_0_1035}>
            <View style={styles.View_0_1029}>
              <Text style={styles.Text_0_1029}>Lauren Rochford</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d0e74219-712e-4d1c-87fb-e71abd9b36b0"
              }}
              style={styles.ImageBackground_0_1030}
            />
            <View style={styles.View_0_1031}>
              <Text style={styles.Text_0_1031}>
                lauren_s@thirthyfour.agency
              </Text>
            </View>
            <View style={styles.View_0_1034}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9d548c5-7b61-4158-a916-0084382ada78"
                }}
                style={styles.ImageBackground_0_1032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a23c653a-0d52-4552-93fe-23bdaf01ed66"
                }}
                style={styles.ImageBackground_0_1033}
              />
            </View>
          </View>
          <View style={styles.View_0_1042}>
            <View style={styles.View_0_1036}>
              <Text style={styles.Text_0_1036}>Laurent Jeanneau</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b68ae21-4676-4b8e-bdaf-7f646e84ad0b"
              }}
              style={styles.ImageBackground_0_1037}
            />
            <View style={styles.View_0_1038}>
              <Text style={styles.Text_0_1038}>laurentjean@gmail.com </Text>
            </View>
            <View style={styles.View_0_1041}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba9ed8d1-728a-4fb8-a36a-71584fe343a1"
                }}
                style={styles.ImageBackground_0_1039}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1175be6f-d89a-4556-b37f-1f89aeb02af5"
                }}
                style={styles.ImageBackground_0_1040}
              />
            </View>
          </View>
          <View style={styles.View_0_1049}>
            <View style={styles.View_0_1043}>
              <Text style={styles.Text_0_1043}>Laura Sheeren</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/780e1d00-8c45-45d1-906c-4fc25c91add1"
              }}
              style={styles.ImageBackground_0_1044}
            />
            <View style={styles.View_0_1045}>
              <Text style={styles.Text_0_1045}>laurasheeren@company.com</Text>
            </View>
            <View style={styles.View_0_1048}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cb9867d-d3c9-4def-b193-a22e76fdf7a7"
                }}
                style={styles.ImageBackground_0_1046}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f605c216-6f68-41b9-8b0e-979004c4b715"
                }}
                style={styles.ImageBackground_0_1047}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eccadd70-8a7e-445b-8997-9a2267e34ff9"
            }}
            style={styles.ImageBackground_0_1056}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cadacdc1-90a7-446c-b825-aa7ff238c535"
            }}
            style={styles.ImageBackground_0_1060}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/000ddfbf-92b5-444b-9a7a-8bb36187a872"
            }}
            style={styles.ImageBackground_0_1063}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/480cad4d-f226-4e05-b408-b3e194141423"
            }}
            style={styles.ImageBackground_0_1066}
          />
        </View>
      </View>
      <View style={styles.View_0_1072}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc0c17fb-78f3-4992-8c53-f09c5af2d4c9"
          }}
          style={styles.ImageBackground_0_1069}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d028453-9549-4698-a806-63917906d211"
          }}
          style={styles.ImageBackground_0_1071}
        />
      </View>
      <View style={styles.View_0_1074}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/652a783c-5ae5-467a-b15a-00cf00563109"
          }}
          style={styles.ImageBackground_I0_1074_0_2697}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/22456f38-3a19-48ac-b9e9-42db9fc6fb37"
          }}
          style={styles.ImageBackground_I0_1074_0_2699}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("100%") },
  ImageBackground_0_958: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_976: {
    width: wp("100%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_959: {
    width: wp("100%"),
    height: hp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_960: {
    width: wp("49%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_960: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_961: {
    width: wp("83%"),
    height: hp("5%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_961_0_3138: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_961_0_2409: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_961_0_2409: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_961_0_3139: {
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
  View_I0_961_0_3139_0_2777: {
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
  ImageBackground_I0_961_0_3139_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_961_0_3139_0_2776: {
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
  View_0_964: {
    width: wp("45%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_0_962: {
    width: wp("45%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_963: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_971: {
    width: wp("48%"),
    height: hp("7%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_965: {
    width: wp("48%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_970: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_966: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_969: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_975: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_0_977: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_977_0_985: {
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
  View_I0_977_0_3140: {
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
  Text_I0_977_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_977_0_3141: {
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
  Text_I0_977_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_977_0_984: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_977_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_977_0_794: {
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
  View_I0_977_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_977_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_977_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_977_0_794_0_2891: {
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
  ImageBackground_I0_977_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_977_0_794_0_2890: {
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
  View_0_980: {
    width: wp("25%"),
    height: hp("5%"),
    top: hp("70%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_978: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_978: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_979: {
    width: wp("25%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_979: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_981: {
    width: wp("14%"),
    top: hp("72%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    justifyContent: "flex-start"
  },
  Text_0_981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_982: {
    width: wp("23%"),
    height: hp("10%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_982_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_982_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_982_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_982_0_2891: {
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
  ImageBackground_I0_982_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_982_0_2890: {
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
  View_0_983: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_983_0_985: {
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
  View_I0_983_0_3140: {
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
  Text_I0_983_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_983_0_3141: {
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
  Text_I0_983_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_983_0_984: {
    flexGrow: 1,
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_983_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_983_0_794: {
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
  View_I0_983_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_983_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_983_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_983_0_794_0_2891: {
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
  ImageBackground_I0_983_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_983_0_794_0_2890: {
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
  View_0_986: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_986_0_985: {
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
  View_I0_986_0_3140: {
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
  Text_I0_986_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_986_0_3141: {
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
  Text_I0_986_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_986_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_986_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_986_0_794: {
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
  View_I0_986_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_986_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_986_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_986_0_794_0_2891: {
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
  ImageBackground_I0_986_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_986_0_794_0_2890: {
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
  View_0_987: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_987_0_985: {
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
  View_I0_987_0_3140: {
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
  Text_I0_987_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_987_0_3141: {
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
  Text_I0_987_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_987_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_987_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_987_0_794: {
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
  View_I0_987_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_987_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_987_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_987_0_794_0_2891: {
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
  ImageBackground_I0_987_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_987_0_794_0_2890: {
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
  View_0_988: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_988_0_985: {
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
  View_I0_988_0_3140: {
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
  Text_I0_988_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_988_0_3141: {
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
  Text_I0_988_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_988_0_984: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_988_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_988_0_794: {
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
  View_I0_988_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_988_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_988_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_988_0_794_0_2891: {
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
  ImageBackground_I0_988_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_988_0_794_0_2890: {
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
  View_0_989: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("36%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_989_0_985: {
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
  View_I0_989_0_3140: {
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
  Text_I0_989_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_989_0_3141: {
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
  Text_I0_989_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_989_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_989_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_989_0_794: {
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
  View_I0_989_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_989_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_989_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_989_0_794_0_2891: {
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
  ImageBackground_I0_989_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_989_0_794_0_2890: {
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
  View_0_990: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("58%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_990_0_985: {
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
  View_I0_990_0_3140: {
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
  Text_I0_990_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_990_0_3141: {
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
  Text_I0_990_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_990_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_990_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_990_0_794: {
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
  View_I0_990_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_990_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_990_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_990_0_794_0_2891: {
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
  ImageBackground_I0_990_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_990_0_794_0_2890: {
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
  View_0_991: {
    width: wp("25%"),
    height: hp("19%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_991_0_985: {
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
  View_I0_991_0_3140: {
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
  Text_I0_991_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_991_0_3141: {
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
  Text_I0_991_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_991_0_984: {
    flexGrow: 1,
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("17%"),
    justifyContent: "flex-start"
  },
  Text_I0_991_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_991_0_794: {
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
  View_I0_991_0_794_0_2888: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_I0_991_0_794_0_795: {
    flexGrow: 1,
    width: wp("23%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_991_0_794_0_796: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_991_0_794_0_2891: {
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
  ImageBackground_I0_991_0_794_0_2889: {
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_991_0_794_0_2890: {
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
  View_0_992: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_992_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_992_0_3082: {
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
  View_I0_992_0_3076: {
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
  View_I0_992_0_3067: {
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
  View_I0_992_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_992_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_992_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_992_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_992_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_992_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_992_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_992_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_992_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_992_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_992_0_3093: {
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
  ImageBackground_I0_992_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_992_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_995: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-6%")
  },
  ImageBackground_0_993: {
    width: wp("37%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_994: {
    width: wp("19%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_994: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_998: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-14%")
  },
  ImageBackground_0_996: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_997: {
    width: wp("18%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    justifyContent: "flex-start"
  },
  Text_0_997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1005: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("93%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1001: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1002: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1002_0_2845: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1002_0_2846: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1002_0_2846: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1002_0_2849: {
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
  ImageBackground_I0_1002_0_2847: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1002_0_2848: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_0_1003: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1003_0_2857: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1003_0_2858: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1003_0_2858: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1003_0_2866: {
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
  ImageBackground_I0_1003_0_2859: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1003_0_2862: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1003_0_2860: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1003_0_2861: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1003_0_2865: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1003_0_2863: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1003_0_2864: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_1004: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1004_0_2872: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1004_0_2873: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_1004_0_2873: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_1004_0_2876: {
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
  ImageBackground_I0_1004_0_2874: {
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
  ImageBackground_I0_1004_0_2875: {
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
  View_0_1068: {
    width: wp("100%"),
    height: hp("100%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1006: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1067: {
    width: wp("100%"),
    height: hp("97%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1007: {
    width: wp("95%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1008: {
    width: wp("16%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_0_1008: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_1018: {
    width: wp("95%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1009: {
    width: wp("95%"),
    height: hp("12%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1012: {
    width: wp("59%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_0_1010: {
    width: wp("44%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%"),
    justifyContent: "flex-start"
  },
  Text_0_1010: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1011: {
    width: wp("13%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_1011_0_2839: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_1011_0_2840: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1011_0_2841: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_1011_0_2844: {
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
  ImageBackground_I0_1011_0_2842: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1011_0_2843: {
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
  View_0_1017: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_1013: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1016: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_1015: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_0_1021: {
    width: wp("95%"),
    height: hp("34%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1023: {
    width: wp("11%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    justifyContent: "flex-start"
  },
  Text_0_1023: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1025: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("18%")
  },
  ImageBackground_0_1028: {
    width: wp("100%"),
    height: hp("32%"),
    top: hp("65%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1035: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_0_1029: {
    width: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1029: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1030: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1031: {
    width: wp("43%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1031: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1034: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_0_1032: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1033: {
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_0_1042: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_0_1036: {
    width: wp("35%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1036: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1037: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1038: {
    width: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1038: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1041: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_0_1039: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1040: {
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_0_1049: {
    width: wp("85%"),
    height: hp("6%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_0_1043: {
    width: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1043: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1044: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_1045: {
    width: wp("43%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1045: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1048: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("2%")
  },
  ImageBackground_0_1046: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1047: {
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_0_1056: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_0_1060: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_1063: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_1066: {
    width: wp("11%"),
    height: hp("6%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  View_0_1072: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("85%")
  },
  ImageBackground_0_1069: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1071: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_1074: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1074_0_2697: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1074_0_2699: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
