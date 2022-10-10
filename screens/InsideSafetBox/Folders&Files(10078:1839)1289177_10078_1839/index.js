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
      <View style={styles.View_10078_1840}>
        <View style={styles.View_10078_1841}>
          <Text style={styles.Text_10078_1841}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_1842}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96bc33f1-0325-45c1-a581-578cfc9b838f"
          }}
          style={styles.ImageBackground_10078_1844}
        />
        <View style={styles.View_10078_1848}>
          <Text style={styles.Text_10078_1848}>Assets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a1770a7-e555-45e9-a611-ddb225c9dd3c"
          }}
          style={styles.ImageBackground_10078_1850}
        />
      </View>
      <View style={styles.View_10078_2173}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9b59ac7e-ce92-4c99-aeb7-3d270c24170d"
          }}
          style={styles.ImageBackground_10078_2174}
        />
        <View style={styles.View_10078_2178}>
          <Text style={styles.Text_10078_2178}>Componets</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc0467a4-f071-4453-bd0a-7dd8740b23f1"
          }}
          style={styles.ImageBackground_10078_2179}
        />
      </View>
      <View style={styles.View_10078_2209}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7c52ac1-2cd8-42f5-8272-77a363b740a1"
          }}
          style={styles.ImageBackground_10078_2210}
        />
        <View style={styles.View_10078_2214}>
          <Text style={styles.Text_10078_2214}>styles.css</Text>
        </View>
      </View>
      <View style={styles.View_10078_2245}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a3f5011-0ad7-4c0a-a0e6-a219467d0c97"
          }}
          style={styles.ImageBackground_10078_2246}
        />
        <View style={styles.View_10078_2250}>
          <Text style={styles.Text_10078_2250}>favicon.jpg</Text>
        </View>
        <View style={styles.View_10078_2495} />
        <View style={styles.View_10078_2404}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6deeccee-69b3-47e7-bfe4-2882ce8549ab"
            }}
            style={styles.ImageBackground_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6722f08a-cfa4-4b2b-ad95-787a0ad9f347"
            }}
            style={styles.ImageBackground_10078_2408}
          />
        </View>
        <View style={styles.View_10078_2426}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1446b9ad-2acd-420f-a016-01360afb7f25"
            }}
            style={styles.ImageBackground_I10078_2426_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e14d5cfd-d444-4810-a0de-68d22d7e7384"
            }}
            style={styles.ImageBackground_I10078_2426_10078_2408}
          />
        </View>
        <View style={styles.View_10078_2431}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2df8159c-d141-4192-9108-7e35ca4bd090"
            }}
            style={styles.ImageBackground_I10078_2431_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93309564-7e0c-4a5b-bfe6-b72990bcc10f"
            }}
            style={styles.ImageBackground_I10078_2431_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2281}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd401ff4-0b60-4a62-87af-ac189e554824"
          }}
          style={styles.ImageBackground_10078_2282}
        />
        <View style={styles.View_10078_2286}>
          <Text style={styles.Text_10078_2286}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2465}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9993e31-a314-484d-a198-62b10e53d215"
            }}
            style={styles.ImageBackground_I10078_2465_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da098bba-5619-42f0-807a-6799c9a1fcf4"
            }}
            style={styles.ImageBackground_I10078_2465_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2317}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/807fee8d-f322-4d6b-9f24-c3270bc0e88e"
          }}
          style={styles.ImageBackground_10078_2318}
        />
        <View style={styles.View_10078_2322}>
          <Text style={styles.Text_10078_2322}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10081_2163}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/041af03e-c6f1-4b95-b212-44c56b2714c0"
          }}
          style={styles.ImageBackground_10081_2164}
        />
        <View style={styles.View_10081_2168}>
          <Text style={styles.Text_10081_2168}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2146}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cdac501-a8d0-4bb1-ab54-6521dedab9d6"
          }}
          style={styles.ImageBackground_10078_2147}
        />
        <View style={styles.View_10078_2493}>
          <View style={styles.View_10078_2151}>
            <Text style={styles.Text_10078_2151}>Backgrounds</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b3d5189-4f91-4bb9-85ce-4b7c8cfbcf13"
          }}
          style={styles.ImageBackground_10078_2152}
        />
      </View>
      <View style={styles.View_10078_2182}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/568744a7-ce52-4c05-8721-93b29d55c5ea"
          }}
          style={styles.ImageBackground_10078_2183}
        />
        <View style={styles.View_10078_2187}>
          <Text style={styles.Text_10078_2187}>Integrations</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6c67f19-d4de-44a1-85c3-5ff9df0c8343"
          }}
          style={styles.ImageBackground_10078_2188}
        />
      </View>
      <View style={styles.View_10078_2218}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fdb372ee-fbef-4df9-b3eb-8fc52777be35"
          }}
          style={styles.ImageBackground_10078_2219}
        />
        <View style={styles.View_10078_2223}>
          <Text style={styles.Text_10078_2223}>meta-functions.php</Text>
        </View>
      </View>
      <View style={styles.View_10078_2254}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a14a27e-4e6d-45ee-a0ad-ded76496b229"
          }}
          style={styles.ImageBackground_10078_2255}
        />
        <View style={styles.View_10078_2259}>
          <Text style={styles.Text_10078_2259}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2290}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c77e5ad1-8cb8-4f01-8ed9-ad9f0a665fd0"
          }}
          style={styles.ImageBackground_10078_2291}
        />
        <View style={styles.View_10078_2295}>
          <Text style={styles.Text_10078_2295}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2470}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fd821d1d-20e9-4369-96ed-89eb0294e7dd"
            }}
            style={styles.ImageBackground_I10078_2470_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1eeed216-94a1-4e18-b243-72078381a4c5"
            }}
            style={styles.ImageBackground_I10078_2470_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2326}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6aa46ad-5d21-4d1f-935d-48aae34a2a82"
          }}
          style={styles.ImageBackground_10078_2327}
        />
        <View style={styles.View_10078_2331}>
          <Text style={styles.Text_10078_2331}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10081_2169}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ceb646b0-0b4b-48a4-9112-1f0b3b8fe3ae"
          }}
          style={styles.ImageBackground_10081_2170}
        />
        <View style={styles.View_10081_2174}>
          <Text style={styles.Text_10081_2174}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2155}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e50da563-13eb-428c-80ad-7fdb2c44dbe8"
          }}
          style={styles.ImageBackground_10078_2156}
        />
        <View style={styles.View_10078_2160}>
          <Text style={styles.Text_10078_2160}>Templates</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dccdc838-525f-48b7-8f9b-9f70b71515e3"
          }}
          style={styles.ImageBackground_10078_2161}
        />
      </View>
      <View style={styles.View_10078_2191}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df53e698-c58d-4615-b16a-98629a2e7ac8"
          }}
          style={styles.ImageBackground_10078_2192}
        />
        <View style={styles.View_10078_2196}>
          <Text style={styles.Text_10078_2196}>settings.php</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a5ec0ce1-340f-48b6-b2db-52a1b1b4b878"
          }}
          style={styles.ImageBackground_10078_2360}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c939371-5024-4f52-a686-249ed42f821e"
        }}
        style={styles.ImageBackground_10078_2372}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/736e05c9-91db-4c59-8279-3e209b85532d"
        }}
        style={styles.ImageBackground_10078_2436}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba8d538b-c14c-43d9-886c-850be232c740"
        }}
        style={styles.ImageBackground_10081_2175}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2dbfdff2-1961-4855-bf8c-2ef39d64cfa3"
        }}
        style={styles.ImageBackground_10078_2384}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc6f3b27-efd1-4cbb-9d40-72803163ab7e"
        }}
        style={styles.ImageBackground_10078_2437}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1ada00c-a5df-494e-bb0a-5e9d2767fb12"
        }}
        style={styles.ImageBackground_10081_2176}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/267f82c1-1811-459a-aeda-755be7cf1ea1"
        }}
        style={styles.ImageBackground_10078_2378}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/04980e35-18ac-4fb7-8636-b3c6a8d2cee9"
        }}
        style={styles.ImageBackground_10078_2438}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/34c2f7c5-e6ab-4c46-9b16-041dd1578bfc"
        }}
        style={styles.ImageBackground_10081_2177}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74a88225-f7d9-46ef-ab3f-58335f611584"
        }}
        style={styles.ImageBackground_10078_2409}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fe5b81d5-2e73-4a09-b843-73c1616f1b5e"
        }}
        style={styles.ImageBackground_10078_2385}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a324c5cd-4693-4dd5-8e1b-e4d0dd7a1d44"
        }}
        style={styles.ImageBackground_10078_2439}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76ba54f7-fcf4-4013-aad7-ce265234963b"
        }}
        style={styles.ImageBackground_10081_2178}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2a9a88f-7525-4b4a-893d-fefe3d5ed071"
        }}
        style={styles.ImageBackground_10078_2366}
      />
      <View style={styles.View_10078_2227}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40c590ab-148b-4ed4-a593-9cc00198516b"
          }}
          style={styles.ImageBackground_10078_2228}
        />
        <View style={styles.View_10078_2232}>
          <Text style={styles.Text_10078_2232}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2263}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66a2a06d-4d33-4e46-81e0-0a68a14e9691"
          }}
          style={styles.ImageBackground_10078_2264}
        />
        <View style={styles.View_10078_2268}>
          <Text style={styles.Text_10078_2268}>logo.png</Text>
        </View>
      </View>
      <View style={styles.View_10078_2299}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2d79c8a-71dc-4997-b47c-94798faadfb5"
          }}
          style={styles.ImageBackground_10078_2300}
        />
        <View style={styles.View_10078_2304}>
          <Text style={styles.Text_10078_2304}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2475}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/246a6e1c-ec5a-4466-a0ea-76e76366d166"
            }}
            style={styles.ImageBackground_I10078_2475_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17515ce0-bf51-4f27-bfde-a2e5d572a534"
            }}
            style={styles.ImageBackground_I10078_2475_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2335}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7e039636-e031-4df1-a9a9-a7ee6b58a852"
          }}
          style={styles.ImageBackground_10078_2336}
        />
        <View style={styles.View_10078_2340}>
          <Text style={styles.Text_10078_2340}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10081_2179}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82ccd982-6bdc-475f-a1f2-c8ba1813d047"
          }}
          style={styles.ImageBackground_10081_2180}
        />
        <View style={styles.View_10081_2184}>
          <Text style={styles.Text_10081_2184}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2164}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cde45224-c359-423f-9caf-be53c7efaa4a"
          }}
          style={styles.ImageBackground_10078_2165}
        />
        <View style={styles.View_10078_2169}>
          <Text style={styles.Text_10078_2169}>Languages</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d9d29a9-107a-439b-ac5b-178d04aba33b"
          }}
          style={styles.ImageBackground_10078_2170}
        />
      </View>
      <View style={styles.View_10078_2200}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c85f979-9d8c-4c74-b7dd-2c21be633c69"
          }}
          style={styles.ImageBackground_10078_2201}
        />
        <View style={styles.View_10078_2205}>
          <Text style={styles.Text_10078_2205}>functions.js</Text>
        </View>
      </View>
      <View style={styles.View_10078_2236}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bd9400b0-90ca-433a-b8c3-ae8a1ccadf99"
          }}
          style={styles.ImageBackground_10078_2237}
        />
        <View style={styles.View_10078_2241}>
          <Text style={styles.Text_10078_2241}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2272}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/180f5299-649a-4ad0-9fe5-71143759417f"
          }}
          style={styles.ImageBackground_10078_2273}
        />
        <View style={styles.View_10078_2277}>
          <Text style={styles.Text_10078_2277}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10078_2308}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82f46655-3a0f-43ac-8820-3debbd1fc708"
          }}
          style={styles.ImageBackground_10078_2309}
        />
        <View style={styles.View_10078_2313}>
          <Text style={styles.Text_10078_2313}>Mobile Apps</Text>
        </View>
        <View style={styles.View_10078_2488}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efd5b246-93df-405e-87fe-624395a2c895"
            }}
            style={styles.ImageBackground_I10078_2488_10078_2405}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76828803-4049-4a14-9b3e-c8e1d98903a5"
            }}
            style={styles.ImageBackground_I10078_2488_10078_2408}
          />
        </View>
      </View>
      <View style={styles.View_10078_2344}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7ff2ae8-54db-4fde-8a93-c5c4d9fee3e5"
          }}
          style={styles.ImageBackground_10078_2345}
        />
        <View style={styles.View_10078_2349}>
          <Text style={styles.Text_10078_2349}>Mobile Apps</Text>
        </View>
      </View>
      <View style={styles.View_10081_2185}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d198b14f-c1dd-4486-bc85-e731e50fb9a4"
          }}
          style={styles.ImageBackground_10081_2186}
        />
        <View style={styles.View_10081_2190}>
          <Text style={styles.Text_10081_2190}>Mobile Apps</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f65ebe57-7d97-4d0d-bcd9-442f0dc1086e"
        }}
        style={styles.ImageBackground_10078_2139}
      />
      <View style={styles.View_10078_2066}>
        <Text style={styles.Text_10078_2066}>Last Modified</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/979e3f32-608f-4cfd-b706-ff0acc584251"
        }}
        style={styles.ImageBackground_10078_2067}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d1e344-8d65-4ca4-a781-a7e0db509f49"
        }}
        style={styles.ImageBackground_10078_2077}
      />
      <View style={styles.View_10078_2079}>
        <View style={styles.View_10078_2080}>
          <View style={styles.View_10078_2081} />
          <View style={styles.View_10078_2082} />
          <View style={styles.View_10078_2083} />
          <View style={styles.View_10078_2084} />
          <View style={styles.View_10078_2085} />
          <View style={styles.View_10078_2086} />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c828287e-fe1a-4cba-a633-e9935819d06f"
        }}
        style={styles.ImageBackground_10078_2137}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bcf2a916-31a2-4d4a-947a-380e1e61487c"
        }}
        style={styles.ImageBackground_10078_2143}
      />
      <View style={styles.View_10078_2087}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0e8587dd-3b5e-42bf-bbbf-e5a950201d8b"
          }}
          style={styles.ImageBackground_10078_2088}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/db6d288e-d8a7-4ac6-868f-0c8e8297a465"
          }}
          style={styles.ImageBackground_10078_2089}
        />
      </View>
      <View style={styles.View_10078_2130}>
        <View style={styles.View_10078_2132}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/74b1359a-560e-460b-8e9f-593e17b2306b"
            }}
            style={styles.ImageBackground_10078_2133}
          />
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 40, 86, 1)" },
  View_2: { height: hp("187%") },
  View_10078_1840: {
    width: wp("20%"),
    minWidth: wp("20%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("9%")
  },
  View_10078_1841: {
    width: wp("20%"),
    minWidth: wp("20%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_1841: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_1842: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("32%")
  },
  ImageBackground_10078_1844: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_1848: {
    width: wp("4%"),
    minWidth: wp("4%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_1848: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_1850: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2173: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("56%")
  },
  ImageBackground_10078_2174: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2178: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2178: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2179: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2209: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("93%")
  },
  ImageBackground_10078_2210: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2214: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2214: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2245: {
    width: wp("87%"),
    minWidth: wp("87%"),
    height: hp("23%"),
    minHeight: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("102%")
  },
  ImageBackground_10078_2246: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("16%")
  },
  View_10078_2250: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2250: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2495: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10078_2404: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2426: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("54%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2426_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2426_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2431: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2431_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2431_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2281: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("126%")
  },
  ImageBackground_10078_2282: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2286: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2286: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2465: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2465_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2465_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2317: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("164%")
  },
  ImageBackground_10078_2318: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2322: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2322: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2163: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("189%")
  },
  ImageBackground_10081_2164: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2168: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2168: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2146: {
    width: wp("13%"),
    minWidth: wp("13%"),
    height: hp("18%"),
    minHeight: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32%"),
    top: hp("32%")
  },
  ImageBackground_10078_2147: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("15%")
  },
  View_10078_2493: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_10078_2151: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_10078_2151: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2152: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_10078_2182: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("56%")
  },
  ImageBackground_10078_2183: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2187: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2187: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2188: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2218: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("93%")
  },
  ImageBackground_10078_2219: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2223: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2223: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2254: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("117%")
  },
  ImageBackground_10078_2255: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2259: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2259: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2290: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("126%")
  },
  ImageBackground_10078_2291: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2295: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2295: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2470: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2470_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2470_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2326: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("164%")
  },
  ImageBackground_10078_2327: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2331: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2331: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2169: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("189%")
  },
  ImageBackground_10081_2170: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2174: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2174: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2155: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("32%")
  },
  ImageBackground_10078_2156: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2160: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2160: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2161: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2191: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("55%")
  },
  ImageBackground_10078_2192: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("16%")
  },
  View_10078_2196: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2196: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2360: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_10078_2372: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_10078_2436: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_10081_2175: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_10078_2384: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_10078_2437: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_10081_2176: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_10078_2378: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_10078_2438: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_10081_2177: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_10078_2409: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("102%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_10078_2385: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("79%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_10078_2439: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("149%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_10081_2178: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  ImageBackground_10078_2366: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("55%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%")
  },
  View_10078_2227: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("93%")
  },
  ImageBackground_10078_2228: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2232: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2232: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2263: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("117%")
  },
  ImageBackground_10078_2264: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2268: {
    width: wp("6%"),
    minWidth: wp("6%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2268: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2299: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("126%")
  },
  ImageBackground_10078_2300: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2304: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2304: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2475: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2475_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2475_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2335: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("164%")
  },
  ImageBackground_10078_2336: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2340: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2340: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2179: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("189%")
  },
  ImageBackground_10081_2180: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2184: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2184: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2164: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("78%"),
    top: hp("32%")
  },
  ImageBackground_10078_2165: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%")
  },
  View_10078_2169: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_10078_2169: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2170: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("12%"),
    minHeight: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2200: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("79%"),
    top: hp("70%")
  },
  ImageBackground_10078_2201: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  View_10078_2205: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2205: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2236: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("93%")
  },
  ImageBackground_10078_2237: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2241: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2241: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2272: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("117%")
  },
  ImageBackground_10078_2273: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2277: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2277: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2308: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("126%")
  },
  ImageBackground_10078_2309: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("16%")
  },
  View_10078_2313: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    justifyContent: "flex-start"
  },
  Text_10078_2313: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10078_2488: {
    width: wp("11%"),
    minWidth: wp("11%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I10078_2488_10078_2405: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I10078_2488_10078_2408: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("4%")
  },
  View_10078_2344: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("164%")
  },
  ImageBackground_10078_2345: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10078_2349: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10078_2349: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_10081_2185: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("77%"),
    top: hp("189%")
  },
  ImageBackground_10081_2186: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("1%")
  },
  View_10081_2190: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_10081_2190: {
    color: "rgba(218, 218, 218, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2139: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("11%")
  },
  View_10078_2066: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_10078_2066: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_10078_2067: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("22%")
  },
  ImageBackground_10078_2077: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("19%")
  },
  View_10078_2079: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("92%"),
    top: hp("22%")
  },
  View_10078_2080: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_10078_2081: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2082: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2083: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2084: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2085: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  View_10078_2086: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    opacity: 0.7799999713897705
  },
  ImageBackground_10078_2137: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%")
  },
  ImageBackground_10078_2143: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    top: hp("24%")
  },
  View_10078_2087: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    top: hp("167%")
  },
  ImageBackground_10078_2088: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_2089: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%")
  },
  View_10078_2130: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("9%")
  },
  View_10078_2132: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_10078_2133: {
    width: wp("4%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
