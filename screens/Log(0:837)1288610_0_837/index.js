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
      <View style={styles.View_0_2243}>
        <View style={styles.View_0_2218}>
          <Text style={styles.Text_0_2218}>
            Louise requested your public key.
          </Text>
        </View>
        <View style={styles.View_0_2219}>
          <Text style={styles.Text_0_2219}>Yesterday at 3:31pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfffce6d-4fc6-4dbd-a3c7-60d4ad42a49f"
          }}
          style={styles.ImageBackground_0_2222}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7aeb28f-7d13-4557-ad18-4152b0a392a2"
          }}
          style={styles.ImageBackground_0_2223}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d85126f6-217a-465f-b554-f1dc899f7d36"
          }}
          style={styles.ImageBackground_0_2226}
        />
        <View style={styles.View_0_2242}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a98fba19-bad3-4f5b-b2ff-0f57c166cb6f"
            }}
            style={styles.ImageBackground_0_2227}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7fb87009-4743-47ab-99a6-a414b9cf45bb"
            }}
            style={styles.ImageBackground_0_2241}
          />
        </View>
      </View>
      <View style={styles.View_0_2274}>
        <View style={styles.View_0_2246}>
          <Text style={styles.Text_0_2246}>
            You shared Adobe Meeting Notes with 5 people
          </Text>
        </View>
        <View style={styles.View_0_2247}>
          <Text style={styles.Text_0_2247}>Yesterday at 3:31pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f54e6686-09ae-4a88-88b6-a6804634ed43"
          }}
          style={styles.ImageBackground_0_2250}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/feb6ce60-ccdf-41e1-abbf-dc6e95f33b70"
          }}
          style={styles.ImageBackground_0_2253}
        />
        <View style={styles.View_0_2263}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23495a56-253f-47dd-8d69-70c85bae5170"
            }}
            style={styles.ImageBackground_0_2254}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3fad3ef0-6360-4682-b2d1-8cf371d6fa88"
            }}
            style={styles.ImageBackground_0_2255}
          />
          <View style={styles.View_0_2262}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14e18361-a15b-4442-96b2-f88da4c451ee"
              }}
              style={styles.ImageBackground_0_2258}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dcb3015-a040-4ef3-a15f-087b0f8711d2"
              }}
              style={styles.ImageBackground_0_2261}
            />
          </View>
        </View>
        <View style={styles.View_0_2273}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7b7c402e-7f74-4326-9b2a-efc75438cbe3"
            }}
            style={styles.ImageBackground_0_2266}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7c0304b-58d3-468b-bf6b-16aa048c26a9"
            }}
            style={styles.ImageBackground_0_2269}
          />
          <View style={styles.View_0_2272}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2443aa71-c3a0-49e6-af4c-2c76d80811fa"
              }}
              style={styles.ImageBackground_0_2270}
            />
            <View style={styles.View_0_2271}>
              <Text style={styles.Text_0_2271}>3</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_2299}>
        <View style={styles.View_0_2275}>
          <Text style={styles.Text_0_2275}>
            You shared Lorem Ipsum Spreadsheet 18.xls with Lauren Rochford
          </Text>
        </View>
        <View style={styles.View_0_2276}>
          <Text style={styles.Text_0_2276}>Yesterday at 3:31pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a27fcd6-8742-430c-ad41-bd755cfb5b25"
          }}
          style={styles.ImageBackground_0_2279}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4aa8eb8-8e06-47a4-a400-063ac93c288c"
          }}
          style={styles.ImageBackground_0_2280}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b0490f1c-6d67-479b-8ea4-a651e0cf509b"
          }}
          style={styles.ImageBackground_0_2283}
        />
        <View style={styles.View_0_2295}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfaf8fa6-28db-4391-8b85-0a6ffcea8824"
            }}
            style={styles.ImageBackground_0_2284}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48664ded-5caf-4d40-b161-25519b367b0e"
            }}
            style={styles.ImageBackground_0_2294}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5050ed53-1ee5-4e67-8dcf-c16ce06ef6b6"
          }}
          style={styles.ImageBackground_0_2298}
        />
      </View>
      <View style={styles.View_0_2323}>
        <View style={styles.View_0_2300}>
          <Text style={styles.Text_0_2300}>
            You shared Lorem Ipsum Spreadsheet 18.xls with Lauren Rochford
          </Text>
        </View>
        <View style={styles.View_0_2301}>
          <Text style={styles.Text_0_2301}>Yesterday at 3:31pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/965d3d9c-07a3-45ad-af4c-66868205cb57"
          }}
          style={styles.ImageBackground_0_2304}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28420fad-dbc7-48d6-9d50-e26fc0085558"
          }}
          style={styles.ImageBackground_0_2307}
        />
        <View style={styles.View_0_2319}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00e8456c-c36b-4cad-a624-b79d2207e586"
            }}
            style={styles.ImageBackground_0_2308}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/534f9a2d-8db3-4607-b7c3-940d57a999f7"
            }}
            style={styles.ImageBackground_0_2318}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40ec0ce2-a22b-43b7-8e50-a3d2bddf8238"
          }}
          style={styles.ImageBackground_0_2322}
        />
      </View>
      <View style={styles.View_0_2352}>
        <View style={styles.View_0_2324}>
          <Text style={styles.Text_0_2324}>
            Jeannea wants to share Noraharwhal.midi with you.
          </Text>
        </View>
        <View style={styles.View_0_2325}>
          <Text style={styles.Text_0_2325}>Yesterday at 3:31pm</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e289330a-cbe6-4868-82b4-03776e5df9e2"
          }}
          style={styles.ImageBackground_0_2328}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2483f365-c1ae-41b3-b513-ae21b6a05c40"
          }}
          style={styles.ImageBackground_0_2329}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b065154-32a8-450b-94fe-ade0bd837a16"
          }}
          style={styles.ImageBackground_0_2332}
        />
        <View style={styles.View_0_2348}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4f13fa6-1dcd-4a49-babb-10c517e4b6de"
            }}
            style={styles.ImageBackground_0_2333}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e352e300-e8aa-4b16-a1ce-057c78ea8d28"
            }}
            style={styles.ImageBackground_0_2347}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/140a52c2-5ca3-47ff-8ef7-50e61d2d23ae"
          }}
          style={styles.ImageBackground_0_2351}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e2523f62-5042-4017-809c-f3be1ae1a2bb"
        }}
        style={styles.ImageBackground_0_2353}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bdded05-aa88-4f5c-8f3c-a21bcecd1f75"
        }}
        style={styles.ImageBackground_0_2354}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b86e0f6c-fd0c-4abd-8736-94b52a942281"
        }}
        style={styles.ImageBackground_0_2355}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ddffbbcc-29c3-4b5a-8c4a-87518870f47d"
        }}
        style={styles.ImageBackground_0_2356}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d816047-5892-4df9-b04b-686f8a80b9f6"
        }}
        style={styles.ImageBackground_0_2357}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b20f104-5110-440f-8431-577625eefc12"
        }}
        style={styles.ImageBackground_0_2358}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1d14ce7d-ef48-472e-bd0b-85e85838ee33"
        }}
        style={styles.ImageBackground_0_2359}
      />
      <View style={styles.View_0_2360}>
        <Text style={styles.Text_0_2360}>Accept</Text>
      </View>
      <View style={styles.View_0_2361}>
        <Text style={styles.Text_0_2361}>Not now</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46db4b3-7f69-474b-932b-266a04a2948b"
        }}
        style={styles.ImageBackground_0_2364}
      />
      <View style={styles.View_0_2367}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dee89bdb-001b-47cc-8260-55e97668d419"
          }}
          style={styles.ImageBackground_0_2365}
        />
        <View style={styles.View_0_2366}>
          <Text style={styles.Text_0_2366}>This Week</Text>
        </View>
      </View>
      <View style={styles.View_0_2376}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eaaaad96-ddf5-4fa4-b43d-963da962759c"
          }}
          style={styles.ImageBackground_0_2368}
        />
        <View style={styles.View_0_2369}>
          <View source={{ uri: "null" }} style={styles.View_I0_2369_0_2850} />
          <View style={styles.View_I0_2369_0_2853}>
            <View style={styles.View_I0_2369_0_2851}>
              <Text style={styles.Text_I0_2369_0_2851}>Private</Text>
            </View>
            <View style={styles.View_I0_2369_0_2852}>
              <Text style={styles.Text_I0_2369_0_2852}>Private</Text>
            </View>
          </View>
          <View style={styles.View_I0_2369_0_2856}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d2619dc1-90d2-48c1-b45b-5c914b105880"
              }}
              style={styles.ImageBackground_I0_2369_0_2854}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a634a580-7f2e-478b-aeec-f85fc1d433ea"
              }}
              style={styles.ImageBackground_I0_2369_0_2855}
            />
          </View>
        </View>
        <View style={styles.View_0_2372}>
          <View source={{ uri: "null" }} style={styles.View_I0_2372_0_2857} />
          <View style={styles.View_I0_2372_0_2858}>
            <Text style={styles.Text_I0_2372_0_2858}>Shared</Text>
          </View>
          <View style={styles.View_I0_2372_0_2866}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62e79de0-b234-48d0-a254-93682e97378c"
              }}
              style={styles.ImageBackground_I0_2372_0_2859}
            />
            <View style={styles.View_I0_2372_0_2862}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ca48489-a143-49cc-9471-ca863de5b80a"
                }}
                style={styles.ImageBackground_I0_2372_0_2860}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b50173d8-07ee-4c27-a772-8b88bd13b94b"
                }}
                style={styles.ImageBackground_I0_2372_0_2861}
              />
            </View>
            <View style={styles.View_I0_2372_0_2865}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be4da5f1-8a17-461e-b9bd-45d46ae0976c"
                }}
                style={styles.ImageBackground_I0_2372_0_2863}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1639034a-22b6-421a-8bb5-52cca1e853a3"
                }}
                style={styles.ImageBackground_I0_2372_0_2864}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_2375}>
          <View source={{ uri: "null" }} style={styles.View_I0_2375_0_2867} />
          <View style={styles.View_I0_2375_0_2868}>
            <Text style={styles.Text_I0_2375_0_2868}>Log</Text>
          </View>
          <View style={styles.View_I0_2375_0_2871}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f6f3b05-97c8-459c-b024-99decb775f5e"
              }}
              style={styles.ImageBackground_I0_2375_0_2869}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a145fcbe-738f-4897-a95a-eeda798fce52"
              }}
              style={styles.ImageBackground_I0_2375_0_2870}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_2391}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fbe0c09c-5078-4465-9f62-b257d7b8eeba"
          }}
          style={styles.ImageBackground_0_2377}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd77848-8e25-496a-bbab-43639f3c70cd"
          }}
          style={styles.ImageBackground_0_2381}
        />
        <TouchableOpacity
          style={styles.TouchableOpacity_0_2385}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_857"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9cfe8f2-2b2f-42e7-a3e2-8dc5b0a78a2c"
            }}
            style={styles.ImageBackground_0_2382}
          />
          <View style={styles.View_0_2383}>
            <Text style={styles.Text_0_2383}>Search your log</Text>
          </View>
          <View style={styles.View_0_2384}>
            <View style={styles.View_I0_2384_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c8bde1a0-fad4-4dc8-be42-3d107f2335a2"
                }}
                style={styles.ImageBackground_I0_2384_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f42ffd8f-b0d6-475b-915e-d82835335a6e"
                }}
                style={styles.ImageBackground_I0_2384_0_2776}
              />
            </View>
          </View>
        </TouchableOpacity>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e0d22641-f4cf-47d0-a16a-3033613e711d"
          }}
          style={styles.ImageBackground_0_2387}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/407b1183-9377-4246-91fd-c222a7462a3d"
          }}
          style={styles.ImageBackground_0_2390}
        />
      </View>
      <View style={styles.View_0_2392}>
        <View source={{ uri: "null" }} style={styles.View_I0_2392_0_3062} />
        <View style={styles.View_I0_2392_0_3082}>
          <View style={styles.View_I0_2392_0_3076}>
            <View style={styles.View_I0_2392_0_3067}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_2392_0_3063}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/306f75f7-239c-4e7d-99cc-05044b23a085"
                }}
                style={styles.ImageBackground_I0_2392_0_3066}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f57e40d7-416a-4b28-b90e-f79f495c644a"
                }}
                style={styles.ImageBackground_I0_2392_0_3065}
              />
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc77c798-7adf-46f5-ac5f-7bfc27eb7676"
              }}
              style={styles.ImageBackground_I0_2392_0_3071}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/252fe55b-eff0-4d92-9e22-6e0e28316a30"
              }}
              style={styles.ImageBackground_I0_2392_0_3075}
            />
          </View>
          <View style={styles.View_I0_2392_0_3077}>
            <Text style={styles.Text_I0_2392_0_3077}>100%</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1406321-a657-42ca-acf8-62af56b19793"
            }}
            style={styles.ImageBackground_I0_2392_0_3081}
          />
        </View>
        <View style={styles.View_I0_2392_0_3083}>
          <Text style={styles.Text_I0_2392_0_3083}>4:19 AM</Text>
        </View>
        <View style={styles.View_I0_2392_0_3093}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d905cf3-f485-4ae3-8c6a-df3e5df5d013"
            }}
            style={styles.ImageBackground_I0_2392_0_3088}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b33a311e-96a7-48ef-9d5f-e7ca1491aded"
            }}
            style={styles.ImageBackground_I0_2392_0_3092}
          />
        </View>
      </View>
      <View style={styles.View_0_2416}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/748f3ed7-3a98-4a6f-a28b-6029b07da1fb"
          }}
          style={styles.ImageBackground_0_2393}
        />
        <View style={styles.View_0_2394}>
          <Text style={styles.Text_0_2394}>Log</Text>
        </View>
        <View style={styles.View_0_2397}>
          <View source={{ uri: "null" }} style={styles.View_0_2395} />
          <View style={styles.View_0_2396}>
            <Text style={styles.Text_0_2396}>Edit</Text>
          </View>
        </View>
        <View style={styles.View_0_2404}>
          <View source={{ uri: "null" }} style={styles.View_0_2398} />
          <View style={styles.View_0_2403}>
            <View source={{ uri: "null" }} style={styles.View_0_2399} />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35f9dde4-1efd-4750-b480-495a3dee9f8f"
              }}
              style={styles.ImageBackground_0_2402}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2b141135-caf5-4341-9df5-be9cd15b328a"
          }}
          style={styles.ImageBackground_0_2408}
        />
        <View style={styles.View_0_2410}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44c1c6ab-7bb5-48f7-8489-9b01e2e5e85a"
            }}
            style={styles.ImageBackground_I0_2410_0_3138}
          />
          <View style={styles.View_I0_2410_0_2409}>
            <Text style={styles.Text_I0_2410_0_2409}>Search your log</Text>
          </View>
          <View style={styles.View_I0_2410_0_3139}>
            <View style={styles.View_I0_2410_0_3139_0_2777}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/01830512-feb3-4111-b27e-e34eb0acc05e"
                }}
                style={styles.ImageBackground_I0_2410_0_3139_0_2775}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/205afcb0-6967-476c-a1eb-871ce90ca917"
                }}
                style={styles.ImageBackground_I0_2410_0_3139_0_2776}
              />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4f74d433-5f29-4701-89b6-429e738bdbdc"
          }}
          style={styles.ImageBackground_0_2415}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("123%") },
  View_0_2243: {
    width: wp("58%"),
    height: hp("11%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2218: {
    width: wp("58%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2218: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2219: {
    width: wp("31%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2219: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2222: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2223: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2226: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_0_2242: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2227: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2241: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2274: {
    width: wp("84%"),
    height: hp("10%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2246: {
    width: wp("84%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2246: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2247: {
    width: wp("31%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2247: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2250: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2253: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_0_2263: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2254: {
    width: wp("8%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2255: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_2262: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_0_2258: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2261: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_2273: {
    width: wp("18%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  ImageBackground_0_2266: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2269: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_2272: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_0_2270: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2271: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    justifyContent: "flex-start"
  },
  Text_0_2271: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2299: {
    width: wp("78%"),
    height: hp("14%"),
    top: hp("46%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2275: {
    width: wp("78%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2275: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2276: {
    width: wp("31%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2276: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2279: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2280: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2283: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_0_2295: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2284: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2294: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_2298: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_0_2323: {
    width: wp("78%"),
    height: hp("14%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2300: {
    width: wp("78%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2300: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2301: {
    width: wp("31%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2301: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2304: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2307: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_0_2319: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2308: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2318: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_2322: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_0_2352: {
    width: wp("90%"),
    height: hp("11%"),
    top: hp("63%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2324: {
    width: wp("90%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_2324: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2325: {
    width: wp("31%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2325: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2328: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2329: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2332: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_0_2348: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_2333: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2347: {
    width: wp("6%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2351: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2353: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_2354: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_2355: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_2356: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("114%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_2357: {
    width: wp("95%"),
    height: hp("0%"),
    top: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_2358: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_2359: {
    width: wp("24%"),
    height: hp("4%"),
    top: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_0_2360: {
    width: wp("12%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    justifyContent: "flex-start"
  },
  Text_0_2360: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2361: {
    width: wp("15%"),
    top: hp("76%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_0_2361: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_2364: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_2367: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20%")
  },
  ImageBackground_0_2365: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2366: {
    width: wp("16%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    justifyContent: "flex-start"
  },
  Text_0_2366: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2376: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2368: {
    width: wp("100%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2369: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2369_0_2850: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2369_0_2853: {
    flexGrow: 1,
    width: wp("13%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2369_0_2851: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2369_0_2851: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2369_0_2852: {
    width: wp("13%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2369_0_2852: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2369_0_2856: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2369_0_2854: {
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
  ImageBackground_I0_2369_0_2855: {
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
  View_0_2372: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2372_0_2857: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2372_0_2858: {
    flexGrow: 1,
    width: wp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_2372_0_2858: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2372_0_2866: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2372_0_2859: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2372_0_2862: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2372_0_2860: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_2372_0_2861: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2372_0_2865: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2372_0_2863: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_2372_0_2864: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_2375: {
    width: wp("33%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("67%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2375_0_2867: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2375_0_2868: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_2375_0_2868: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2375_0_2871: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2375_0_2869: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2375_0_2870: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  View_0_2391: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2377: {
    width: wp("100%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2381: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  TouchableOpacity_0_2385: {
    width: wp("75%"),
    height: hp("5%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_0_2382: {
    width: wp("75%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2383: {
    width: wp("30%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    justifyContent: "flex-start"
  },
  Text_0_2383: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2384: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2384_0_2777: {
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
  ImageBackground_I0_2384_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2384_0_2776: {
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
  ImageBackground_0_2387: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_0_2390: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2392: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2392_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2392_0_3082: {
    flexGrow: 1,
    width: wp("19%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2392_0_3076: {
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
  View_I0_2392_0_3067: {
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
  View_I0_2392_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2392_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2392_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2392_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_2392_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_2392_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2392_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2392_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_2392_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_2392_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2392_0_3093: {
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
  ImageBackground_I0_2392_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2392_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_2416: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2393: {
    width: wp("100%"),
    height: hp("23%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2394: {
    width: wp("14%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_2394: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 27,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2397: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_0_2395: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2396: {
    width: wp("8%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_0_2396: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2404: {
    width: wp("48%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2398: {
    width: wp("48%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2403: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_2399: {
    width: wp("7%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2402: {
    width: wp("7%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_2408: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%")
  },
  View_0_2410: {
    width: wp("83%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2410_0_3138: {
    flexGrow: 1,
    width: wp("83%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2410_0_2409: {
    flexGrow: 1,
    width: wp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_2410_0_2409: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2410_0_3139: {
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
  View_I0_2410_0_3139_0_2777: {
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
  ImageBackground_I0_2410_0_3139_0_2775: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2410_0_3139_0_2776: {
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
  ImageBackground_0_2415: {
    width: wp("9%"),
    height: hp("4%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
