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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92dfe150-ad3a-4053-8e34-3532d893cda8"
        }}
        style={styles.ImageBackground_10014_2139}
      />
      <View style={styles.View_10014_2140}>
        <View source={{ uri: "null" }} style={styles.View_I10014_2140_0_3062} />
        <View style={styles.View_I10014_2140_0_3082}>
          <View style={styles.View_I10014_2140_0_3076}>
            <View style={styles.View_I10014_2140_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10014_2140_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d0d9caf-085c-48c5-9e97-8bb8155194e5"
                }}
                style={styles.ImageBackground_I10014_2140_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43a14bc0-6c84-4536-a46b-ee7212397241"
                }}
                style={styles.ImageBackground_I10014_2140_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bbb6d4f-219e-417e-9d2e-4ec40de68012"
              }}
              style={styles.ImageBackground_I10014_2140_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/830cae7c-20ff-4131-a0c5-9230df741c1f"
              }}
              style={styles.ImageBackground_I10014_2140_0_3075}
            />
          </View>
          <View style={styles.View_I10014_2140_0_3077}>
            <Text style={styles.Text_I10014_2140_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db42a780-6048-48db-8f95-ec6db4913bfc"
            }}
            style={styles.ImageBackground_I10014_2140_0_3081}
          />
        </View>
        <View style={styles.View_I10014_2140_0_3083}>
          <Text style={styles.Text_I10014_2140_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I10014_2140_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e87b57d-1619-4179-a54d-e0671b3705d0"
            }}
            style={styles.ImageBackground_I10014_2140_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5327e2ea-7842-4c7f-b8c6-25981704d112"
            }}
            style={styles.ImageBackground_I10014_2140_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_10014_2141}>
        <Text style={styles.Text_10014_2141}>
          Welcome. What is your phone number?
        </Text>
      </View>
      <View style={styles.View_10014_2142}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e3e035c7-4547-446d-b84b-a92658b38ff4"
          }}
          style={styles.ImageBackground_I10014_2142_0_2939}
        />
        <View style={styles.View_I10014_2142_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48001096-b327-4588-bd1c-bf02e50810a7"
            }}
            style={styles.ImageBackground_I10014_2142_0_2943}
          />
        </View>
        <View style={styles.View_I10014_2142_0_2952}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10014_2142_0_2945}
          />
          <View style={styles.View_I10014_2142_0_2948}>
            <View style={styles.View_I10014_2142_0_2946}>
              <Text style={styles.Text_I10014_2142_0_2946}> </Text>
            </View>
            <View style={styles.View_I10014_2142_0_2947}>
              <Text style={styles.Text_I10014_2142_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_2951}>
            <View style={styles.View_I10014_2142_0_2949}>
              <Text style={styles.Text_I10014_2142_0_2949}>0</Text>
            </View>
            <View style={styles.View_I10014_2142_0_2950}>
              <Text style={styles.Text_I10014_2142_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2142_0_2957}>
          <View
            source={{ uri: "null" }}
            style={styles.View_I10014_2142_0_2953}
          />
          <View style={styles.View_I10014_2142_0_2956}>
            <View style={styles.View_I10014_2142_0_2954}>
              <Text style={styles.Text_I10014_2142_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I10014_2142_0_2955}>
              <Text style={styles.Text_I10014_2142_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2142_0_3027}>
          <View style={styles.View_I10014_2142_0_2965}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2958}
            />
            <View style={styles.View_I10014_2142_0_2961}>
              <View style={styles.View_I10014_2142_0_2959}>
                <Text style={styles.Text_I10014_2142_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2efa6ac0-afc0-497b-8dc1-78e94e9c0f58"
                }}
                style={styles.ImageBackground_I10014_2142_0_2960}
              />
            </View>
            <View style={styles.View_I10014_2142_0_2964}>
              <View style={styles.View_I10014_2142_0_2962}>
                <Text style={styles.Text_I10014_2142_0_2962}>9</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2963}>
                <Text style={styles.Text_I10014_2142_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_2970}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2966}
            />
            <View style={styles.View_I10014_2142_0_2969}>
              <View style={styles.View_I10014_2142_0_2967}>
                <Text style={styles.Text_I10014_2142_0_2967}>8</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2968}>
                <Text style={styles.Text_I10014_2142_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_2978}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2971}
            />
            <View style={styles.View_I10014_2142_0_2974}>
              <View style={styles.View_I10014_2142_0_2972}>
                <Text style={styles.Text_I10014_2142_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2973}>
                <Text style={styles.Text_I10014_2142_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_2977}>
              <View style={styles.View_I10014_2142_0_2975}>
                <Text style={styles.Text_I10014_2142_0_2975}>7</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2976}>
                <Text style={styles.Text_I10014_2142_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_2986}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2979}
            />
            <View style={styles.View_I10014_2142_0_2982}>
              <View style={styles.View_I10014_2142_0_2980}>
                <Text style={styles.Text_I10014_2142_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2981}>
                <Text style={styles.Text_I10014_2142_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_2985}>
              <View style={styles.View_I10014_2142_0_2983}>
                <Text style={styles.Text_I10014_2142_0_2983}>6</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2984}>
                <Text style={styles.Text_I10014_2142_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_2994}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2987}
            />
            <View style={styles.View_I10014_2142_0_2990}>
              <View style={styles.View_I10014_2142_0_2988}>
                <Text style={styles.Text_I10014_2142_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2989}>
                <Text style={styles.Text_I10014_2142_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_2993}>
              <View style={styles.View_I10014_2142_0_2991}>
                <Text style={styles.Text_I10014_2142_0_2991}>5</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2992}>
                <Text style={styles.Text_I10014_2142_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_3002}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_2995}
            />
            <View style={styles.View_I10014_2142_0_2998}>
              <View style={styles.View_I10014_2142_0_2996}>
                <Text style={styles.Text_I10014_2142_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I10014_2142_0_2997}>
                <Text style={styles.Text_I10014_2142_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_3001}>
              <View style={styles.View_I10014_2142_0_2999}>
                <Text style={styles.Text_I10014_2142_0_2999}>4</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3000}>
                <Text style={styles.Text_I10014_2142_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_3010}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_3003}
            />
            <View style={styles.View_I10014_2142_0_3006}>
              <View style={styles.View_I10014_2142_0_3004}>
                <Text style={styles.Text_I10014_2142_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3005}>
                <Text style={styles.Text_I10014_2142_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_3009}>
              <View style={styles.View_I10014_2142_0_3007}>
                <Text style={styles.Text_I10014_2142_0_3007}>3</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3008}>
                <Text style={styles.Text_I10014_2142_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_3018}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_3011}
            />
            <View style={styles.View_I10014_2142_0_3014}>
              <View style={styles.View_I10014_2142_0_3012}>
                <Text style={styles.Text_I10014_2142_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3013}>
                <Text style={styles.Text_I10014_2142_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_3017}>
              <View style={styles.View_I10014_2142_0_3015}>
                <Text style={styles.Text_I10014_2142_0_3015}>2</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3016}>
                <Text style={styles.Text_I10014_2142_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I10014_2142_0_3026}>
            <View
              source={{ uri: "null" }}
              style={styles.View_I10014_2142_0_3019}
            />
            <View style={styles.View_I10014_2142_0_3022}>
              <View style={styles.View_I10014_2142_0_3020}>
                <Text style={styles.Text_I10014_2142_0_3020}> </Text>
              </View>
              <View style={styles.View_I10014_2142_0_3021}>
                <Text style={styles.Text_I10014_2142_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I10014_2142_0_3025}>
              <View style={styles.View_I10014_2142_0_3023}>
                <Text style={styles.Text_I10014_2142_0_3023}>1</Text>
              </View>
              <View style={styles.View_I10014_2142_0_3024}>
                <Text style={styles.Text_I10014_2142_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I10014_2142_0_3040}>
          <View style={styles.View_I10014_2142_0_3039}>
            <View style={styles.View_I10014_2142_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5605b3c-46b8-40b9-a99b-5556750bd43a"
                }}
                style={styles.ImageBackground_I10014_2142_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f050e5f-80c8-463e-83b4-ce12893e5d54"
                }}
                style={styles.ImageBackground_I10014_2142_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbde46a2-d5de-476f-8e71-6d8d6150ecba"
                }}
                style={styles.ImageBackground_I10014_2142_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e52f557-e9cc-4df2-bbfa-4fd7a67fee25"
                }}
                style={styles.ImageBackground_I10014_2142_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6fbe549d-6664-4a90-a4a4-a567c3f5cb49"
                }}
                style={styles.ImageBackground_I10014_2142_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfca472a-6efd-45bb-8ef3-af401ef8fbfd"
                }}
                style={styles.ImageBackground_I10014_2142_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8f8c558-5e3a-4dfd-be5a-be948b3cbc24"
                }}
                style={styles.ImageBackground_I10014_2142_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1fa9750-9f24-47d2-9d2d-6ead832dddc6"
                }}
                style={styles.ImageBackground_I10014_2142_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/20183ff7-b9ea-4f09-8c50-b3c049c96583"
                }}
                style={styles.ImageBackground_I10014_2142_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38a8e6de-107f-4f49-acf3-46521a662015"
                }}
                style={styles.ImageBackground_I10014_2142_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0ac43d7-9446-4fcc-9f56-7516754502b6"
        }}
        style={styles.ImageBackground_10014_2143}
      />
      <View style={styles.View_10014_2144}>
        <View style={styles.View_10014_2145}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c768229-3813-469a-98c4-2e199630779b"
            }}
            style={styles.ImageBackground_10014_2146}
          />
          <View style={styles.View_10014_2147}>
            <Text style={styles.Text_10014_2147}>
              Profile Settings SafeTBoxes Billing Help
            </Text>
          </View>
          <View style={styles.View_10014_2148}>
            <Text style={styles.Text_10014_2148}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/295fe53b-126e-4cd9-97b9-216874bfe807"
            }}
            style={styles.ImageBackground_10014_2149}
          />
        </View>
      </View>
      <View style={styles.View_0_788}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de9f3495-4af7-497e-b826-f0f14f232ca0"
          }}
          style={styles.ImageBackground_0_792}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_0_810}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_812"))
          }
        >
          <View source={{ uri: "null" }} style={styles.View_0_793} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ef2e173-6bec-44fa-a453-18c8ccb9cdde"
            }}
            style={styles.ImageBackground_0_809}
          />
          <View style={styles.View_0_798}>
            <View style={styles.View_0_797}>
              <View style={styles.View_I0_797_0_985}>
                <View style={styles.View_I0_797_0_3140}>
                  <Text style={styles.Text_I0_797_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_797_0_3141}>
                  <Text style={styles.Text_I0_797_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_797_0_984}>
                <Text style={styles.Text_I0_797_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_797_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_797_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03abfba2-7d01-4569-bb22-ba6b11357ba3"
                  }}
                  style={styles.ImageBackground_I0_797_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/151a6edb-1319-4167-8125-6be15dab4977"
                  }}
                  style={styles.ImageBackground_I0_797_0_794_0_796}
                />
                <View style={styles.View_I0_797_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b08e24f-dd85-499a-b0b7-db07a67ccb0b"
                    }}
                    style={styles.ImageBackground_I0_797_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a842610-857e-40dc-9958-940c142f09d6"
                    }}
                    style={styles.ImageBackground_I0_797_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_800}>
            <View style={styles.View_0_799}>
              <View style={styles.View_I0_799_0_985}>
                <View style={styles.View_I0_799_0_3140}>
                  <Text style={styles.Text_I0_799_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_799_0_3141}>
                  <Text style={styles.Text_I0_799_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_799_0_984}>
                <Text style={styles.Text_I0_799_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_799_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_799_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ca66366-eac0-4cd7-bbdd-196b0d54fb5e"
                  }}
                  style={styles.ImageBackground_I0_799_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7aa771a-29bf-4f65-9413-2e220fa09300"
                  }}
                  style={styles.ImageBackground_I0_799_0_794_0_796}
                />
                <View style={styles.View_I0_799_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c682397f-690e-4521-9070-5fef1914ad3b"
                    }}
                    style={styles.ImageBackground_I0_799_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/458dcf1a-14a8-4ea1-8d57-19e45a304860"
                    }}
                    style={styles.ImageBackground_I0_799_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_802}>
            <View style={styles.View_0_801}>
              <View style={styles.View_I0_801_0_985}>
                <View style={styles.View_I0_801_0_3140}>
                  <Text style={styles.Text_I0_801_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_801_0_3141}>
                  <Text style={styles.Text_I0_801_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_801_0_984}>
                <Text style={styles.Text_I0_801_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_801_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_801_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/16f249fe-bec4-4b1c-8fe2-f16a015adad6"
                  }}
                  style={styles.ImageBackground_I0_801_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d442020-3ddb-4291-bd24-c33ef1350657"
                  }}
                  style={styles.ImageBackground_I0_801_0_794_0_796}
                />
                <View style={styles.View_I0_801_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56e2d6f2-2f6a-48b3-b9aa-fc1727a158ff"
                    }}
                    style={styles.ImageBackground_I0_801_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f3207db-2bc8-45d3-8bab-70a6ee5cdba3"
                    }}
                    style={styles.ImageBackground_I0_801_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_804}>
            <View style={styles.View_0_803}>
              <View style={styles.View_I0_803_0_985}>
                <View style={styles.View_I0_803_0_3140}>
                  <Text style={styles.Text_I0_803_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_803_0_3141}>
                  <Text style={styles.Text_I0_803_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_803_0_984}>
                <Text style={styles.Text_I0_803_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_803_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_803_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1de07be-3001-4010-86df-6548aac1c548"
                  }}
                  style={styles.ImageBackground_I0_803_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9c389fe-3115-4c70-949e-cbab33e7676b"
                  }}
                  style={styles.ImageBackground_I0_803_0_794_0_796}
                />
                <View style={styles.View_I0_803_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fe7a900-5b5e-4b69-96ba-5c70fab183ca"
                    }}
                    style={styles.ImageBackground_I0_803_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/63c6c7a6-f0e4-49c2-bec3-e851141b374f"
                    }}
                    style={styles.ImageBackground_I0_803_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_806}>
            <View style={styles.View_0_805}>
              <View style={styles.View_I0_805_0_985}>
                <View style={styles.View_I0_805_0_3140}>
                  <Text style={styles.Text_I0_805_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_805_0_3141}>
                  <Text style={styles.Text_I0_805_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_805_0_984}>
                <Text style={styles.Text_I0_805_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_805_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_805_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00ba17f8-42ee-443c-9d51-90766c663a39"
                  }}
                  style={styles.ImageBackground_I0_805_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce1ef087-abba-44a3-9bb6-04efed3d3546"
                  }}
                  style={styles.ImageBackground_I0_805_0_794_0_796}
                />
                <View style={styles.View_I0_805_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d14a1dd-4873-494d-939d-c19fe0c989ec"
                    }}
                    style={styles.ImageBackground_I0_805_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d94b83a-ee54-4c7d-95e7-f84cfdcbca8a"
                    }}
                    style={styles.ImageBackground_I0_805_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_808}>
            <View style={styles.View_0_807}>
              <View style={styles.View_I0_807_0_985}>
                <View style={styles.View_I0_807_0_3140}>
                  <Text style={styles.Text_I0_807_0_3140}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
                <View style={styles.View_I0_807_0_3141}>
                  <Text style={styles.Text_I0_807_0_3141}>
                    2018 Financial Prerequisites
                  </Text>
                </View>
              </View>
              <View style={styles.View_I0_807_0_984}>
                <Text style={styles.Text_I0_807_0_984}>Yesterday</Text>
              </View>
              <View style={styles.View_I0_807_0_794}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_807_0_794_0_2888}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf825440-320f-44d7-b0fc-41d2f0a47813"
                  }}
                  style={styles.ImageBackground_I0_807_0_794_0_795}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8520ec60-7f72-4a29-9fe5-f563b9bd6c51"
                  }}
                  style={styles.ImageBackground_I0_807_0_794_0_796}
                />
                <View style={styles.View_I0_807_0_794_0_2891}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d8c9155-9863-48dc-81fe-a5ddd7f69c54"
                    }}
                    style={styles.ImageBackground_I0_807_0_794_0_2889}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03329ee1-55f9-4c5d-bdaf-c2b2b9c5e4f0"
                    }}
                    style={styles.ImageBackground_I0_807_0_794_0_2890}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_0_830}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/def92993-c5bd-47fd-8f61-2a67ae62855b"
            }}
            style={styles.ImageBackground_0_828}
          />
          <View style={styles.View_0_829}>
            <Text style={styles.Text_0_829}>Most Recent</Text>
          </View>
        </View>
        <View style={styles.View_0_862}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/550c265a-6b28-4ce4-bbc4-c5d13bf226f3"
            }}
            style={styles.ImageBackground_0_845}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6281a54b-e192-4947-9ab3-2bca04b3d5a6"
            }}
            style={styles.ImageBackground_0_849}
          />
          <TouchableOpacity
            style={styles.TouchableOpacity_0_855}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_857"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b264252a-3c5e-4b44-a6bb-981742c3e0c0"
              }}
              style={styles.ImageBackground_0_850}
            />
            <View style={styles.View_0_851}>
              <Text style={styles.Text_0_851}>Search</Text>
            </View>
            <View style={styles.View_0_853}>
              <View style={styles.View_I0_853_0_2777}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c5c8b11-4e60-4ad3-a4b5-af5b9a8614ca"
                  }}
                  style={styles.ImageBackground_I0_853_0_2775}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b4d2d02-0486-42bf-a7c9-3289ce41795e"
                  }}
                  style={styles.ImageBackground_I0_853_0_2776}
                />
              </View>
            </View>
          </TouchableOpacity>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36912494-995e-40db-a5c8-4df1fa9608c1"
            }}
            style={styles.ImageBackground_0_858}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1c4b74a-15cf-4d82-b78e-9d57ed39037c"
            }}
            style={styles.ImageBackground_0_861}
          />
        </View>
        <View style={styles.View_0_890}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f5438399-34f4-4b6c-9280-05c737074de5"
            }}
            style={styles.ImageBackground_0_863}
          />
          <View style={styles.View_0_864}>
            <Text style={styles.Text_0_864}>SafeTBoxes</Text>
          </View>
          <TouchableOpacity
            style={styles.TouchableOpacity_0_871}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_857"))
            }
          >
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df838d13-dbff-4abc-bcf8-168110e60cb2"
              }}
              style={styles.ImageBackground_0_865}
            />
            <View style={styles.View_0_866}>
              <Text style={styles.Text_0_866}>Search</Text>
            </View>
            <View style={styles.View_0_870}>
              <View style={styles.View_0_869}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56edc9b5-5662-4f1c-b2f5-55eec4382c31"
                  }}
                  style={styles.ImageBackground_0_867}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09d3fcef-bd84-453c-b1f8-4dcf4ac14e6e"
                  }}
                  style={styles.ImageBackground_0_868}
                />
              </View>
            </View>
          </TouchableOpacity>
          <View style={styles.View_0_879}>
            <View source={{ uri: "null" }} style={styles.View_0_873} />
            <View style={styles.View_0_878}>
              <View source={{ uri: "null" }} style={styles.View_0_874} />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e1bade9-5818-456e-bf6d-bda421fcc398"
                }}
                style={styles.ImageBackground_0_877}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1828ea99-498b-48f3-8ded-b5039adc3800"
            }}
            style={styles.ImageBackground_0_883}
          />
          <TouchableOpacity
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e447056a-e765-4a02-8ebd-4cdb615eb52e"
            }}
            style={styles.TouchableOpacity_0_884}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("0_886"))
            }
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a4cc0c-65b0-40f7-bdab-7546ebf919f8"
            }}
            style={styles.ImageBackground_0_889}
          />
        </View>
        <View style={styles.View_10015_2670}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/88f078b4-42d9-4811-bce7-ecff4e8f1710"
            }}
            style={styles.ImageBackground_I10015_2670_0_2768}
          />
          <View style={styles.View_I10015_2670_0_2769}>
            <Text style={styles.Text_I10015_2670_0_2769}>Create Vault</Text>
          </View>
          <View style={styles.View_I10015_2670_0_2772}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/178c41ba-422c-40ae-a430-e070e7b814a0"
              }}
              style={styles.ImageBackground_I10015_2670_0_2770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38d2a838-b82e-4166-9677-f8175a5fd481"
              }}
              style={styles.ImageBackground_I10015_2670_0_2771}
            />
          </View>
        </View>
        <View style={styles.View_0_891}>
          <View source={{ uri: "null" }} style={styles.View_I0_891_0_3062} />
          <View style={styles.View_I0_891_0_3082}>
            <View style={styles.View_I0_891_0_3076}>
              <View style={styles.View_I0_891_0_3067}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_891_0_3063}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0076d716-e057-4650-83e1-ef78c25ff079"
                  }}
                  style={styles.ImageBackground_I0_891_0_3066}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23ca6af6-e254-4245-bb20-e054efe5e044"
                  }}
                  style={styles.ImageBackground_I0_891_0_3065}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a45858d1-6549-4c68-ae1c-bdb7e86949b5"
                }}
                style={styles.ImageBackground_I0_891_0_3071}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84e913d2-8257-4bea-b566-b402f65d0fa8"
                }}
                style={styles.ImageBackground_I0_891_0_3075}
              />
            </View>
            <View style={styles.View_I0_891_0_3077}>
              <Text style={styles.Text_I0_891_0_3077}>100%</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc89149f-8c2c-43e3-8359-81051ebf94f1"
              }}
              style={styles.ImageBackground_I0_891_0_3081}
            />
          </View>
          <View style={styles.View_I0_891_0_3083}>
            <Text style={styles.Text_I0_891_0_3083}>4:19 AM</Text>
          </View>
          <View style={styles.View_I0_891_0_3093}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6a20541-bb0d-4958-9d47-de0bd8b91d56"
              }}
              style={styles.ImageBackground_I0_891_0_3088}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b2643a5-fa42-4d03-9bba-648acfa232f8"
              }}
              style={styles.ImageBackground_I0_891_0_3092}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("175%") },
  ImageBackground_10014_2139: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2140: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2140_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2140_0_3082: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2140_0_3076: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2140_0_3067: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2140_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2140_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2140_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2140_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I10014_2140_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2140_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2140_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10014_2140_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2140_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2140_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2140_0_3093: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2140_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I10014_2140_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2141: {
    width: wp("75%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_10014_2141: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2142: {
    width: wp("100%"),
    height: hp("57%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2142_0_2939: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2944: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    top: hp("52%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2142_0_2943: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I10014_2142_0_2952: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2945: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2948: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2946: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2947: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2951: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2949: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2950: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2957: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("50%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2953: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2956: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2954: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2955: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3027: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2965: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2958: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2961: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2959: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I10014_2142_0_2960: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2964: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2962: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2963: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2970: {
    width: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2966: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2969: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2967: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2968: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2978: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2971: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2974: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2972: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2973: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2977: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2975: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2976: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2986: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2979: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2982: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2980: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2981: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2985: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2983: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2984: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2994: {
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2987: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2990: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2988: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2989: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2993: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2991: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2992: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3002: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2995: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_2998: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2996: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_2997: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3001: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_2999: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3000: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3010: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3003: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_3006: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3004: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3005: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3009: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3007: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3008: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3018: {
    width: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3011: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_3014: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3012: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3013: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3017: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3015: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3016: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3026: {
    width: wp("16%"),
    minWidth: wp("16%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3019: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2142_0_3022: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3020: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3021: {
    flexGrow: 1,
    width: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3025: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3023: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3024: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2142_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2142_0_3040: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3039: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2142_0_3038: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2142_0_3028: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2142_0_3029: {
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
  ImageBackground_I10014_2142_0_3030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2142_0_3031: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10014_2142_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2142_0_3033: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I10014_2142_0_3034: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2142_0_3035: {
    width: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2142_0_3036: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10014_2142_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10014_2143: {
    width: wp("61%"),
    height: hp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    resizeMode: "cover"
  },
  View_10014_2144: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10014_2145: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10014_2146: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2147: {
    width: wp("15%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2147: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2148: {
    width: wp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2148: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2149: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_0_788: {
    width: wp("50%"),
    height: hp("124%"),
    top: hp("49%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    overflow: "hidden"
  },
  ImageBackground_0_792: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_0_810: {
    width: wp("45%"),
    height: hp("38%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_793: {
    width: wp("45%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_809: {
    width: wp("45%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_798: {
    width: wp("45%"),
    height: hp("38%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_797: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_797_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_797_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_797_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_797_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_797_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_797_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_797_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_797_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_797_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_797_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_797_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_797_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_797_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_797_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_800: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_799: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_799_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_799_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_799_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_799_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_799_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_799_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_799_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_799_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_799_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_799_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_799_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_799_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_799_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_799_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_802: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_0_801: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_801_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_801_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_801_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_801_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_801_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_801_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_801_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_801_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_801_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_801_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_801_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_801_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_801_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_801_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_804: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_803: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_803_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_803_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_803_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_803_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_803_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_803_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_803_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_803_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_803_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_803_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_803_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_803_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_803_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_803_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_806: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_805: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_805_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_805_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_805_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_805_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_805_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_805_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_805_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_805_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_805_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_805_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_805_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_805_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_805_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_805_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_808: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%")
  },
  View_0_807: {
    width: wp("13%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_807_0_985: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_807_0_3140: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_807_0_3140: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_807_0_3141: {
    flexGrow: 1,
    width: wp("13%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_807_0_3141: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_807_0_984: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_I0_807_0_984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_807_0_794: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_807_0_794_0_2888: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_807_0_794_0_795: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_807_0_794_0_796: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_I0_807_0_794_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_807_0_794_0_2889: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_807_0_794_0_2890: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_830: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-3%")
  },
  ImageBackground_0_828: {
    width: wp("18%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_829: {
    width: wp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_829: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_862: {
    width: wp("50%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_845: {
    width: wp("50%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_849: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_0_855: {
    width: wp("37%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_0_850: {
    width: wp("37%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_851: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_0_851: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_853: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_853_0_2777: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_853_0_2775: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_853_0_2776: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_0_858: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_861: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_890: {
    width: wp("50%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_863: {
    width: wp("50%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_864: {
    width: wp("22%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_864: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_0_871: {
    width: wp("41%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_865: {
    flexGrow: 1,
    width: wp("41%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_866: {
    width: wp("7%"),
    minWidth: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_866: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_870: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_869: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_867: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_868: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_0_879: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_873: {
    width: wp("24%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_878: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_874: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_877: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_883: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45%")
  },
  TouchableOpacity_0_884: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_889: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_10015_2670: {
    width: wp("26%"),
    height: hp("6%"),
    top: hp("94%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_2670_0_2768: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10015_2670_0_2769: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I10015_2670_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10015_2670_0_2772: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10015_2670_0_2770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10015_2670_0_2771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_891: {
    width: wp("50%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_3062: {
    flexGrow: 1,
    width: wp("50%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_891_0_3082: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_3076: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_3067: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_891_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_891_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_891_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_891_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I0_891_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_891_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_891_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_891_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_891_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_891_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_891_0_3093: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_891_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_891_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
