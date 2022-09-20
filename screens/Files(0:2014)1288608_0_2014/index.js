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
      <View style={styles.View_0_1836}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d981bb55-73d6-409d-9223-e3a9ca833d45"
          }}
          style={styles.ImageBackground_0_1834}
        />
        <View style={styles.View_0_1835}>
          <Text style={styles.Text_0_1835}>A</Text>
        </View>
      </View>
      <View style={styles.View_0_1839}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96aa7097-6089-44eb-9120-d5ba78aea9ed"
          }}
          style={styles.ImageBackground_0_1837}
        />
        <View style={styles.View_0_1838}>
          <Text style={styles.Text_0_1838}>B</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c457f4de-d8bc-449c-8580-e44894d46777"
        }}
        style={styles.ImageBackground_0_1840}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c87e0f1-a1c9-4b24-918a-e80e76672ee7"
        }}
        style={styles.ImageBackground_0_1841}
      />
      <View style={styles.View_0_1842}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/351e88d2-0c1c-4dea-ac83-550d7a9313fc"
          }}
          style={styles.ImageBackground_I0_1842_0_3118}
        />
        <View style={styles.View_I0_1842_0_3132}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/362d2d3c-86e5-4f6a-bcd8-1abd94271a90"
            }}
            style={styles.ImageBackground_I0_1842_0_3119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a8d4024-7f1c-4152-be89-c4b021f87b93"
            }}
            style={styles.ImageBackground_I0_1842_0_3120}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62e3bbc5-3aa3-44c5-b3fb-93cd11c69493"
            }}
            style={styles.ImageBackground_I0_1842_0_3121}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab1f3d69-397d-4b0e-aac9-de31ec6fa937"
            }}
            style={styles.ImageBackground_I0_1842_0_3122}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8b2c20b-0fdb-4f68-a802-95666e08a2ca"
            }}
            style={styles.ImageBackground_I0_1842_0_3123}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1753f50c-3311-4b35-aef1-9314a20e78c6"
            }}
            style={styles.ImageBackground_I0_1842_0_3124}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/953c1b37-0003-45ba-aed8-faf42b780020"
            }}
            style={styles.ImageBackground_I0_1842_0_3125}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf6e2f41-6838-4282-8a18-fbc595bd6ba2"
            }}
            style={styles.ImageBackground_I0_1842_0_3126}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42efed5a-4f9f-4839-a416-f191bb6d11a4"
            }}
            style={styles.ImageBackground_I0_1842_0_3127}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5eb733f-ebe0-4991-b2c0-5a98aa86d68e"
            }}
            style={styles.ImageBackground_I0_1842_0_3128}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68d32670-6220-4d51-9698-b029e036b8bd"
            }}
            style={styles.ImageBackground_I0_1842_0_3129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cbddd3c1-7d20-40aa-94db-e7e5f07bac92"
            }}
            style={styles.ImageBackground_I0_1842_0_3130}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6f87ad3-a5d2-433e-944a-b3b880fbd803"
            }}
            style={styles.ImageBackground_I0_1842_0_3131}
          />
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/098c6b0b-c9eb-475b-8c5c-d7e28c4b31ac"
        }}
        style={styles.ImageBackground_0_1856}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7ab2f8e-7aff-437b-9f9f-c5d6bfe8c14a"
        }}
        style={styles.ImageBackground_0_1870}
      />
      <View style={styles.View_0_1877}>
        <View style={styles.View_0_1871}>
          <Text style={styles.Text_0_1871}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_1872}>
          <Text style={styles.Text_0_1872}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1876}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/489447ce-17cb-4187-b1e6-ff325a26069f"
            }}
            style={styles.ImageBackground_0_1873}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f0c5897d-7a72-4496-98ca-513ef8492172"
            }}
            style={styles.ImageBackground_0_1874}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68bc75d7-a0a5-4242-b4e4-9604cbd2a6b2"
            }}
            style={styles.ImageBackground_0_1875}
          />
        </View>
      </View>
      <View style={styles.View_0_1884}>
        <View style={styles.View_0_1878}>
          <Text style={styles.Text_0_1878}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_1879}>
          <Text style={styles.Text_0_1879}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1883}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7bbb292-a555-4baf-8869-01d8fdf8b2ef"
            }}
            style={styles.ImageBackground_0_1880}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9674eb05-4a6c-4bf1-90a6-d5432c9ddf2e"
            }}
            style={styles.ImageBackground_0_1881}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a864fc-b7e9-424a-a06e-1ae2347d687e"
            }}
            style={styles.ImageBackground_0_1882}
          />
        </View>
      </View>
      <View style={styles.View_0_1891}>
        <View style={styles.View_0_1885}>
          <Text style={styles.Text_0_1885}>Lorem Ipsum Dolor Narwhal.midi</Text>
        </View>
        <View style={styles.View_0_1886}>
          <Text style={styles.Text_0_1886}>
            Music file, 3 min long Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1890}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80c83fab-001c-47a9-84ff-da4e318fe4a5"
            }}
            style={styles.ImageBackground_0_1887}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/130ab5d3-5e44-49e0-b758-eb03c4ae5a0a"
            }}
            style={styles.ImageBackground_0_1888}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f23adfcb-c326-4a74-a6d4-4950c3c17bd5"
            }}
            style={styles.ImageBackground_0_1889}
          />
        </View>
      </View>
      <View style={styles.View_0_1898}>
        <View style={styles.View_0_1892}>
          <Text style={styles.Text_0_1892}>Lorem Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_1893}>
          <Text style={styles.Text_0_1893}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1897}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/39a081ec-deac-438e-9f11-637b9e762c5a"
            }}
            style={styles.ImageBackground_0_1894}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29d0254a-b800-4739-8faa-e2a602b34190"
            }}
            style={styles.ImageBackground_0_1895}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/618210f5-f0cf-4653-97b2-de5dc173bd69"
            }}
            style={styles.ImageBackground_0_1896}
          />
        </View>
      </View>
      <View style={styles.View_0_1905}>
        <View style={styles.View_0_1899}>
          <Text style={styles.Text_0_1899}>Lorem Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_1900}>
          <Text style={styles.Text_0_1900}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1904}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/70776dc8-fd63-4f64-b54a-4769b44e9811"
            }}
            style={styles.ImageBackground_0_1901}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0d4eba8-87e9-495d-88b2-f2fc059606e0"
            }}
            style={styles.ImageBackground_0_1902}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f4bd7c09-e5a8-4b70-9b2c-ed69eee77a63"
            }}
            style={styles.ImageBackground_0_1903}
          />
        </View>
      </View>
      <View style={styles.View_0_1912}>
        <View style={styles.View_0_1906}>
          <Text style={styles.Text_0_1906}>Lorem Ipsum Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_1907}>
          <Text style={styles.Text_0_1907}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1911}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d2f10c5-b4e3-45fd-85b7-b4af6f4b7812"
            }}
            style={styles.ImageBackground_0_1908}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55626f0a-d930-4809-8b6d-414281d47b42"
            }}
            style={styles.ImageBackground_0_1909}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd2441a2-63d4-4ce5-b654-ef83570091df"
            }}
            style={styles.ImageBackground_0_1910}
          />
        </View>
      </View>
      <View style={styles.View_0_1919}>
        <View style={styles.View_0_1913}>
          <Text style={styles.Text_0_1913}>Lorem Ipsum Doc.doc</Text>
        </View>
        <View style={styles.View_0_1914}>
          <Text style={styles.Text_0_1914}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1918}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8ee24e2c-6587-4255-b592-2c9807193988"
            }}
            style={styles.ImageBackground_0_1915}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf341d3e-373d-486c-a0ab-caf3ec17e47e"
            }}
            style={styles.ImageBackground_0_1916}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e135b07-e5cb-4818-b76e-562b3c9d461b"
            }}
            style={styles.ImageBackground_0_1917}
          />
        </View>
      </View>
      <View style={styles.View_0_1926}>
        <View style={styles.View_0_1920}>
          <Text style={styles.Text_0_1920}>Lorem Ipsum Doc.doc</Text>
        </View>
        <View style={styles.View_0_1921}>
          <Text style={styles.Text_0_1921}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1925}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f568b69-58fb-4aa0-8d54-0eeb5119fe7a"
            }}
            style={styles.ImageBackground_0_1922}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2327228d-a844-4890-89c2-6c256f536060"
            }}
            style={styles.ImageBackground_0_1923}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d5172ed-2c5c-4ec2-9361-89e2cfe13da9"
            }}
            style={styles.ImageBackground_0_1924}
          />
        </View>
      </View>
      <View style={styles.View_0_1933}>
        <View style={styles.View_0_1927}>
          <Text style={styles.Text_0_1927}>Lorem Ipsum Doc.pdf</Text>
        </View>
        <View style={styles.View_0_1928}>
          <Text style={styles.Text_0_1928}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1932}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8fbd6a9-ee4c-4593-9266-9ff56505581b"
            }}
            style={styles.ImageBackground_0_1929}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c58758b-5986-4717-bd78-44a63b90c37f"
            }}
            style={styles.ImageBackground_0_1930}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/33c878e4-8189-487d-9487-5e241d933a21"
            }}
            style={styles.ImageBackground_0_1931}
          />
        </View>
      </View>
      <View style={styles.View_0_1940}>
        <View style={styles.View_0_1934}>
          <Text style={styles.Text_0_1934}>Lorem Ipsum Doc.pdf</Text>
        </View>
        <View style={styles.View_0_1935}>
          <Text style={styles.Text_0_1935}>
            Document, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1939}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1efe73bd-bb20-4448-bbc7-d548fafc348e"
            }}
            style={styles.ImageBackground_0_1936}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24cc74bd-e1d2-4a10-a12b-ba6131a3cb72"
            }}
            style={styles.ImageBackground_0_1937}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/738dba1e-4023-4180-b282-f098cd599483"
            }}
            style={styles.ImageBackground_0_1938}
          />
        </View>
      </View>
      <View style={styles.View_0_1947}>
        <View style={styles.View_0_1941}>
          <Text style={styles.Text_0_1941}>IMG_89998.jpeg</Text>
        </View>
        <View style={styles.View_0_1942}>
          <Text style={styles.Text_0_1942}>
            Picture, large file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1946}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98a5fab8-ebd8-4395-ab04-a234a4b1bb3c"
            }}
            style={styles.ImageBackground_0_1943}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0bc1c61b-5c35-4968-a668-8ff79fb51b8b"
            }}
            style={styles.ImageBackground_0_1944}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77487d78-5784-4bd1-b293-d9a16efd22ea"
            }}
            style={styles.ImageBackground_0_1945}
          />
        </View>
      </View>
      <View style={styles.View_0_1954}>
        <View style={styles.View_0_1948}>
          <Text style={styles.Text_0_1948}>IMG_89998.jpeg</Text>
        </View>
        <View style={styles.View_0_1949}>
          <Text style={styles.Text_0_1949}>
            Picture, large file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_1953}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/094c8084-ae4c-49ac-85c3-16a1de0276f5"
            }}
            style={styles.ImageBackground_0_1950}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b19ffe93-9006-4e61-88b6-5285cbcefaa7"
            }}
            style={styles.ImageBackground_0_1951}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12a2c0a7-33b1-41a1-89aa-34e258ca5849"
            }}
            style={styles.ImageBackground_0_1952}
          />
        </View>
      </View>
      <View style={styles.View_0_1955}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/748daadd-0943-442c-bb2b-5fbfb025833a"
          }}
          style={styles.ImageBackground_I0_1955_0_3107}
        />
        <View style={styles.View_I0_1955_0_3117}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb5baff2-4dfa-4dad-a337-9d53b1cdf22d"
            }}
            style={styles.ImageBackground_I0_1955_0_3108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea5c268d-09fa-444d-8fc9-e4e46d4d4e49"
            }}
            style={styles.ImageBackground_I0_1955_0_3109}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f9d18c86-5b58-4cb5-a42a-9cf5202623da"
            }}
            style={styles.ImageBackground_I0_1955_0_3110}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a0167f8-79a0-426c-9854-e22a181d5b21"
            }}
            style={styles.ImageBackground_I0_1955_0_3111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a369e40-5465-442f-befa-07c5e496c159"
            }}
            style={styles.ImageBackground_I0_1955_0_3112}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32795249-ea42-4de7-a089-49fe1ea6ba3a"
            }}
            style={styles.ImageBackground_I0_1955_0_3113}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a71645f-0f11-4ed0-9240-e1f3f0323296"
            }}
            style={styles.ImageBackground_I0_1955_0_3114}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a823bd3-874b-4bd6-b406-f01581671d47"
            }}
            style={styles.ImageBackground_I0_1955_0_3115}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1210ad7-10ff-4c7d-89d1-b7503b4245e4"
            }}
            style={styles.ImageBackground_I0_1955_0_3116}
          />
        </View>
      </View>
      <View style={styles.View_0_1967}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8caf4d74-2396-4df2-a1ee-169a510d31e1"
          }}
          style={styles.ImageBackground_0_1956}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13241010-19f4-4221-aea4-84cdcc543e5c"
          }}
          style={styles.ImageBackground_0_1966}
        />
      </View>
      <View style={styles.View_0_1979}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dbe1ec55-9992-4e0c-889a-15f5acfad32a"
          }}
          style={styles.ImageBackground_0_1968}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9364aa4c-cf09-43d3-88d5-8bd5c57bf015"
          }}
          style={styles.ImageBackground_0_1978}
        />
      </View>
      <View style={styles.View_0_1980}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c6a65070-0750-45a0-a384-8f181aec7ef3"
          }}
          style={styles.ImageBackground_I0_1980_0_3105}
        />
        <View style={styles.View_I0_1980_0_3106}>
          <Text style={styles.Text_I0_1980_0_3106}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_1981}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f6acdffd-2783-4967-921d-7ae9d34f6f62"
          }}
          style={styles.ImageBackground_I0_1981_0_3103}
        />
        <View style={styles.View_I0_1981_0_3104}>
          <Text style={styles.Text_I0_1981_0_3104}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_1982}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/252149d0-5bd5-478d-9fb9-638c899274d2"
          }}
          style={styles.ImageBackground_I0_1982_0_3103}
        />
        <View style={styles.View_I0_1982_0_3104}>
          <Text style={styles.Text_I0_1982_0_3104}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_1983}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3733504-1273-450a-80f3-a18410eaab8b"
          }}
          style={styles.ImageBackground_I0_1983_0_3105}
        />
        <View style={styles.View_I0_1983_0_3106}>
          <Text style={styles.Text_I0_1983_0_3106}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_1984}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4fc56b8-09b3-41fd-875d-1beb3636fe44"
          }}
          style={styles.ImageBackground_I0_1984_0_3100}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b238331e-cf99-48c0-a6ac-ddcb8e55ea4d"
          }}
          style={styles.ImageBackground_I0_1984_0_3101}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bc31455-1adb-452c-bf7f-121d19fa5a01"
          }}
          style={styles.ImageBackground_I0_1984_0_3102}
        />
      </View>
      <View style={styles.View_0_1988}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/987e61c9-13b7-4b08-9c6a-0a82fff765dc"
          }}
          style={styles.ImageBackground_0_1985}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f9c9f13-d46a-48f8-9b76-c75522fbfb68"
          }}
          style={styles.ImageBackground_0_1986}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b105279-2cd5-4001-82cb-9d427c09af8e"
          }}
          style={styles.ImageBackground_0_1987}
        />
      </View>
      <View style={styles.View_0_2013}>
        <View source={{ uri: "null" }} style={styles.View_0_1989} />
        <TouchableOpacity
          style={styles.TouchableOpacity_0_1995}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("0_1997"))
          }
        >
          <View source={{ uri: "null" }} style={styles.View_0_1990} />
          <View style={styles.View_0_1994}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9614d638-1366-4c38-bbb4-d08c6b4451ac"
              }}
              style={styles.ImageBackground_0_1991}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6cd38a46-78cf-4f65-8934-44344628c60a"
              }}
              style={styles.ImageBackground_0_1993}
            />
          </View>
        </TouchableOpacity>
        <View style={styles.View_0_1998}>
          <Text style={styles.Text_0_1998}>Most Recently Updated</Text>
        </View>
        <View style={styles.View_0_2008}>
          <View style={styles.View_0_2007}>
            <View source={{ uri: "null" }} style={styles.View_0_2000} />
            <View style={styles.View_0_2001}>
              <Text style={styles.Text_0_2001}>Back</Text>
            </View>
            <View style={styles.View_0_2006}>
              <View source={{ uri: "null" }} style={styles.View_0_2002} />
              <View style={styles.View_0_2005}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be0b836b-7f52-40b2-afa8-bd8eea05745b"
                  }}
                  style={styles.ImageBackground_0_2004}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_0_2009}>
          <View source={{ uri: "null" }} style={styles.View_I0_2009_0_3062} />
          <View style={styles.View_I0_2009_0_3082}>
            <View style={styles.View_I0_2009_0_3076}>
              <View style={styles.View_I0_2009_0_3067}>
                <View
                  source={{ uri: "null" }}
                  style={styles.View_I0_2009_0_3063}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3a1191b9-ebe5-4e6d-89d5-4a86ab72a985"
                  }}
                  style={styles.ImageBackground_I0_2009_0_3066}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a766dc51-f5e9-49de-adf2-198900633863"
                  }}
                  style={styles.ImageBackground_I0_2009_0_3065}
                />
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bdcd78e4-3c74-4b3c-bdf0-d93410dfafed"
                }}
                style={styles.ImageBackground_I0_2009_0_3071}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d084977-a9ac-48ac-a52e-d1141e67f68d"
                }}
                style={styles.ImageBackground_I0_2009_0_3075}
              />
            </View>
            <View style={styles.View_I0_2009_0_3077}>
              <Text style={styles.Text_I0_2009_0_3077}>100%</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bdcee95-8228-430f-a629-92ba5e7ee690"
              }}
              style={styles.ImageBackground_I0_2009_0_3081}
            />
          </View>
          <View style={styles.View_I0_2009_0_3083}>
            <Text style={styles.Text_I0_2009_0_3083}>4:19 AM</Text>
          </View>
          <View style={styles.View_I0_2009_0_3093}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa383e83-8125-473a-82e6-03b007e57c78"
              }}
              style={styles.ImageBackground_I0_2009_0_3088}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47ca1cf6-1c0b-4781-9f46-2676ab2cc958"
              }}
              style={styles.ImageBackground_I0_2009_0_3092}
            />
          </View>
        </View>
        <View style={styles.View_0_2010}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55a31117-151e-4bb4-920f-2729918893d1"
            }}
            style={styles.ImageBackground_I0_2010_0_2758}
          />
          <View style={styles.View_I0_2010_0_2759}>
            <Text style={styles.Text_I0_2010_0_2759}>Search</Text>
          </View>
          <View style={styles.View_I0_2010_0_2762}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bab8985-ddf4-4638-b14c-4426ca098844"
              }}
              style={styles.ImageBackground_I0_2010_0_2760}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6647e163-9f62-4a96-b926-92b920048281"
              }}
              style={styles.ImageBackground_I0_2010_0_2761}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(244, 242, 240, 1)" },
  View_2: { height: hp("187%") },
  View_0_1836: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28%")
  },
  ImageBackground_0_1834: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1835: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_1835: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1839: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-28%")
  },
  ImageBackground_0_1837: {
    width: wp("45%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1838: {
    width: wp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35%"),
    justifyContent: "flex-start"
  },
  Text_0_1838: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_1840: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("97%")
  },
  ImageBackground_0_1841: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("160%")
  },
  View_0_1842: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1842_0_3118: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1842_0_3132: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1842_0_3119: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3120: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_1842_0_3121: {
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_1842_0_3122: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_1842_0_3123: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3124: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3125: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3126: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3127: {
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3128: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_I0_1842_0_3129: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  ImageBackground_I0_1842_0_3130: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("1%")
  },
  ImageBackground_I0_1842_0_3131: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%")
  },
  ImageBackground_0_1856: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1870: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("163%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_1877: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1871: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1871: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1872: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1872: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1876: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1873: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1874: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1875: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1884: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("97%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1878: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1878: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1879: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1879: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1883: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1880: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1881: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1882: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1891: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("161%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1885: {
    width: wp("65%"),
    minWidth: wp("65%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1885: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1886: {
    width: wp("30%"),
    minWidth: wp("30%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1886: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1890: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1887: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1888: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1889: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1898: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1892: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1892: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1893: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1893: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1897: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1894: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1895: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1896: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1905: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("110%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1899: {
    width: wp("51%"),
    minWidth: wp("51%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1899: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1900: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1900: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1904: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1901: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1902: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1903: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1912: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1906: {
    width: wp("64%"),
    minWidth: wp("64%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1906: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1907: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1907: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1911: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1908: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1909: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1910: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1919: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("54%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1913: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1913: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1914: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1914: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1918: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1915: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1916: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1917: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1926: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1920: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1920: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1921: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1921: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1925: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1922: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1923: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1924: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1933: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1927: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1927: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1928: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1928: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1932: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1929: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1930: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1931: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1940: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1934: {
    width: wp("43%"),
    minWidth: wp("43%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1934: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1935: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1935: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1939: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1936: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1937: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1938: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1947: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1941: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1941: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1942: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1942: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1946: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1943: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1944: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1945: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1954: {
    width: wp("78%"),
    height: hp("7%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_0_1948: {
    width: wp("34%"),
    minWidth: wp("34%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_1948: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1949: {
    width: wp("23%"),
    minWidth: wp("23%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_1949: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1953: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%")
  },
  ImageBackground_0_1950: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1951: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_0_1952: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  View_0_1955: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1955_0_3107: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1955_0_3117: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1955_0_3108: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1955_0_3109: {
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_1955_0_3110: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("0%")
  },
  ImageBackground_I0_1955_0_3111: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1955_0_3112: {
    width: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_1955_0_3113: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  ImageBackground_I0_1955_0_3114: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_1955_0_3115: {
    width: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_1955_0_3116: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("1%")
  },
  View_0_1967: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1956: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1966: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_1979: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1968: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1978: {
    width: wp("7%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_1980: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("53%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1980_0_3105: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1980_0_3106: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_1980_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1981: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("71%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1981_0_3103: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1981_0_3104: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_1981_0_3104: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1982: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("135%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1982_0_3103: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1982_0_3104: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_1982_0_3104: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1983: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1983_0_3105: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_1983_0_3106: {
    flexGrow: 1,
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_1983_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_1984: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_1984_0_3100: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_1984_0_3101: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_I0_1984_0_3102: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%")
  },
  View_0_1988: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("148%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_1985: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_1986: {
    width: wp("11%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1987: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2013: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1989: {
    width: wp("100%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_0_1995: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_0_1990: {
    width: wp("45%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_1994: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36%")
  },
  ImageBackground_0_1991: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_1993: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_1998: {
    width: wp("44%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_0_1998: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2008: {
    width: wp("48%"),
    height: hp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2007: {
    width: wp("48%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2000: {
    width: wp("48%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2001: {
    width: wp("10%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_0_2001: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_2006: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_2002: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2005: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_2004: {
    width: wp("3%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_2009: {
    width: wp("100%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_2009_0_3062: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2009_0_3082: {
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
  View_I0_2009_0_3076: {
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
  View_I0_2009_0_3067: {
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
  View_I0_2009_0_3063: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2009_0_3066: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2009_0_3065: {
    width: wp("6%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2009_0_3071: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_I0_2009_0_3075: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I0_2009_0_3077: {
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_2009_0_3077: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_2009_0_3081: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_2009_0_3083: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_2009_0_3083: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2009_0_3093: {
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
  ImageBackground_I0_2009_0_3088: {
    width: wp("4%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_2009_0_3092: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  View_0_2010: {
    width: wp("91%"),
    height: hp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_2010_0_2758: {
    flexGrow: 1,
    width: wp("91%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_2010_0_2759: {
    flexGrow: 1,
    width: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_2010_0_2759: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_2010_0_2762: {
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
  ImageBackground_I0_2010_0_2760: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_2010_0_2761: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%")
  }
})
const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
