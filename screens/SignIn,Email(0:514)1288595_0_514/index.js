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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/116a35de-eff1-4acd-bf2d-ea943fc763b6"
        }}
        style={styles.ImageBackground_0_543}
      />
      <View style={styles.View_0_544}>
        <View source={{ uri: "null" }} style={styles.View_I0_544_0_3062} />
        <View style={styles.View_I0_544_0_3082}>
          <View style={styles.View_I0_544_0_3076}>
            <View style={styles.View_I0_544_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_544_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06486aff-ccab-41e4-9243-aba21cb720c0"
                }}
                style={styles.ImageBackground_I0_544_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40d2451a-bbff-41e8-ba20-d861ba331247"
                }}
                style={styles.ImageBackground_I0_544_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b57b30a-7eb2-442f-baa0-681fd282b231"
              }}
              style={styles.ImageBackground_I0_544_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbfb927d-4d6b-435b-8701-6f6775bfb56f"
              }}
              style={styles.ImageBackground_I0_544_0_3075}
            />
          </View>
          <View style={styles.View_I0_544_0_3077}>
            <Text style={styles.Text_I0_544_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42acc636-95e5-4ecf-8f32-4167f02b495f"
            }}
            style={styles.ImageBackground_I0_544_0_3081}
          />
        </View>
        <View style={styles.View_I0_544_0_3083}>
          <Text style={styles.Text_I0_544_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_544_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b84774e-fe95-40b7-97db-99b464c41271"
            }}
            style={styles.ImageBackground_I0_544_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13d456a1-4924-417b-ba00-f92603ad7357"
            }}
            style={styles.ImageBackground_I0_544_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_0_545}>
        <Text style={styles.Text_0_545}>
          Welcome. What is your phone number?
        </Text>
      </View>
      <View style={styles.View_0_668}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d0e3e96-6d8b-4752-b15f-38cf489a0e5c"
          }}
          style={styles.ImageBackground_I0_668_0_2939}
        />
        <View style={styles.View_I0_668_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/424c2127-0a13-4333-bfb2-3ff7d3b5e368"
            }}
            style={styles.ImageBackground_I0_668_0_2943}
          />
        </View>
        <View style={styles.View_I0_668_0_2952}>
          <View source={{ uri: "null" }} style={styles.View_I0_668_0_2945} />
          <View style={styles.View_I0_668_0_2948}>
            <View style={styles.View_I0_668_0_2946}>
              <Text style={styles.Text_I0_668_0_2946}> </Text>
            </View>
            <View style={styles.View_I0_668_0_2947}>
              <Text style={styles.Text_I0_668_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I0_668_0_2951}>
            <View style={styles.View_I0_668_0_2949}>
              <Text style={styles.Text_I0_668_0_2949}>0</Text>
            </View>
            <View style={styles.View_I0_668_0_2950}>
              <Text style={styles.Text_I0_668_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_668_0_2957}>
          <View source={{ uri: "null" }} style={styles.View_I0_668_0_2953} />
          <View style={styles.View_I0_668_0_2956}>
            <View style={styles.View_I0_668_0_2954}>
              <Text style={styles.Text_I0_668_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I0_668_0_2955}>
              <Text style={styles.Text_I0_668_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_668_0_3027}>
          <View style={styles.View_I0_668_0_2965}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2958} />
            <View style={styles.View_I0_668_0_2961}>
              <View style={styles.View_I0_668_0_2959}>
                <Text style={styles.Text_I0_668_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae377082-41d2-4644-99dd-477cb740dc25"
                }}
                style={styles.ImageBackground_I0_668_0_2960}
              />
            </View>
            <View style={styles.View_I0_668_0_2964}>
              <View style={styles.View_I0_668_0_2962}>
                <Text style={styles.Text_I0_668_0_2962}>9</Text>
              </View>
              <View style={styles.View_I0_668_0_2963}>
                <Text style={styles.Text_I0_668_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_2970}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2966} />
            <View style={styles.View_I0_668_0_2969}>
              <View style={styles.View_I0_668_0_2967}>
                <Text style={styles.Text_I0_668_0_2967}>8</Text>
              </View>
              <View style={styles.View_I0_668_0_2968}>
                <Text style={styles.Text_I0_668_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_2978}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2971} />
            <View style={styles.View_I0_668_0_2974}>
              <View style={styles.View_I0_668_0_2972}>
                <Text style={styles.Text_I0_668_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I0_668_0_2973}>
                <Text style={styles.Text_I0_668_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_2977}>
              <View style={styles.View_I0_668_0_2975}>
                <Text style={styles.Text_I0_668_0_2975}>7</Text>
              </View>
              <View style={styles.View_I0_668_0_2976}>
                <Text style={styles.Text_I0_668_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_2986}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2979} />
            <View style={styles.View_I0_668_0_2982}>
              <View style={styles.View_I0_668_0_2980}>
                <Text style={styles.Text_I0_668_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I0_668_0_2981}>
                <Text style={styles.Text_I0_668_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_2985}>
              <View style={styles.View_I0_668_0_2983}>
                <Text style={styles.Text_I0_668_0_2983}>6</Text>
              </View>
              <View style={styles.View_I0_668_0_2984}>
                <Text style={styles.Text_I0_668_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_2994}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2987} />
            <View style={styles.View_I0_668_0_2990}>
              <View style={styles.View_I0_668_0_2988}>
                <Text style={styles.Text_I0_668_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I0_668_0_2989}>
                <Text style={styles.Text_I0_668_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_2993}>
              <View style={styles.View_I0_668_0_2991}>
                <Text style={styles.Text_I0_668_0_2991}>5</Text>
              </View>
              <View style={styles.View_I0_668_0_2992}>
                <Text style={styles.Text_I0_668_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_3002}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_2995} />
            <View style={styles.View_I0_668_0_2998}>
              <View style={styles.View_I0_668_0_2996}>
                <Text style={styles.Text_I0_668_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I0_668_0_2997}>
                <Text style={styles.Text_I0_668_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_3001}>
              <View style={styles.View_I0_668_0_2999}>
                <Text style={styles.Text_I0_668_0_2999}>4</Text>
              </View>
              <View style={styles.View_I0_668_0_3000}>
                <Text style={styles.Text_I0_668_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_3010}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_3003} />
            <View style={styles.View_I0_668_0_3006}>
              <View style={styles.View_I0_668_0_3004}>
                <Text style={styles.Text_I0_668_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I0_668_0_3005}>
                <Text style={styles.Text_I0_668_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_3009}>
              <View style={styles.View_I0_668_0_3007}>
                <Text style={styles.Text_I0_668_0_3007}>3</Text>
              </View>
              <View style={styles.View_I0_668_0_3008}>
                <Text style={styles.Text_I0_668_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_3018}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_3011} />
            <View style={styles.View_I0_668_0_3014}>
              <View style={styles.View_I0_668_0_3012}>
                <Text style={styles.Text_I0_668_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I0_668_0_3013}>
                <Text style={styles.Text_I0_668_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_3017}>
              <View style={styles.View_I0_668_0_3015}>
                <Text style={styles.Text_I0_668_0_3015}>2</Text>
              </View>
              <View style={styles.View_I0_668_0_3016}>
                <Text style={styles.Text_I0_668_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_668_0_3026}>
            <View source={{ uri: "null" }} style={styles.View_I0_668_0_3019} />
            <View style={styles.View_I0_668_0_3022}>
              <View style={styles.View_I0_668_0_3020}>
                <Text style={styles.Text_I0_668_0_3020}> </Text>
              </View>
              <View style={styles.View_I0_668_0_3021}>
                <Text style={styles.Text_I0_668_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I0_668_0_3025}>
              <View style={styles.View_I0_668_0_3023}>
                <Text style={styles.Text_I0_668_0_3023}>1</Text>
              </View>
              <View style={styles.View_I0_668_0_3024}>
                <Text style={styles.Text_I0_668_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_668_0_3040}>
          <View style={styles.View_I0_668_0_3039}>
            <View style={styles.View_I0_668_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/188490f8-f5b2-45e1-a089-a4c7e1a209a7"
                }}
                style={styles.ImageBackground_I0_668_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af4ee9ca-b82b-4d61-bfbd-92f7273fc83e"
                }}
                style={styles.ImageBackground_I0_668_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9287328-afa3-483f-94a5-f21d8e55e550"
                }}
                style={styles.ImageBackground_I0_668_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/72d52540-3c9c-4710-a486-eed775f7d8a5"
                }}
                style={styles.ImageBackground_I0_668_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/593fc8b0-bfee-4b5e-85d8-860f98b4c894"
                }}
                style={styles.ImageBackground_I0_668_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e7f378d-d1eb-4a83-acf9-b4d18e8cd656"
                }}
                style={styles.ImageBackground_I0_668_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ee08d00a-d3ea-46d0-ab33-19c5840ca473"
                }}
                style={styles.ImageBackground_I0_668_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85e633fe-26e3-4825-894d-7d9689391559"
                }}
                style={styles.ImageBackground_I0_668_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e1147a3-1d85-4516-b53d-757eb48aa44c"
                }}
                style={styles.ImageBackground_I0_668_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fca26cc9-b58d-4037-9a6c-46e4140eee44"
                }}
                style={styles.ImageBackground_I0_668_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6454a806-58ce-49f1-95ec-89ce6ee7eac7"
        }}
        style={styles.ImageBackground_10007_2364}
      />
      <View style={styles.View_10014_2084}>
        <View style={styles.View_10014_2085}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f78c820e-e0f2-4977-b08e-3c4486212dba"
            }}
            style={styles.ImageBackground_10014_2086}
          />
          <View style={styles.View_10014_2087}>
            <Text style={styles.Text_10014_2087}>
              Profile Settings Billing Help
            </Text>
          </View>
          <View style={styles.View_10014_2088}>
            <Text style={styles.Text_10014_2088}>Log out</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78c2ed1-b68c-4ed4-b4ca-e7d185b3cea3"
            }}
            style={styles.ImageBackground_10014_2093}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_10014_2097}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("10014_2098"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e00b67aa-5e20-47e0-9924-d56649033340"
          }}
          style={styles.ImageBackground_10014_2098}
        />
        <View style={styles.View_10014_2100}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65e09c14-72d5-4e36-9b42-52ea95ad9f1b"
            }}
            style={styles.ImageBackground_10014_2101}
          />
          <View style={styles.View_10014_2102}>
            <View style={styles.View_10014_2103}>
              <Text style={styles.Text_10014_2103}>Evolve</Text>
            </View>
            <View style={styles.View_10014_2104}>
              <Text style={styles.Text_10014_2104}>
                Secure Folder in Company Folder
              </Text>
            </View>
            <View style={styles.View_10014_2105}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I10014_2105_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71ff33d4-d039-41d4-8352-6b14e75657c6"
                }}
                style={styles.ImageBackground_I10014_2105_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0420a960-ec6c-4e08-8724-6d26f69435ef"
                }}
                style={styles.ImageBackground_I10014_2105_0_2841}
              />
              <View style={styles.View_I10014_2105_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12f604f1-e164-4d39-98d7-5733be01d8c5"
                  }}
                  style={styles.ImageBackground_I10014_2105_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18f84e10-d678-4b77-9047-88e828f76f03"
                  }}
                  style={styles.ImageBackground_I10014_2105_0_2843}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b5ca73f-da68-4b58-807a-eff4de46b967"
              }}
              style={styles.ImageBackground_10014_2106}
            />
          </View>
        </View>
        <View style={styles.View_10014_2109}>
          <View style={styles.View_10014_2110}>
            <Text style={styles.Text_10014_2110}>Email</Text>
          </View>
          <View style={styles.View_10014_2111}>
            <Text style={styles.Text_10014_2111}>Email address</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c359557-f0a2-4d31-94a9-5a6e7a2885f9"
            }}
            style={styles.ImageBackground_10014_2112}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2133}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_10014_2134}>
            <Text style={styles.Text_10014_2134}>Password</Text>
          </View>
          <View style={styles.View_10014_2135}>
            <Text style={styles.Text_10014_2135}>Password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78270bc0-b3e2-4103-9c22-f155fb0dcf54"
            }}
            style={styles.ImageBackground_10014_2136}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2320}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_945"))
          }
        >
          <View style={styles.View_10014_2321}>
            <Text style={styles.Text_10014_2321}>Security Question</Text>
          </View>
          <View style={styles.View_10014_2322}>
            <Text style={styles.Text_10014_2322}>Select 1</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e007b88f-3dfe-4623-a56e-bfcf8ad0e7b7"
            }}
            style={styles.ImageBackground_10014_2323}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_10014_2113}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("10014_2138"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd858393-d411-46e3-b856-1848a438bfd1"
            }}
            style={styles.ImageBackground_I10014_2113_0_2768}
          />
          <View style={styles.View_I10014_2113_0_2769}>
            <Text style={styles.Text_I10014_2113_0_2769}>Login</Text>
          </View>
          <View style={styles.View_I10014_2113_0_2772}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5352e597-a8ce-46eb-9514-5422cd4ab5f8"
              }}
              style={styles.ImageBackground_I10014_2113_0_2770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c3d5765-0009-477c-9197-5e2c59ab237f"
              }}
              style={styles.ImageBackground_I10014_2113_0_2771}
            />
          </View>
        </TouchableOpacity>
      </TouchableOpacity>
      <View style={styles.View_10014_2137}>
        <Text style={styles.Text_10014_2137}>Forgot Password?</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("175%") },
  ImageBackground_0_543: {
    width: wp("100%"),
    height: hp("175%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_544: {
    width: wp("100%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_544_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_544_0_3082: {
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
  View_I0_544_0_3076: {
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
  View_I0_544_0_3067: {
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
  View_I0_544_0_3063: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_544_0_3066: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_544_0_3065: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_544_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I0_544_0_3075: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_544_0_3077: {
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_544_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_544_0_3081: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_544_0_3083: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I0_544_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_544_0_3093: {
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
  ImageBackground_I0_544_0_3088: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_544_0_3092: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_545: {
    width: wp("75%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    justifyContent: "flex-start"
  },
  Text_0_545: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_668: {
    width: wp("100%"),
    height: hp("57%"),
    top: hp("118%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_668_0_2939: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2944: {
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
  ImageBackground_I0_668_0_2943: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_668_0_2952: {
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
  View_I0_668_0_2945: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2948: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2946: {
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
  Text_I0_668_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2947: {
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
  Text_I0_668_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2951: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2949: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2950: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2957: {
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
  View_I0_668_0_2953: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2956: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2954: {
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
  Text_I0_668_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2955: {
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
  Text_I0_668_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3027: {
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
  View_I0_668_0_2965: {
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
  View_I0_668_0_2958: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2961: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2959: {
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
  Text_I0_668_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_668_0_2960: {
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
  View_I0_668_0_2964: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2962: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2963: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2970: {
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
  View_I0_668_0_2966: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2969: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2967: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2968: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2978: {
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
  View_I0_668_0_2971: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2974: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2972: {
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
  Text_I0_668_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2973: {
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
  Text_I0_668_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2977: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2975: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2976: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2986: {
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
  View_I0_668_0_2979: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2982: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2980: {
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
  Text_I0_668_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2981: {
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
  Text_I0_668_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2985: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2983: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2984: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2994: {
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2987: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2990: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2988: {
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
  Text_I0_668_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2989: {
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
  Text_I0_668_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2993: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2991: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2992: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3002: {
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
  View_I0_668_0_2995: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_2998: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2996: {
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
  Text_I0_668_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_2997: {
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
  Text_I0_668_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3001: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_2999: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3000: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3010: {
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
  View_I0_668_0_3003: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_3006: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3004: {
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
  Text_I0_668_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3005: {
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
  Text_I0_668_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3009: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3007: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3008: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3018: {
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
  View_I0_668_0_3011: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_3014: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3012: {
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
  Text_I0_668_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3013: {
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
  Text_I0_668_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3017: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3015: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3016: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3026: {
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
  View_I0_668_0_3019: {
    flexGrow: 1,
    width: wp("16%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_668_0_3022: {
    width: wp("16%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3020: {
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
  Text_I0_668_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3021: {
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
  Text_I0_668_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3025: {
    width: wp("16%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_668_0_3023: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3024: {
    flexGrow: 1,
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_668_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_668_0_3040: {
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
  View_I0_668_0_3039: {
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
  View_I0_668_0_3038: {
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
  ImageBackground_I0_668_0_3028: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_668_0_3029: {
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
  ImageBackground_I0_668_0_3030: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I0_668_0_3031: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_668_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_668_0_3033: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  ImageBackground_I0_668_0_3034: {
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
  ImageBackground_I0_668_0_3035: {
    width: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_668_0_3036: {
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
  ImageBackground_I0_668_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_10007_2364: {
    width: wp("61%"),
    height: hp("46%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    resizeMode: "cover"
  },
  View_10014_2084: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_10014_2085: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10014_2086: {
    width: wp("35%"),
    height: hp("91%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2087: {
    width: wp("10%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2087: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2088: {
    width: wp("10%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "flex-start"
  },
  Text_10014_2088: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2093: {
    width: wp("10%"),
    height: hp("11%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_10014_2097: {
    width: wp("46%"),
    height: hp("77%"),
    top: hp("52%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%")
  },
  ImageBackground_10014_2098: {
    width: wp("46%"),
    height: hp("77%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2100: {
    width: wp("42%"),
    height: hp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_10014_2101: {
    width: wp("42%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_10014_2102: {
    width: wp("27%"),
    height: hp("13%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_10014_2103: {
    width: wp("9%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2103: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2104: {
    width: wp("27%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2104: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2105: {
    width: wp("6%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I10014_2105_0_2839: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2105_0_2840: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I10014_2105_0_2841: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I10014_2105_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2105_0_2842: {
    width: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10014_2105_0_2843: {
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
  ImageBackground_10014_2106: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  View_10014_2109: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2110: {
    width: wp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2110: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2111: {
    width: wp("17%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2111: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2112: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2133: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2134: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2134: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2135: {
    width: wp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2135: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2136: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2320: {
    width: wp("42%"),
    height: hp("9%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_10014_2321: {
    width: wp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2321: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10014_2322: {
    width: wp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_10014_2322: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10014_2323: {
    width: wp("42%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_10014_2113: {
    width: wp("26%"),
    height: hp("6%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2113_0_2768: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I10014_2113_0_2769: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I10014_2113_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I10014_2113_0_2772: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10014_2113_0_2770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I10014_2113_0_2771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_10014_2137: {
    width: wp("14%"),
    top: hp("91%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    justifyContent: "flex-start"
  },
  Text_10014_2137: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
