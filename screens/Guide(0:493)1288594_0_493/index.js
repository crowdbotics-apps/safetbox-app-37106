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
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/521bbf7d-5b89-422e-b424-9bf4d383d0d3"
        }}
        style={styles.ImageBackground_0_170}
      />
      <View style={styles.View_0_179}>
        <View style={styles.View_0_171}>
          <Text style={styles.Text_0_171}>Primary Colors</Text>
        </View>
        <View style={styles.View_0_172}>
          <Text style={styles.Text_0_172}>Greys</Text>
        </View>
        <View style={styles.View_0_173}>
          <Text style={styles.Text_0_173}>Colors</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cdad4be8-5376-4e37-9f9e-1f1e7b9e5343"
          }}
          style={styles.ImageBackground_0_174}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0dfa0757-a0cc-411c-872c-3c7b7de485de"
          }}
          style={styles.ImageBackground_0_175}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d6e1f1e5-a5fc-427c-804c-028806d739d4"
          }}
          style={styles.ImageBackground_0_176}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b25e31e3-c4bf-4a4f-a977-a9c31c1b248f"
          }}
          style={styles.ImageBackground_0_177}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02097610-a202-4b46-947a-9b430b37827d"
          }}
          style={styles.ImageBackground_0_178}
        />
      </View>
      <View style={styles.View_0_201}>
        <View style={styles.View_0_182}>
          <View style={styles.View_0_180}>
            <Text style={styles.Text_0_180}>Font</Text>
          </View>
          <View style={styles.View_0_181}>
            <Text style={styles.Text_0_181}>Nimbus Sans</Text>
          </View>
        </View>
        <View style={styles.View_0_189}>
          <View style={styles.View_0_183}>
            <Text style={styles.Text_0_183}>Nimbus Sans Light</Text>
          </View>
          <View style={styles.View_0_184}>
            <Text style={styles.Text_0_184}>Nimbus Sans Regular</Text>
          </View>
          <View style={styles.View_0_185}>
            <Text style={styles.Text_0_185}>Nimbus Sans Bold</Text>
          </View>
          <View style={styles.View_0_186}>
            <Text style={styles.Text_0_186}>Abcde</Text>
          </View>
          <View style={styles.View_0_187}>
            <Text style={styles.Text_0_187}>Abcde</Text>
          </View>
          <View style={styles.View_0_188}>
            <Text style={styles.Text_0_188}>Abcde</Text>
          </View>
        </View>
        <View style={styles.View_0_195}>
          <View style={styles.View_0_190}>
            <Text style={styles.Text_0_190}>Nimbus Sans Font Family</Text>
          </View>
          <View style={styles.View_0_191}>
            <Text style={styles.Text_0_191}>Aa</Text>
          </View>
          <View style={styles.View_0_192}>
            <Text style={styles.Text_0_192}>Aa</Text>
          </View>
          <View style={styles.View_0_193}>
            <Text style={styles.Text_0_193}>Ee</Text>
          </View>
          <View style={styles.View_0_194}>
            <Text style={styles.Text_0_194}>Rr</Text>
          </View>
        </View>
        <View style={styles.View_0_200}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03217d86-9866-43e8-bc62-1d44b988f413"
            }}
            style={styles.ImageBackground_0_196}
          />
          <View style={styles.View_0_197}>
            <Text style={styles.Text_0_197}>
              Uppercase, lowercase and numeric
            </Text>
          </View>
          <View style={styles.View_0_198}>
            <Text style={styles.Text_0_198}>
              ABCDEFGHIJKLMNO PQRSTUVWXYZ abcdefghijklmno pqrstuvwyz 1234567890
            </Text>
          </View>
          <View style={styles.View_0_199}>
            <Text style={styles.Text_0_199}>
              ABCDEFGHIJKLMNO PQRSTUVWXYZ abcdefghijklmno pqrstuvwyz 1234567890
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.View_0_202}>
        <Text style={styles.Text_0_202}>Interface Elements</Text>
      </View>
      <View style={styles.View_0_203}>
        <Text style={styles.Text_0_203}>Folders</Text>
      </View>
      <View style={styles.View_0_204}>
        <Text style={styles.Text_0_204}>Progress Indicator</Text>
      </View>
      <View style={styles.View_0_205}>
        <Text style={styles.Text_0_205}>Iconography</Text>
      </View>
      <View style={styles.View_0_206}>
        <Text style={styles.Text_0_206}>48px</Text>
      </View>
      <View style={styles.View_0_207}>
        <Text style={styles.Text_0_207}>Not started</Text>
      </View>
      <View style={styles.View_0_208}>
        <Text style={styles.Text_0_208}>Private</Text>
      </View>
      <View style={styles.View_0_209}>
        <Text style={styles.Text_0_209}>File Types</Text>
      </View>
      <View style={styles.View_0_210}>
        <Text style={styles.Text_0_210}>Numeric Pads</Text>
      </View>
      <View style={styles.View_0_211}>
        <Text style={styles.Text_0_211}>Search Fields</Text>
      </View>
      <View style={styles.View_0_212}>
        <Text style={styles.Text_0_212}>Button Types</Text>
      </View>
      <View style={styles.View_0_213}>
        <Text style={styles.Text_0_213}>Action Sheet</Text>
      </View>
      <View style={styles.View_0_214}>
        <Text style={styles.Text_0_214}>Controllers</Text>
      </View>
      <View style={styles.View_0_215}>
        <Text style={styles.Text_0_215}>Share sheet</Text>
      </View>
      <View style={styles.View_0_216}>
        <Text style={styles.Text_0_216}>Share sheet, confirmation</Text>
      </View>
      <View style={styles.View_0_217}>
        <Text style={styles.Text_0_217}>Shared</Text>
      </View>
      <View style={styles.View_0_218}>
        <Text style={styles.Text_0_218}>Progressing</Text>
      </View>
      <View style={styles.View_0_219}>
        <Text style={styles.Text_0_219}>Complete</Text>
      </View>
      <View style={styles.View_0_220}>
        <Text style={styles.Text_0_220}>36px</Text>
      </View>
      <View style={styles.View_0_221}>
        <Text style={styles.Text_0_221}>Light tabbar</Text>
      </View>
      <View style={styles.View_0_222}>
        <Text style={styles.Text_0_222}>Alternate Tabbar</Text>
      </View>
      <View style={styles.View_0_223}>
        <Text style={styles.Text_0_223}>Alternate Dark Tabbar</Text>
      </View>
      <View style={styles.View_0_225}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b94f88c6-517e-404d-b93d-ba7428e46e61"
          }}
          style={styles.ImageBackground_I0_225_0_2586}
        />
        <View style={styles.View_I0_225_0_2589}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f5bfaf0-d2e5-4623-b38e-1c91a3f4e5db"
            }}
            style={styles.ImageBackground_I0_225_0_2587}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ae175f11-e862-4d0d-a81f-eeea0a5c9cbf"
            }}
            style={styles.ImageBackground_I0_225_0_2588}
          />
        </View>
      </View>
      <View style={styles.View_0_245}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ef106fd-72bd-4dfa-bc97-99717829c4b7"
          }}
          style={styles.ImageBackground_0_227}
        />
        <View style={styles.View_0_228}>
          <Text style={styles.Text_0_228}>
            Rename Copy Duplicate Move to Folder
          </Text>
        </View>
        <View style={styles.View_0_229}>
          <Text style={styles.Text_0_229}>Delete Folder</Text>
        </View>
        <View style={styles.View_0_230}>
          <Text style={styles.Text_0_230}>Share Secure Copy</Text>
        </View>
        <View style={styles.View_0_241}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4da3283d-f86a-4914-b90c-cf806bdc8490"
            }}
            style={styles.ImageBackground_0_231}
          />
          <View style={styles.View_0_240}>
            <View style={styles.View_0_232}>
              <Text style={styles.Text_0_232}>Folder Name</Text>
            </View>
            <View style={styles.View_0_233}>
              <Text style={styles.Text_0_233}>
                Secure Folder in Private Vault
              </Text>
            </View>
            <View style={styles.View_0_235}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_235_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/73d20b66-de96-434c-861a-eee0742f1512"
                }}
                style={styles.ImageBackground_I0_235_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/734b0248-2c13-47f5-8804-ad2e17fd6e01"
                }}
                style={styles.ImageBackground_I0_235_0_2841}
              />
              <View style={styles.View_I0_235_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/583ea9e0-95d1-4962-9a16-e0739c064611"
                  }}
                  style={styles.ImageBackground_I0_235_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/deff10de-39f4-46fe-83ae-bbe52968c3e4"
                  }}
                  style={styles.ImageBackground_I0_235_0_2843}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/130c01c0-5ef5-4c56-8314-0ac3a65168d1"
              }}
              style={styles.ImageBackground_0_239}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aa0d0523-da8b-4bf6-affb-4ff1dbe7c639"
          }}
          style={styles.ImageBackground_0_242}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c02cf1bb-0b55-46f4-abb1-e74c0a92acf4"
          }}
          style={styles.ImageBackground_0_243}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec79b99a-8d2d-4496-84d2-09f03cce8a3d"
          }}
          style={styles.ImageBackground_0_244}
        />
      </View>
      <View style={styles.View_0_263}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f888eb57-745f-415f-b9c7-b44d247153bd"
          }}
          style={styles.ImageBackground_0_246}
        />
        <View style={styles.View_0_247}>
          <Text style={styles.Text_0_247}>Share with</Text>
        </View>
        <View style={styles.View_0_248}>
          <Text style={styles.Text_0_248}>Email, name or public key</Text>
        </View>
        <View style={styles.View_0_249}>
          <Text style={styles.Text_0_249}>Or</Text>
        </View>
        <View style={styles.View_0_258}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c9089095-e44d-4f70-89f7-01018997f8a2"
            }}
            style={styles.ImageBackground_0_250}
          />
          <View style={styles.View_0_257}>
            <View style={styles.View_0_251}>
              <Text style={styles.Text_0_251}>Folder Name</Text>
            </View>
            <View style={styles.View_0_252}>
              <Text style={styles.Text_0_252}>
                Secure Folder in Private Vault
              </Text>
            </View>
            <View style={styles.View_0_253}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_253_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8da90f91-859d-410d-9bba-d992dd441c56"
                }}
                style={styles.ImageBackground_I0_253_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5895542e-36df-41c8-9329-f7e55a449da6"
                }}
                style={styles.ImageBackground_I0_253_0_2841}
              />
              <View style={styles.View_I0_253_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e189598a-db1a-44a9-bbac-d80790a1ef3a"
                  }}
                  style={styles.ImageBackground_I0_253_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5a381cff-6fd0-4438-83a9-7d2e5c4bd16c"
                  }}
                  style={styles.ImageBackground_I0_253_0_2843}
                />
              </View>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cff2aef-e5f4-447d-a85a-fc9ab68bd47b"
              }}
              style={styles.ImageBackground_0_256}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32aa7c69-664f-48c2-951e-290720c28435"
          }}
          style={styles.ImageBackground_0_259}
        />
        <View style={styles.View_0_261}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5989dd09-237e-4748-80da-27b91cc2edb4"
            }}
            style={styles.ImageBackground_I0_261_0_2768}
          />
          <View style={styles.View_I0_261_0_2769}>
            <Text style={styles.Text_I0_261_0_2769}>Share secure link</Text>
          </View>
          <View style={styles.View_I0_261_0_2772}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82f051ba-d41e-4017-8bef-33a4fc4c6aaa"
              }}
              style={styles.ImageBackground_I0_261_0_2770}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32409f59-65de-4524-85c7-aa8a0e495652"
              }}
              style={styles.ImageBackground_I0_261_0_2771}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_309}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb7d008a-f5f6-41d9-a644-cbf8ee1500ef"
          }}
          style={styles.ImageBackground_0_264}
        />
        <View style={styles.View_0_265}>
          <Text style={styles.Text_0_265}>Share with</Text>
        </View>
        <View style={styles.View_0_266}>
          <Text style={styles.Text_0_266}>Encrypt</Text>
        </View>
        <View style={styles.View_0_267}>
          <Text style={styles.Text_0_267}>Access Level</Text>
        </View>
        <View style={styles.View_0_269}>
          <View style={styles.View_0_268}>
            <Text style={styles.Text_0_268}>Lauren Rochford</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2001b24-97d8-43cb-8d43-1e3676b21bec"
          }}
          style={styles.ImageBackground_0_270}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1d26497-b76b-480f-9f1e-2042a4dda5bb"
          }}
          style={styles.ImageBackground_0_277}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f5d9ec7-9d33-4f3c-a525-dfea26270517"
          }}
          style={styles.ImageBackground_0_278}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9157470e-2ded-46d1-9724-6b95ec729559"
          }}
          style={styles.ImageBackground_0_279}
        />
        <View style={styles.View_0_280}>
          <Text style={styles.Text_0_280}>View Only</Text>
        </View>
        <View style={styles.View_0_285}>
          <View source={{ uri: "null" }} style={styles.View_0_281} />
          <View style={styles.View_0_284}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44ed02b1-7474-448f-b0db-6b1d8cd13461"
              }}
              style={styles.ImageBackground_0_283}
            />
          </View>
        </View>
        <View style={styles.View_0_287}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac55fa9b-17c4-42b6-a93e-4ea160693c13"
            }}
            style={styles.ImageBackground_I0_287_0_2763}
          />
          <View style={styles.View_I0_287_0_2767}>
            <View style={styles.View_I0_287_0_1133}>
              <Text style={styles.Text_I0_287_0_1133}>Share Securely</Text>
            </View>
            <View style={styles.View_I0_287_0_2766}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d015b81e-630c-4109-ae50-57a024ba6e59"
                }}
                style={styles.ImageBackground_I0_287_0_2764}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/edcdf487-b0d9-408e-bc82-b6b824dea90c"
                }}
                style={styles.ImageBackground_I0_287_0_2765}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_290}>
          <View source={{ uri: "null" }} style={styles.View_I0_290_0_2754} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b341ebdd-c049-4ee7-90bb-0e10fb7de8b8"
            }}
            style={styles.ImageBackground_I0_290_0_2755}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fffab39e-7ad5-4d08-856e-27178bd96325"
            }}
            style={styles.ImageBackground_I0_290_0_2757}
          />
        </View>
        <View style={styles.View_0_298}>
          <View style={styles.View_0_297}>
            <View style={styles.View_0_296}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d73622b-35c0-49a1-a2db-d8587f9598d6"
                }}
                style={styles.ImageBackground_0_295}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_308}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8de95994-0356-4aaf-8477-f60f413eebf8"
            }}
            style={styles.ImageBackground_0_299}
          />
          <View style={styles.View_0_302}>
            <View style={styles.View_0_300}>
              <Text style={styles.Text_0_300}>Folder Name</Text>
            </View>
            <View style={styles.View_0_301}>
              <View
                source={{ uri: "null" }}
                style={styles.View_I0_301_0_2839}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d03d383-bf0b-47ce-acce-9f4a47a962ae"
                }}
                style={styles.ImageBackground_I0_301_0_2840}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23af82a9-9c07-4333-9370-790638d49232"
                }}
                style={styles.ImageBackground_I0_301_0_2841}
              />
              <View style={styles.View_I0_301_0_2844}>
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/81ebafbb-d259-4ebf-bf23-eb7ef805d435"
                  }}
                  style={styles.ImageBackground_I0_301_0_2842}
                />
                <ImageBackground
                  source={{
                    uri:
                      "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce27ce39-5422-41d6-b16f-f05b1fc4a2f8"
                  }}
                  style={styles.ImageBackground_I0_301_0_2843}
                />
              </View>
            </View>
          </View>
          <View style={styles.View_0_307}>
            <View source={{ uri: "null" }} style={styles.View_0_303} />
            <View style={styles.View_0_306}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e5c86e2-30e6-4d78-adac-c1da14746d12"
                }}
                style={styles.ImageBackground_0_305}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_310}>
        <Text style={styles.Text_0_310}>Title 1, Nimbus Sans Light 48pt</Text>
      </View>
      <View style={styles.View_0_311}>
        <Text style={styles.Text_0_311}>Title 2, Nimbus Sans Regular 28pt</Text>
      </View>
      <View style={styles.View_0_312}>
        <Text style={styles.Text_0_312}>Title 3, Nimbus Sans Regular 22pt</Text>
      </View>
      <View style={styles.View_0_313}>
        <Text style={styles.Text_0_313}>Title 3, Nimbus Sans Light 22pt</Text>
      </View>
      <View style={styles.View_0_314}>
        <Text style={styles.Text_0_314}>Title 4, Nimbus Sans Regular 20pt</Text>
      </View>
      <View style={styles.View_0_315}>
        <Text style={styles.Text_0_315}>Headline, Nimbus Sans Bold 17pt</Text>
      </View>
      <View style={styles.View_0_316}>
        <Text style={styles.Text_0_316}>Body, Nimbus Sans Regular 17pt</Text>
      </View>
      <View style={styles.View_0_317}>
        <Text style={styles.Text_0_317}>Callout, Nimbus Sans Bold 16pt</Text>
      </View>
      <View style={styles.View_0_318}>
        <Text style={styles.Text_0_318}>Callout, Nimbus Sans Regular 16pt</Text>
      </View>
      <View style={styles.View_0_319}>
        <Text style={styles.Text_0_319}>Subhead, Nimbus Sans Regular 15pt</Text>
      </View>
      <View style={styles.View_0_320}>
        <Text style={styles.Text_0_320}>
          Footnote, Nimbus Sans Regular 13pt
        </Text>
      </View>
      <View style={styles.View_0_321}>
        <Text style={styles.Text_0_321}>Caption, Nimbus Sans Regular 12pt</Text>
      </View>
      <View style={styles.View_0_322}>
        <Text style={styles.Text_0_322}>
          Small Caption, Nimbus Sans Regular 11pt
        </Text>
      </View>
      <View style={styles.View_0_323}>
        <Text style={styles.Text_0_323}>Title 1, Nimbus Sans Regular 48pt</Text>
      </View>
      <View style={styles.View_0_324}>
        <Text style={styles.Text_0_324}>Title 1, Nimbus Sans Regular 48pt</Text>
      </View>
      <View style={styles.View_0_325}>
        <Text style={styles.Text_0_325}>Type Hierarchy</Text>
      </View>
      <View style={styles.View_0_326}>
        <View source={{ uri: "null" }} style={styles.View_I0_326_0_2839} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02713c56-c3c3-4735-8c5a-6e186e2a8f87"
          }}
          style={styles.ImageBackground_I0_326_0_2840}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d46d9e1b-cb40-438d-a5f4-08e3f80f4830"
          }}
          style={styles.ImageBackground_I0_326_0_2841}
        />
        <View style={styles.View_I0_326_0_2844}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5309fe85-3475-4773-b785-f627ddf4059c"
            }}
            style={styles.ImageBackground_I0_326_0_2842}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f6ea5a2-6d93-480d-ab7d-34831355c062"
            }}
            style={styles.ImageBackground_I0_326_0_2843}
          />
        </View>
      </View>
      <View style={styles.View_0_328}>
        <View source={{ uri: "null" }} style={styles.View_I0_328_0_2877} />
        <View style={styles.View_I0_328_0_2878}>
          <Text style={styles.Text_I0_328_0_2878}>Shared</Text>
        </View>
        <View style={styles.View_I0_328_0_2886}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6be3843-62f3-49ce-92af-8a20192c9d3c"
            }}
            style={styles.ImageBackground_I0_328_0_2879}
          />
          <View style={styles.View_I0_328_0_2882}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66a32bb7-683f-41f0-8a21-a871018c360d"
              }}
              style={styles.ImageBackground_I0_328_0_2880}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2955b184-6570-4812-8abc-8b4c372bee55"
              }}
              style={styles.ImageBackground_I0_328_0_2881}
            />
          </View>
          <View style={styles.View_I0_328_0_2885}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d400d92b-837b-4a03-9d21-f1b1fb48bcf2"
              }}
              style={styles.ImageBackground_I0_328_0_2883}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8d7cdeff-b432-4796-8f69-16c346a60474"
              }}
              style={styles.ImageBackground_I0_328_0_2884}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_331}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf4a3bd8-e9cc-40f7-9856-ae5721f188ad"
          }}
          style={styles.ImageBackground_I0_331_0_3041}
        />
        <View style={styles.View_I0_331_0_3042}>
          <Text style={styles.Text_I0_331_0_3042}>Sign up</Text>
        </View>
      </View>
      <View style={styles.View_0_334}>
        <View source={{ uri: "null" }} style={styles.View_I0_334_0_2592} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9dacb49f-1e5e-43cd-b4e0-d3998d59e1b9"
          }}
          style={styles.ImageBackground_I0_334_0_2593}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1a99e6e9-e699-4926-823f-8228058d70a4"
          }}
          style={styles.ImageBackground_I0_334_0_2595}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99cd75d7-1536-4b68-ae49-c10ffb5a7b2b"
        }}
        style={styles.ImageBackground_0_337}
      />
      <View style={styles.View_0_340}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96484d9e-69c5-40ec-9a7a-6b134c45378b"
          }}
          style={styles.ImageBackground_I0_340_0_2435}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/688e545c-b3c2-46c2-badc-0e93b4ddc744"
          }}
          style={styles.ImageBackground_I0_340_0_2436}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8c7cc537-8008-4679-8316-27f12f1a91e8"
        }}
        style={styles.ImageBackground_0_343}
      />
      <View style={styles.View_0_346}>
        <View style={styles.View_I0_346_0_3094}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3418a4d5-53c9-45f1-a1d1-b2bf474b5ded"
            }}
            style={styles.ImageBackground_I0_346_0_3094_0_2701}
          />
          <View style={styles.View_I0_346_0_3094_0_2702}>
            <Text style={styles.Text_I0_346_0_3094_0_2702}>Private</Text>
          </View>
          <View style={styles.View_I0_346_0_3094_0_2705}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2de3ec6c-4313-4c7c-9b6f-e9b07cf03c6e"
              }}
              style={styles.ImageBackground_I0_346_0_3094_0_2703}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/277c760b-f16c-40d5-91e2-1f7804464e54"
              }}
              style={styles.ImageBackground_I0_346_0_3094_0_2704}
            />
          </View>
        </View>
        <View style={styles.View_I0_346_0_3095}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/753e01f7-bbbc-4be4-b69a-1eebb74a8a02"
            }}
            style={styles.ImageBackground_I0_346_0_3095_0_2743}
          />
          <View style={styles.View_I0_346_0_3095_0_2744}>
            <Text style={styles.Text_I0_346_0_3095_0_2744}>Shared</Text>
          </View>
          <View style={styles.View_I0_346_0_3095_0_2752}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8a81f532-d64b-472b-981a-364fd39d6a34"
              }}
              style={styles.ImageBackground_I0_346_0_3095_0_2745}
            />
            <View style={styles.View_I0_346_0_3095_0_2748}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc57d519-8205-4bf6-85ff-ae2b05842c2e"
                }}
                style={styles.ImageBackground_I0_346_0_3095_0_2746}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/54dd35ca-9dd2-4b63-8efc-cb7a145767d0"
                }}
                style={styles.ImageBackground_I0_346_0_3095_0_2747}
              />
            </View>
            <View style={styles.View_I0_346_0_3095_0_2751}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44382149-8d3c-4584-8049-a6806d6396f3"
                }}
                style={styles.ImageBackground_I0_346_0_3095_0_2749}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/036c4299-1806-4eb5-b4b3-d975a5387154"
                }}
                style={styles.ImageBackground_I0_346_0_3095_0_2750}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I0_346_0_3096}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d6a9a7f-16f2-4ce6-8915-dbba99da5517"
            }}
            style={styles.ImageBackground_I0_346_0_3096_0_2708}
          />
          <View style={styles.View_I0_346_0_3096_0_2709}>
            <Text style={styles.Text_I0_346_0_3096_0_2709}>Log</Text>
          </View>
          <View style={styles.View_I0_346_0_3096_0_2712}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3f6203e7-adab-4e93-937f-fac54a8199c1"
              }}
              style={styles.ImageBackground_I0_346_0_3096_0_2710}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df88988e-eab9-41fb-b0cd-679927a9e6cc"
              }}
              style={styles.ImageBackground_I0_346_0_3096_0_2711}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_349}>
        <View style={styles.View_I0_349_0_3097}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d094b1fd-dbe1-42fa-936a-c624feda5b58"
            }}
            style={styles.ImageBackground_I0_349_0_3097_0_2715}
          />
          <View style={styles.View_I0_349_0_3097_0_2716}>
            <Text style={styles.Text_I0_349_0_3097_0_2716}>Shared</Text>
          </View>
          <View style={styles.View_I0_349_0_3097_0_2724}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1035493-fe47-45f8-bb1e-d799e655d624"
              }}
              style={styles.ImageBackground_I0_349_0_3097_0_2717}
            />
            <View style={styles.View_I0_349_0_3097_0_2720}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/96f0dc02-fd53-4c4d-9e22-45dccfd5a770"
                }}
                style={styles.ImageBackground_I0_349_0_3097_0_2718}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d43e4f-5f40-4e22-b2b3-cf3b5775ac6a"
                }}
                style={styles.ImageBackground_I0_349_0_3097_0_2719}
              />
            </View>
            <View style={styles.View_I0_349_0_3097_0_2723}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9243947b-31f2-4caa-b701-f92f654a91e8"
                }}
                style={styles.ImageBackground_I0_349_0_3097_0_2721}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/09cb37e2-4714-45be-8e95-f030e4ad36b4"
                }}
                style={styles.ImageBackground_I0_349_0_3097_0_2722}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I0_349_0_3098}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/357f2205-97ba-4c0d-abec-a3ac67979b19"
            }}
            style={styles.ImageBackground_I0_349_0_3098_0_2727}
          />
          <View style={styles.View_I0_349_0_3098_0_2730}>
            <View style={styles.View_I0_349_0_3098_0_2728}>
              <Text style={styles.Text_I0_349_0_3098_0_2728}>Private</Text>
            </View>
            <View style={styles.View_I0_349_0_3098_0_2729}>
              <Text style={styles.Text_I0_349_0_3098_0_2729}>Private</Text>
            </View>
          </View>
          <View style={styles.View_I0_349_0_3098_0_2733}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/62224206-b111-4e7c-b46b-abe86fb1c036"
              }}
              style={styles.ImageBackground_I0_349_0_3098_0_2731}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/43e2d87e-477b-4e2a-b06e-36b4c755be98"
              }}
              style={styles.ImageBackground_I0_349_0_3098_0_2732}
            />
          </View>
        </View>
        <View style={styles.View_I0_349_0_3099}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4adb73ff-d8cb-4cff-8cfb-9d65ef02e6c6"
            }}
            style={styles.ImageBackground_I0_349_0_3099_0_2736}
          />
          <View style={styles.View_I0_349_0_3099_0_2737}>
            <Text style={styles.Text_I0_349_0_3099_0_2737}>Log</Text>
          </View>
          <View style={styles.View_I0_349_0_3099_0_2740}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5ed9178e-76bf-4851-a19e-43ce0080e3bc"
              }}
              style={styles.ImageBackground_I0_349_0_3099_0_2738}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b10ad67-a5ae-458d-890d-169641149187"
              }}
              style={styles.ImageBackground_I0_349_0_3099_0_2739}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_352}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b838ead-b2a0-4b58-b315-20556c9bfd28"
          }}
          style={styles.ImageBackground_I0_352_0_2438}
        />
        <View style={styles.View_I0_352_0_2439}>
          <Text style={styles.Text_I0_352_0_2439}>Private</Text>
        </View>
        <View style={styles.View_I0_352_0_2442}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/668a178c-668c-4441-8334-d80fa261ddfa"
            }}
            style={styles.ImageBackground_I0_352_0_2440}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e731191f-c603-4ed7-bcc6-808a7aa63245"
            }}
            style={styles.ImageBackground_I0_352_0_2441}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5985b328-4866-4b2d-bcb5-ce28ef4226d3"
          }}
          style={styles.ImageBackground_I0_352_0_2443}
        />
        <View style={styles.View_I0_352_0_2444}>
          <Text style={styles.Text_I0_352_0_2444}>Shared</Text>
        </View>
        <View style={styles.View_I0_352_0_2452}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e529a359-96d9-4243-b6a1-2169c8c9ce45"
            }}
            style={styles.ImageBackground_I0_352_0_2445}
          />
          <View style={styles.View_I0_352_0_2448}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6727673b-c66b-4725-b1cf-4946d1501a8b"
              }}
              style={styles.ImageBackground_I0_352_0_2446}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/005a19c4-8541-4c9c-a157-d143fafc3a11"
              }}
              style={styles.ImageBackground_I0_352_0_2447}
            />
          </View>
          <View style={styles.View_I0_352_0_2451}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f7378b2-ab8e-4a81-b48c-827de74debfd"
              }}
              style={styles.ImageBackground_I0_352_0_2449}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3f90212-fbfd-4a9b-9e15-e8c8a5d5b9e0"
              }}
              style={styles.ImageBackground_I0_352_0_2450}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6e997279-f69f-4b4c-8221-7853c2c1ba61"
          }}
          style={styles.ImageBackground_I0_352_0_2453}
        />
        <View style={styles.View_I0_352_0_2454}>
          <Text style={styles.Text_I0_352_0_2454}>Log</Text>
        </View>
        <View style={styles.View_I0_352_0_2457}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/528b96b2-1550-433b-805b-d4b65ff4c0ad"
            }}
            style={styles.ImageBackground_I0_352_0_2455}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fac4d90b-7ecb-4590-8c4f-1a02a5b8ed22"
            }}
            style={styles.ImageBackground_I0_352_0_2456}
          />
        </View>
      </View>
      <View style={styles.View_0_355}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d6cba39-49ad-40c6-b8d4-3d0e53562161"
          }}
          style={styles.ImageBackground_I0_355_0_2458}
        />
        <View style={styles.View_I0_355_0_2459}>
          <Text style={styles.Text_I0_355_0_2459}>Log</Text>
        </View>
        <View style={styles.View_I0_355_0_2462}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d1f9eaf-42d5-4c28-bec0-b2debc81aa8f"
            }}
            style={styles.ImageBackground_I0_355_0_2460}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e8cd94c-51d1-4b82-b165-e7bd1dad7cb5"
            }}
            style={styles.ImageBackground_I0_355_0_2461}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e6b7569-fff9-4b9e-81b0-bea40778acaa"
          }}
          style={styles.ImageBackground_I0_355_0_2463}
        />
        <View style={styles.View_I0_355_0_2466}>
          <View style={styles.View_I0_355_0_2464}>
            <Text style={styles.Text_I0_355_0_2464}>Private</Text>
          </View>
          <View style={styles.View_I0_355_0_2465}>
            <Text style={styles.Text_I0_355_0_2465}>Private</Text>
          </View>
        </View>
        <View style={styles.View_I0_355_0_2469}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e28890b7-3438-48ab-9383-d4a629214a82"
            }}
            style={styles.ImageBackground_I0_355_0_2467}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0ebb060-a756-4a12-88b4-8e545e5a60cb"
            }}
            style={styles.ImageBackground_I0_355_0_2468}
          />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14a2361c-60cb-4a31-8d90-9b0cba73d6f2"
          }}
          style={styles.ImageBackground_I0_355_0_2470}
        />
        <View style={styles.View_I0_355_0_2471}>
          <Text style={styles.Text_I0_355_0_2471}>Shared</Text>
        </View>
        <View style={styles.View_I0_355_0_2479}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1a40561-5278-4547-9443-98469f5e7b8c"
            }}
            style={styles.ImageBackground_I0_355_0_2472}
          />
          <View style={styles.View_I0_355_0_2475}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f8304247-1bd6-4818-8589-cd49ef8320c9"
              }}
              style={styles.ImageBackground_I0_355_0_2473}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cab08fb9-2c9c-4b1b-85e5-c78ff1f2d50c"
              }}
              style={styles.ImageBackground_I0_355_0_2474}
            />
          </View>
          <View style={styles.View_I0_355_0_2478}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d590e7a-dfb7-49b3-aea3-0556e39c562c"
              }}
              style={styles.ImageBackground_I0_355_0_2476}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc7b939c-45a6-48cc-8184-0b31134b1ec5"
              }}
              style={styles.ImageBackground_I0_355_0_2477}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_358}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bf5f083-c7a3-403d-823b-8bfe8944f403"
          }}
          style={styles.ImageBackground_I0_358_0_2481}
        />
        <View style={styles.View_I0_358_0_2494}>
          <View style={styles.View_I0_358_0_2493}>
            <View style={styles.View_I0_358_0_2492}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3cb340b9-b09c-44fb-a839-1a94fe5ed0fd"
                }}
                style={styles.ImageBackground_I0_358_0_2482}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4dda122-e8c4-41a6-88f6-b9f55cd6c502"
                }}
                style={styles.ImageBackground_I0_358_0_2483}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5f0c9c9-8274-495e-a5f7-713dc35d6130"
                }}
                style={styles.ImageBackground_I0_358_0_2484}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c1b11c9-83d3-49c2-b50d-3bbba7ec9b85"
                }}
                style={styles.ImageBackground_I0_358_0_2485}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f483449-501f-4010-9487-e64f775376b5"
                }}
                style={styles.ImageBackground_I0_358_0_2486}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/757404ad-fe76-48d6-8322-218fa81e7177"
                }}
                style={styles.ImageBackground_I0_358_0_2487}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7d5b8bf-577b-4807-9464-62e692d4e7eb"
                }}
                style={styles.ImageBackground_I0_358_0_2488}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dced3926-0dd3-4cbc-ac39-e80ab8ec1255"
                }}
                style={styles.ImageBackground_I0_358_0_2489}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/500a5f4d-df00-4cf8-a5f9-e9b3d6cfbd9d"
                }}
                style={styles.ImageBackground_I0_358_0_2490}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57187120-6d0f-4598-80b7-0841755764dc"
                }}
                style={styles.ImageBackground_I0_358_0_2491}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_361}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/de890a22-d65c-4058-8302-c299bc6e2f33"
          }}
          style={styles.ImageBackground_I0_361_0_2495}
        />
        <View style={styles.View_I0_361_0_2499}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e94bbe5e-8391-48f4-b5aa-fee4b4fd5900"
            }}
            style={styles.ImageBackground_I0_361_0_2496}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ee726be-462e-4450-9b5e-6080c535e68d"
            }}
            style={styles.ImageBackground_I0_361_0_2498}
          />
        </View>
      </View>
      <View style={styles.View_0_364}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c5a8b91-72d1-412f-9804-2eeaac646463"
          }}
          style={styles.ImageBackground_I0_364_0_2500}
        />
        <View style={styles.View_I0_364_0_2503}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1b02dde9-4749-4ba1-998f-1816b5b90046"
            }}
            style={styles.ImageBackground_I0_364_0_2501}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9cdb68f-90c7-4d7e-8bce-ece6e1f6fc81"
            }}
            style={styles.ImageBackground_I0_364_0_2502}
          />
        </View>
      </View>
      <View style={styles.View_0_367}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d95eba00-0bb8-4f95-942f-7fda0658858e"
          }}
          style={styles.ImageBackground_I0_367_0_2504}
        />
        <View style={styles.View_I0_367_0_2508}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/745a5cb7-62c6-4f46-a550-dc5e749bd5d9"
            }}
            style={styles.ImageBackground_I0_367_0_2505}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac504474-012d-47cc-a149-414c7f1eafeb"
            }}
            style={styles.ImageBackground_I0_367_0_2507}
          />
        </View>
      </View>
      <View style={styles.View_0_370}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca38cef8-2f9f-4908-ba29-565fc1ee7383"
          }}
          style={styles.ImageBackground_I0_370_0_2509}
        />
        <View style={styles.View_I0_370_0_2513}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80c158d0-57f7-447d-af0e-feb925503211"
            }}
            style={styles.ImageBackground_I0_370_0_2510}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fc2e592c-6b7b-422f-9c5e-c62a4a5400fc"
            }}
            style={styles.ImageBackground_I0_370_0_2511}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15dfb17d-4a16-49d1-998f-271093c48d12"
            }}
            style={styles.ImageBackground_I0_370_0_2512}
          />
        </View>
      </View>
      <View style={styles.View_0_373}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b39686c7-eb44-4b9b-9126-70af29b9b9e7"
          }}
          style={styles.ImageBackground_I0_373_0_2514}
        />
        <View style={styles.View_I0_373_0_2518}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0a624823-0766-4927-a739-5a26908031cb"
            }}
            style={styles.ImageBackground_I0_373_0_2515}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c8481ba-da3c-41e0-bbe3-cb4df34f9914"
            }}
            style={styles.ImageBackground_I0_373_0_2516}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0312e27c-90e4-48df-b50c-125bfd799925"
            }}
            style={styles.ImageBackground_I0_373_0_2517}
          />
        </View>
      </View>
      <View style={styles.View_0_376}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4563da0b-673a-4bb1-923d-3bd25fe60e1e"
          }}
          style={styles.ImageBackground_I0_376_0_2519}
        />
        <View style={styles.View_I0_376_0_2526}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8681e0fe-e6d1-4f80-9187-98494184e358"
            }}
            style={styles.ImageBackground_I0_376_0_2520}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba5b6095-ec6e-4b80-af15-da0b289d562f"
            }}
            style={styles.ImageBackground_I0_376_0_2521}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/41e10546-2600-45ff-80f0-aefa414b0bfe"
            }}
            style={styles.ImageBackground_I0_376_0_2522}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a3918549-8356-4fe7-a77b-b2d3ad8b7353"
            }}
            style={styles.ImageBackground_I0_376_0_2523}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11fb89fe-66cd-44b2-a9b1-cfe903fff015"
            }}
            style={styles.ImageBackground_I0_376_0_2524}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24dbb5ec-dfb2-43c8-8de8-6eb4dbdf431c"
            }}
            style={styles.ImageBackground_I0_376_0_2525}
          />
        </View>
      </View>
      <View style={styles.View_0_379}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fafa37f0-05d0-4e46-a5be-946c0965fed8"
          }}
          style={styles.ImageBackground_I0_379_0_2527}
        />
        <View style={styles.View_I0_379_0_2530}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/422720b2-e6f6-4bea-b87b-66c7690a3149"
            }}
            style={styles.ImageBackground_I0_379_0_2528}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d34e2d5b-b536-44b2-85cd-01123460f8a9"
            }}
            style={styles.ImageBackground_I0_379_0_2529}
          />
        </View>
      </View>
      <View style={styles.View_0_382}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ac5d957-58b8-40a7-aae6-108a9630e4d6"
          }}
          style={styles.ImageBackground_I0_382_0_2531}
        />
        <View style={styles.View_I0_382_0_2534}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ed82942e-e197-4b9b-8cc2-77778042d1e5"
            }}
            style={styles.ImageBackground_I0_382_0_2532}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7ca8145-4c71-4712-907a-711777c54706"
            }}
            style={styles.ImageBackground_I0_382_0_2533}
          />
        </View>
      </View>
      <View style={styles.View_0_385}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48980447-c263-4da3-b341-7eb2674ed5d3"
          }}
          style={styles.ImageBackground_I0_385_0_2536}
        />
        <View style={styles.View_I0_385_0_2549}>
          <View style={styles.View_I0_385_0_2548}>
            <View style={styles.View_I0_385_0_2547}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/014feff0-ae3c-423f-afc6-392ffa9dd6e7"
                }}
                style={styles.ImageBackground_I0_385_0_2537}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/470e89d3-2aa5-4ec8-97b0-619468edb169"
                }}
                style={styles.ImageBackground_I0_385_0_2538}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/32607da6-e3e9-4ee5-8012-a9d0f7c3e329"
                }}
                style={styles.ImageBackground_I0_385_0_2539}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b19d0372-33d1-41a9-adda-0f4193a3fa41"
                }}
                style={styles.ImageBackground_I0_385_0_2540}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/48a128de-b13f-421a-872d-bdc192fc29cd"
                }}
                style={styles.ImageBackground_I0_385_0_2541}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e2cf285-30d1-4f8b-8543-a3b4cda94fcb"
                }}
                style={styles.ImageBackground_I0_385_0_2542}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/202506cb-b6bd-41d3-b724-afe3b585c808"
                }}
                style={styles.ImageBackground_I0_385_0_2543}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb91584b-4dbd-425c-9b6f-9b5f89293bba"
                }}
                style={styles.ImageBackground_I0_385_0_2544}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d504e626-5866-4020-8b08-546485c04d3a"
                }}
                style={styles.ImageBackground_I0_385_0_2545}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/44506ca4-0e5f-4fc3-9e4e-df285598cf6c"
                }}
                style={styles.ImageBackground_I0_385_0_2546}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_388}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c679045-2140-4091-9fed-a6cfabb9144f"
          }}
          style={styles.ImageBackground_I0_388_0_2550}
        />
        <View style={styles.View_I0_388_0_2554}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25e78ae1-bc82-4ef0-990a-571905246a5a"
            }}
            style={styles.ImageBackground_I0_388_0_2551}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/957c1725-6dfe-454d-b32b-008a4c8a4cc2"
            }}
            style={styles.ImageBackground_I0_388_0_2553}
          />
        </View>
      </View>
      <View style={styles.View_0_391}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cf936b03-2da9-4ca3-8781-854867a9d2ec"
          }}
          style={styles.ImageBackground_I0_391_0_2555}
        />
        <View style={styles.View_I0_391_0_2558}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c422b43a-4074-4518-9cee-7a9d9529909b"
            }}
            style={styles.ImageBackground_I0_391_0_2556}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a78a9e7f-d5d8-4599-af70-b09a3513eb93"
            }}
            style={styles.ImageBackground_I0_391_0_2557}
          />
        </View>
      </View>
      <View style={styles.View_0_394}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a1171aaa-de11-4753-a857-bb499a8dd638"
          }}
          style={styles.ImageBackground_I0_394_0_2559}
        />
        <View style={styles.View_I0_394_0_2563}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/996ad484-c856-49f1-b509-e564e9b633a6"
            }}
            style={styles.ImageBackground_I0_394_0_2560}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/38a8a9a1-76e6-48b4-906e-723d22aa5ecb"
            }}
            style={styles.ImageBackground_I0_394_0_2562}
          />
        </View>
      </View>
      <View style={styles.View_0_397}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/45a17539-6209-4d53-9f28-637586b62f12"
          }}
          style={styles.ImageBackground_I0_397_0_2564}
        />
        <View style={styles.View_I0_397_0_2568}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03ec6043-237c-4a22-a473-dcc82209bdf1"
            }}
            style={styles.ImageBackground_I0_397_0_2565}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0de9d1e6-2b27-4f06-b37c-6a135fe5aeef"
            }}
            style={styles.ImageBackground_I0_397_0_2566}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b7fe1490-c9a7-4080-b095-54d2751e68b2"
            }}
            style={styles.ImageBackground_I0_397_0_2567}
          />
        </View>
      </View>
      <View style={styles.View_0_400}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c62f58b2-f111-4c90-a339-1a05c8301fa0"
          }}
          style={styles.ImageBackground_I0_400_0_2569}
        />
        <View style={styles.View_I0_400_0_2573}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e090a28f-7a9f-4c05-a199-fc453423601c"
            }}
            style={styles.ImageBackground_I0_400_0_2570}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc7c4644-8451-42e7-9825-bac806164b93"
            }}
            style={styles.ImageBackground_I0_400_0_2571}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8f47a08-a053-4177-bbe6-811be8ebf1a6"
            }}
            style={styles.ImageBackground_I0_400_0_2572}
          />
        </View>
      </View>
      <View style={styles.View_0_403}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91dd78d3-7ed1-4929-886f-ba9712c5f658"
          }}
          style={styles.ImageBackground_I0_403_0_2574}
        />
        <View style={styles.View_I0_403_0_2581}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1119bde9-b486-4957-a76b-861420e8f3a6"
            }}
            style={styles.ImageBackground_I0_403_0_2575}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82589544-e899-4127-a83b-192c9aa46c0f"
            }}
            style={styles.ImageBackground_I0_403_0_2576}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/857395fd-d3b4-41fa-96f6-f3237079fb94"
            }}
            style={styles.ImageBackground_I0_403_0_2577}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/97371029-8c31-429d-b65e-20f9424c00b0"
            }}
            style={styles.ImageBackground_I0_403_0_2578}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca2d6b35-abaf-49b9-87ae-84516dd7ae7a"
            }}
            style={styles.ImageBackground_I0_403_0_2579}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e4b4977b-ce4d-484f-937b-ad3052da1591"
            }}
            style={styles.ImageBackground_I0_403_0_2580}
          />
        </View>
      </View>
      <View style={styles.View_0_406}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/91d6b0c1-48a9-4f89-9c07-5c8c675b0531"
          }}
          style={styles.ImageBackground_I0_406_0_2582}
        />
        <View style={styles.View_I0_406_0_2585}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/83ac6064-907c-4b30-bac6-952d946470fd"
            }}
            style={styles.ImageBackground_I0_406_0_2583}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba2d0e5d-d2a7-48bb-9e42-0a352830d09a"
            }}
            style={styles.ImageBackground_I0_406_0_2584}
          />
        </View>
      </View>
      <View style={styles.View_0_409}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2245051e-9132-4e67-81a5-f8038bef2fdf"
          }}
          style={styles.ImageBackground_I0_409_0_2590}
        />
        <View style={styles.View_I0_409_0_2591}>
          <Text style={styles.Text_I0_409_0_2591}>Done</Text>
        </View>
      </View>
      <View style={styles.View_0_411}>
        <View source={{ uri: "null" }} style={styles.View_I0_411_0_2754} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/14c80fb8-24f6-4402-a1f7-d99013e4c758"
          }}
          style={styles.ImageBackground_I0_411_0_2755}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2713ea99-0a32-44a3-96b6-670337e0fe1c"
          }}
          style={styles.ImageBackground_I0_411_0_2757}
        />
      </View>
      <View style={styles.View_0_413}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2ba1cfc-a114-487e-9899-6c8c3d8841ff"
          }}
          style={styles.ImageBackground_I0_413_0_2596}
        />
        <View style={styles.View_I0_413_0_2601}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61af0e75-5e1b-469d-b91b-195059fb45c4"
            }}
            style={styles.ImageBackground_I0_413_0_2600}
          />
        </View>
        <View style={styles.View_I0_413_0_2609}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2602} />
          <View style={styles.View_I0_413_0_2605}>
            <View style={styles.View_I0_413_0_2603}>
              <Text style={styles.Text_I0_413_0_2603}> </Text>
            </View>
            <View style={styles.View_I0_413_0_2604}>
              <Text style={styles.Text_I0_413_0_2604}> </Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2608}>
            <View style={styles.View_I0_413_0_2606}>
              <Text style={styles.Text_I0_413_0_2606}>0</Text>
            </View>
            <View style={styles.View_I0_413_0_2607}>
              <Text style={styles.Text_I0_413_0_2607}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2617}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2610} />
          <View style={styles.View_I0_413_0_2613}>
            <View style={styles.View_I0_413_0_2611}>
              <Text style={styles.Text_I0_413_0_2611}>WXYZ</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cfa208e7-04b1-4165-848f-753115981b78"
              }}
              style={styles.ImageBackground_I0_413_0_2612}
            />
          </View>
          <View style={styles.View_I0_413_0_2616}>
            <View style={styles.View_I0_413_0_2614}>
              <Text style={styles.Text_I0_413_0_2614}>9</Text>
            </View>
            <View style={styles.View_I0_413_0_2615}>
              <Text style={styles.Text_I0_413_0_2615}>9</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2622}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2618} />
          <View style={styles.View_I0_413_0_2621}>
            <View style={styles.View_I0_413_0_2619}>
              <Text style={styles.Text_I0_413_0_2619}>8</Text>
            </View>
            <View style={styles.View_I0_413_0_2620}>
              <Text style={styles.Text_I0_413_0_2620}>8</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2630}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2623} />
          <View style={styles.View_I0_413_0_2626}>
            <View style={styles.View_I0_413_0_2624}>
              <Text style={styles.Text_I0_413_0_2624}>PGRS</Text>
            </View>
            <View style={styles.View_I0_413_0_2625}>
              <Text style={styles.Text_I0_413_0_2625}>PGRS</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2629}>
            <View style={styles.View_I0_413_0_2627}>
              <Text style={styles.Text_I0_413_0_2627}>7</Text>
            </View>
            <View style={styles.View_I0_413_0_2628}>
              <Text style={styles.Text_I0_413_0_2628}>7</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2635}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2631} />
          <View style={styles.View_I0_413_0_2634}>
            <View style={styles.View_I0_413_0_2632}>
              <Text style={styles.Text_I0_413_0_2632}>PGRS</Text>
            </View>
            <View style={styles.View_I0_413_0_2633}>
              <Text style={styles.Text_I0_413_0_2633}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2643}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2636} />
          <View style={styles.View_I0_413_0_2639}>
            <View style={styles.View_I0_413_0_2637}>
              <Text style={styles.Text_I0_413_0_2637}>MNO</Text>
            </View>
            <View style={styles.View_I0_413_0_2638}>
              <Text style={styles.Text_I0_413_0_2638}>MNO</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2642}>
            <View style={styles.View_I0_413_0_2640}>
              <Text style={styles.Text_I0_413_0_2640}>6</Text>
            </View>
            <View style={styles.View_I0_413_0_2641}>
              <Text style={styles.Text_I0_413_0_2641}>6</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2651}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2644} />
          <View style={styles.View_I0_413_0_2647}>
            <View style={styles.View_I0_413_0_2645}>
              <Text style={styles.Text_I0_413_0_2645}>JKL</Text>
            </View>
            <View style={styles.View_I0_413_0_2646}>
              <Text style={styles.Text_I0_413_0_2646}>JKL</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2650}>
            <View style={styles.View_I0_413_0_2648}>
              <Text style={styles.Text_I0_413_0_2648}>5</Text>
            </View>
            <View style={styles.View_I0_413_0_2649}>
              <Text style={styles.Text_I0_413_0_2649}>5</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2659}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2652} />
          <View style={styles.View_I0_413_0_2655}>
            <View style={styles.View_I0_413_0_2653}>
              <Text style={styles.Text_I0_413_0_2653}>GHI</Text>
            </View>
            <View style={styles.View_I0_413_0_2654}>
              <Text style={styles.Text_I0_413_0_2654}>GHI</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2658}>
            <View style={styles.View_I0_413_0_2656}>
              <Text style={styles.Text_I0_413_0_2656}>4</Text>
            </View>
            <View style={styles.View_I0_413_0_2657}>
              <Text style={styles.Text_I0_413_0_2657}>4</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2667}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2660} />
          <View style={styles.View_I0_413_0_2663}>
            <View style={styles.View_I0_413_0_2661}>
              <Text style={styles.Text_I0_413_0_2661}>DEF</Text>
            </View>
            <View style={styles.View_I0_413_0_2662}>
              <Text style={styles.Text_I0_413_0_2662}>DEF</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2666}>
            <View style={styles.View_I0_413_0_2664}>
              <Text style={styles.Text_I0_413_0_2664}>3</Text>
            </View>
            <View style={styles.View_I0_413_0_2665}>
              <Text style={styles.Text_I0_413_0_2665}>3</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2675}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2668} />
          <View style={styles.View_I0_413_0_2671}>
            <View style={styles.View_I0_413_0_2669}>
              <Text style={styles.Text_I0_413_0_2669}>ABC</Text>
            </View>
            <View style={styles.View_I0_413_0_2670}>
              <Text style={styles.Text_I0_413_0_2670}>ABC</Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2674}>
            <View style={styles.View_I0_413_0_2672}>
              <Text style={styles.Text_I0_413_0_2672}>2</Text>
            </View>
            <View style={styles.View_I0_413_0_2673}>
              <Text style={styles.Text_I0_413_0_2673}>2</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2683}>
          <View source={{ uri: "null" }} style={styles.View_I0_413_0_2676} />
          <View style={styles.View_I0_413_0_2679}>
            <View style={styles.View_I0_413_0_2677}>
              <Text style={styles.Text_I0_413_0_2677}> </Text>
            </View>
            <View style={styles.View_I0_413_0_2678}>
              <Text style={styles.Text_I0_413_0_2678}> </Text>
            </View>
          </View>
          <View style={styles.View_I0_413_0_2682}>
            <View style={styles.View_I0_413_0_2680}>
              <Text style={styles.Text_I0_413_0_2680}>1</Text>
            </View>
            <View style={styles.View_I0_413_0_2681}>
              <Text style={styles.Text_I0_413_0_2681}>1</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_413_0_2696}>
          <View style={styles.View_I0_413_0_2695}>
            <View style={styles.View_I0_413_0_2694}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ab06463-8010-4fa6-b821-ff57c40d3248"
                }}
                style={styles.ImageBackground_I0_413_0_2684}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b17dec8b-4d11-407d-8e18-365df9e53560"
                }}
                style={styles.ImageBackground_I0_413_0_2685}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8ab1787-833d-4c2a-965f-ccd74f1dbd0b"
                }}
                style={styles.ImageBackground_I0_413_0_2686}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/85a8407a-4421-487f-beac-3b5bd52aded6"
                }}
                style={styles.ImageBackground_I0_413_0_2687}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66b00bc7-5166-4730-906a-da3292840fac"
                }}
                style={styles.ImageBackground_I0_413_0_2688}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa8aac6b-7882-4100-b4e1-7839d1e49abb"
                }}
                style={styles.ImageBackground_I0_413_0_2689}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e24a4f6-eccb-4e42-bce9-e187fc3e56a6"
                }}
                style={styles.ImageBackground_I0_413_0_2690}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efb7181a-6025-4765-ad53-982945db38ac"
                }}
                style={styles.ImageBackground_I0_413_0_2691}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/99207956-c789-49ea-b2a5-2504d46e01e1"
                }}
                style={styles.ImageBackground_I0_413_0_2692}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0408aedc-cc5d-4d0c-b153-e16e035cd745"
                }}
                style={styles.ImageBackground_I0_413_0_2693}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_416}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77d6e245-3896-4efe-9f2c-6afcca4aa910"
          }}
          style={styles.ImageBackground_I0_416_0_2758}
        />
        <View style={styles.View_I0_416_0_2759}>
          <Text style={styles.Text_I0_416_0_2759}>Search</Text>
        </View>
        <View style={styles.View_I0_416_0_2762}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1e247d2f-9121-4bc1-98f0-6c3f1c4a75b4"
            }}
            style={styles.ImageBackground_I0_416_0_2760}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6601ec-2711-41d7-8fb9-726b12d48d43"
            }}
            style={styles.ImageBackground_I0_416_0_2761}
          />
        </View>
      </View>
      <View style={styles.View_0_418}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bab99868-4128-41eb-bb2a-27a117cfe4ba"
          }}
          style={styles.ImageBackground_I0_418_0_2763}
        />
        <View style={styles.View_I0_418_0_2767}>
          <View style={styles.View_I0_418_0_1133}>
            <Text style={styles.Text_I0_418_0_1133}>Share Securely</Text>
          </View>
          <View style={styles.View_I0_418_0_2766}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f26e14e6-b4a5-4fdb-aa7f-9e812cbc4f18"
              }}
              style={styles.ImageBackground_I0_418_0_2764}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71e55efd-7faa-4622-b177-55d2fc244b78"
              }}
              style={styles.ImageBackground_I0_418_0_2765}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_420}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7d0b476f-cb61-4f47-92e9-ec01ac453b75"
          }}
          style={styles.ImageBackground_I0_420_0_2773}
        />
        <View style={styles.View_I0_420_0_2774}>
          <Text style={styles.Text_I0_420_0_2774}>Use Passcode</Text>
        </View>
      </View>
      <View style={styles.View_0_422}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d1c49c11-c63c-4395-9a27-9aae662e4d07"
          }}
          style={styles.ImageBackground_I0_422_0_2768}
        />
        <View style={styles.View_I0_422_0_2769}>
          <Text style={styles.Text_I0_422_0_2769}>Share secure link</Text>
        </View>
        <View style={styles.View_I0_422_0_2772}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c37d6b19-86d3-4d3c-b4ed-9fbaeac3b042"
            }}
            style={styles.ImageBackground_I0_422_0_2770}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9bdb89d2-bf25-4f94-9f95-fcf6cd3c8f98"
            }}
            style={styles.ImageBackground_I0_422_0_2771}
          />
        </View>
      </View>
      <View style={styles.View_0_424}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f352fa4d-8208-40fb-851c-d36867d3237d"
          }}
          style={styles.ImageBackground_I0_424_0_3100}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ec309e3a-4c3e-49b4-bd35-f5e4f532507c"
          }}
          style={styles.ImageBackground_I0_424_0_3101}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c6b9369-1483-46ec-8540-a4733217a974"
          }}
          style={styles.ImageBackground_I0_424_0_3102}
        />
      </View>
      <View style={styles.View_0_427}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/80719d4d-782f-424e-b7a0-213ec67ad5a5"
          }}
          style={styles.ImageBackground_I0_427_0_3103}
        />
        <View style={styles.View_I0_427_0_3104}>
          <Text style={styles.Text_I0_427_0_3104}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_430}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4e06906e-0cfa-4c3e-9901-53a9c198b9ca"
          }}
          style={styles.ImageBackground_I0_430_0_3105}
        />
        <View style={styles.View_I0_430_0_3106}>
          <Text style={styles.Text_I0_430_0_3106}>Aa</Text>
        </View>
      </View>
      <View style={styles.View_0_433}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/56664ba8-3bff-496d-9806-3a188672d4a1"
          }}
          style={styles.ImageBackground_I0_433_0_3107}
        />
        <View style={styles.View_I0_433_0_3117}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b8b83265-ea67-491c-8fd9-84c8e66e0db0"
            }}
            style={styles.ImageBackground_I0_433_0_3108}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1f557b1e-9cf4-44d0-a81b-e41d3324834b"
            }}
            style={styles.ImageBackground_I0_433_0_3109}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/98bffbba-09a5-4eb9-b293-4f8af1ee6c16"
            }}
            style={styles.ImageBackground_I0_433_0_3110}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6230cae2-7e0f-4d29-892c-3329641f4361"
            }}
            style={styles.ImageBackground_I0_433_0_3111}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5096bd6f-405f-4ed9-9b2e-300b41159647"
            }}
            style={styles.ImageBackground_I0_433_0_3112}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65b7b03a-90eb-4e2d-9f0c-a6669dcf334b"
            }}
            style={styles.ImageBackground_I0_433_0_3113}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/df2d8cdc-2080-4012-8280-3df3a3d368c6"
            }}
            style={styles.ImageBackground_I0_433_0_3114}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9f3136ea-43da-4d60-867c-78417c6d5170"
            }}
            style={styles.ImageBackground_I0_433_0_3115}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d35ab36e-be6a-4743-b963-eb94ccdab825"
            }}
            style={styles.ImageBackground_I0_433_0_3116}
          />
        </View>
      </View>
      <View style={styles.View_0_436}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3e0067cb-e27c-42fa-9e41-84831b2615a0"
          }}
          style={styles.ImageBackground_I0_436_0_3118}
        />
        <View style={styles.View_I0_436_0_3132}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d5916af5-11f1-4660-802a-f2d094a079bc"
            }}
            style={styles.ImageBackground_I0_436_0_3119}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42ededae-0bc4-485c-955e-0a2ecdb41dbc"
            }}
            style={styles.ImageBackground_I0_436_0_3120}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8edaee8a-6fb6-4f5f-b37e-658ca7573146"
            }}
            style={styles.ImageBackground_I0_436_0_3121}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94631c86-c9a9-4c05-9b03-206cb6e840b8"
            }}
            style={styles.ImageBackground_I0_436_0_3122}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c28aae5e-72fe-4577-a42a-318818d00bb7"
            }}
            style={styles.ImageBackground_I0_436_0_3123}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/76db7c48-1d92-41d3-b37f-532fe557eff3"
            }}
            style={styles.ImageBackground_I0_436_0_3124}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a78dcf27-d2a2-4e39-9353-bcae8edf11ee"
            }}
            style={styles.ImageBackground_I0_436_0_3125}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bb9662d1-9db4-4d4c-9603-127f822b5f67"
            }}
            style={styles.ImageBackground_I0_436_0_3126}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa6999b7-b2f1-413f-95fe-3ae37425b637"
            }}
            style={styles.ImageBackground_I0_436_0_3127}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8137d728-5543-4896-9b14-60e328a79cc5"
            }}
            style={styles.ImageBackground_I0_436_0_3128}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6beabacd-7eb6-4458-9d2b-34b88c22678a"
            }}
            style={styles.ImageBackground_I0_436_0_3129}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65d53167-dd4b-4729-a3d2-57b70cd9c208"
            }}
            style={styles.ImageBackground_I0_436_0_3130}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3af7d4bd-9605-4916-b886-f531b4bbb02e"
            }}
            style={styles.ImageBackground_I0_436_0_3131}
          />
        </View>
      </View>
      <View style={styles.View_0_444}>
        <View style={styles.View_0_438}>
          <Text style={styles.Text_0_438}>Lorem Ipsum Spreadsheet 18.xls</Text>
        </View>
        <View style={styles.View_0_439}>
          <Text style={styles.Text_0_439}>
            Spreadsheet, small file Mar 13, 2018
          </Text>
        </View>
        <View style={styles.View_0_443}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b49438a-f405-45c9-af9d-530093b6e75d"
            }}
            style={styles.ImageBackground_0_440}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/726bef0b-7f60-46fa-a3d5-198fc5e421e8"
            }}
            style={styles.ImageBackground_0_441}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3d6ccbe3-b69a-4a59-adeb-8096fecf4aaa"
            }}
            style={styles.ImageBackground_0_442}
          />
        </View>
      </View>
      <View style={styles.View_0_446}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3afea952-7157-4732-b4fb-f382bc10cba8"
          }}
          style={styles.ImageBackground_I0_446_0_2786}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/763df165-0d56-49f4-89af-369434faeb24"
          }}
          style={styles.ImageBackground_I0_446_0_2788}
        />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3ca681d4-62c6-47f2-8e15-cffd1cb9c4f1"
        }}
        style={styles.ImageBackground_0_449}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10f8767e-fd70-4edb-b5cf-2e9638b30ada"
        }}
        style={styles.ImageBackground_0_452}
      />
      <View style={styles.View_0_455}>
        <View source={{ uri: "null" }} style={styles.View_I0_455_0_2792} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aedd295f-ceb7-44bc-86e9-320aaf88b894"
          }}
          style={styles.ImageBackground_I0_455_0_2793}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1164da12-fcdb-429a-b674-3b0e834066cc"
          }}
          style={styles.ImageBackground_I0_455_0_2794}
        />
        <View style={styles.View_I0_455_0_2801}>
          <View style={styles.View_I0_455_0_2797}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07e78d5c-ab20-4d88-ac38-2a3e411fc340"
              }}
              style={styles.ImageBackground_I0_455_0_2795}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12557b6e-3df3-42cc-988d-222b463e0e8e"
              }}
              style={styles.ImageBackground_I0_455_0_2796}
            />
          </View>
          <View style={styles.View_I0_455_0_2800}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2a29e91b-dfdd-4443-8301-171f3c38c113"
              }}
              style={styles.ImageBackground_I0_455_0_2798}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6761e7b-dd51-455c-82c5-fc52c567a368"
              }}
              style={styles.ImageBackground_I0_455_0_2799}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_458}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8756edfb-1aef-4e77-9240-0eee292d3810"
          }}
          style={styles.ImageBackground_I0_458_0_2802}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d729cfb1-c8bf-4ff4-b3c8-af4b88f147dd"
          }}
          style={styles.ImageBackground_I0_458_0_2803}
        />
        <View style={styles.View_I0_458_0_2810}>
          <View style={styles.View_I0_458_0_2806}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a7bce1b1-df08-4f03-b5e1-e5b232495d6b"
              }}
              style={styles.ImageBackground_I0_458_0_2804}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77686bc4-7501-45fb-9934-5e9a404da8b4"
              }}
              style={styles.ImageBackground_I0_458_0_2805}
            />
          </View>
          <View style={styles.View_I0_458_0_2809}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3205d0e2-107a-47f4-8539-75e655867250"
              }}
              style={styles.ImageBackground_I0_458_0_2807}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4b8c38a2-37b2-4224-b579-8c712542b99d"
              }}
              style={styles.ImageBackground_I0_458_0_2808}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_461}>
        <View style={styles.View_I0_461_0_2821}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/231742d0-6c11-44e4-ac74-ad161085bc0c"
            }}
            style={styles.ImageBackground_I0_461_0_2812}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9809cc22-7cce-4ae0-acb4-8edd59788a98"
            }}
            style={styles.ImageBackground_I0_461_0_2813}
          />
          <View style={styles.View_I0_461_0_2820}>
            <View style={styles.View_I0_461_0_2816}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/03c97e9f-5a42-470d-afa5-eee0fc9826cd"
                }}
                style={styles.ImageBackground_I0_461_0_2814}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/128f560d-6dd1-4257-83d0-5f20f211035e"
                }}
                style={styles.ImageBackground_I0_461_0_2815}
              />
            </View>
            <View style={styles.View_I0_461_0_2819}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55a6d88f-06d9-4905-8b7a-e72ef4b7703e"
                }}
                style={styles.ImageBackground_I0_461_0_2817}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8487b3de-48db-401d-a3da-98217104d4b7"
                }}
                style={styles.ImageBackground_I0_461_0_2818}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_I0_461_0_2833}>
          <View style={styles.View_I0_461_0_2822}>
            <Text style={styles.Text_I0_461_0_2822}>2018 Financials</Text>
          </View>
          <View style={styles.View_I0_461_0_2831}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f111e143-572a-4d5c-96a3-534d0b8b5377"
              }}
              style={styles.ImageBackground_I0_461_0_2825}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/327d837c-9faa-4b8e-a860-787054e01660"
              }}
              style={styles.ImageBackground_I0_461_0_2828}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a58cdcc-0ee5-4c29-bf1b-8d1dc44595a9"
              }}
              style={styles.ImageBackground_I0_461_0_2829}
            />
            <View style={styles.View_I0_461_0_2830}>
              <Text style={styles.Text_I0_461_0_2830}>38</Text>
            </View>
          </View>
          <View style={styles.View_I0_461_0_2832}>
            <Text style={styles.Text_I0_461_0_2832}>Yesterday</Text>
          </View>
        </View>
        <View style={styles.View_I0_461_0_2837}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b30c0f89-26de-4933-a614-0492c76e5a09"
            }}
            style={styles.ImageBackground_I0_461_0_2834}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2752ebcf-53b2-4f55-b850-ca9eea1152cc"
            }}
            style={styles.ImageBackground_I0_461_0_2835}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e8a2f2cc-9697-4c39-8c81-71b2c318029f"
            }}
            style={styles.ImageBackground_I0_461_0_2836}
          />
        </View>
      </View>
      <View style={styles.View_0_464}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/af2f2ab2-f6f3-4f56-bda3-af8a09f00f50"
          }}
          style={styles.ImageBackground_I0_464_0_3138}
        />
        <View style={styles.View_I0_464_0_2409}>
          <Text style={styles.Text_I0_464_0_2409}>Search</Text>
        </View>
        <View style={styles.View_I0_464_0_3139}>
          <View style={styles.View_I0_464_0_3139_0_2777}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b91ebe9-0ec4-4b74-b5a1-2e08a078f54e"
              }}
              style={styles.ImageBackground_I0_464_0_3139_0_2775}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4dcec5f-273d-458a-907e-9c8bb0b5579c"
              }}
              style={styles.ImageBackground_I0_464_0_3139_0_2776}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_467}>
        <View source={{ uri: "null" }} style={styles.View_I0_467_0_2845} />
        <View style={styles.View_I0_467_0_2846}>
          <Text style={styles.Text_I0_467_0_2846}>Log</Text>
        </View>
        <View style={styles.View_I0_467_0_2849}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c7fc500e-5f35-44eb-94f9-3d2be234c85f"
            }}
            style={styles.ImageBackground_I0_467_0_2847}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7544ef21-ae8d-4057-98bb-127ec6ea6981"
            }}
            style={styles.ImageBackground_I0_467_0_2848}
          />
        </View>
      </View>
      <View style={styles.View_0_470}>
        <View source={{ uri: "null" }} style={styles.View_I0_470_0_2850} />
        <View style={styles.View_I0_470_0_2853}>
          <View style={styles.View_I0_470_0_2851}>
            <Text style={styles.Text_I0_470_0_2851}>Private</Text>
          </View>
          <View style={styles.View_I0_470_0_2852}>
            <Text style={styles.Text_I0_470_0_2852}>Private</Text>
          </View>
        </View>
        <View style={styles.View_I0_470_0_2856}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/67b9bfdd-e372-494d-a930-e44896aa9e45"
            }}
            style={styles.ImageBackground_I0_470_0_2854}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e5ecff10-1b3c-43f6-8ae7-ddb248db312e"
            }}
            style={styles.ImageBackground_I0_470_0_2855}
          />
        </View>
      </View>
      <View style={styles.View_0_473}>
        <View source={{ uri: "null" }} style={styles.View_I0_473_0_2857} />
        <View style={styles.View_I0_473_0_2858}>
          <Text style={styles.Text_I0_473_0_2858}>Shared</Text>
        </View>
        <View style={styles.View_I0_473_0_2866}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d8b8e086-d7c6-4953-914c-f9584bde77fb"
            }}
            style={styles.ImageBackground_I0_473_0_2859}
          />
          <View style={styles.View_I0_473_0_2862}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7f3be54-fba9-4692-b132-1bab3b260868"
              }}
              style={styles.ImageBackground_I0_473_0_2860}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/efbc300d-1da3-4270-869d-4a237abf5dfe"
              }}
              style={styles.ImageBackground_I0_473_0_2861}
            />
          </View>
          <View style={styles.View_I0_473_0_2865}>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53452a58-0cba-40a0-884b-337b38c7d261"
              }}
              style={styles.ImageBackground_I0_473_0_2863}
            />
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e35dbfd-a754-4301-98c3-b7538d985c58"
              }}
              style={styles.ImageBackground_I0_473_0_2864}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_476}>
        <View source={{ uri: "null" }} style={styles.View_I0_476_0_2867} />
        <View style={styles.View_I0_476_0_2868}>
          <Text style={styles.Text_I0_476_0_2868}>Log</Text>
        </View>
        <View style={styles.View_I0_476_0_2871}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0d773f4a-c2de-431a-b375-20dbb3ce404b"
            }}
            style={styles.ImageBackground_I0_476_0_2869}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0036baf9-3cb4-4093-ac25-50898e0d3f0b"
            }}
            style={styles.ImageBackground_I0_476_0_2870}
          />
        </View>
      </View>
      <View style={styles.View_0_479}>
        <View source={{ uri: "null" }} style={styles.View_I0_479_0_2872} />
        <View style={styles.View_I0_479_0_2873}>
          <Text style={styles.Text_I0_479_0_2873}>Private</Text>
        </View>
        <View style={styles.View_I0_479_0_2876}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d5baa09-bf2a-4e5e-b9df-87252a0c9f1f"
            }}
            style={styles.ImageBackground_I0_479_0_2874}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a663ba39-e0d0-4520-a150-fe3fabb87f0c"
            }}
            style={styles.ImageBackground_I0_479_0_2875}
          />
        </View>
      </View>
      <View style={styles.View_0_482}>
        <View source={{ uri: "null" }} style={styles.View_I0_482_0_2888} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f10c1616-10f6-487b-a92c-22eef518eb69"
          }}
          style={styles.ImageBackground_I0_482_0_795}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4fa639ae-f455-42d6-8a92-9992d5bc042d"
          }}
          style={styles.ImageBackground_I0_482_0_796}
        />
        <View style={styles.View_I0_482_0_2891}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb569860-f736-4b09-805d-274fe274d825"
            }}
            style={styles.ImageBackground_I0_482_0_2889}
          />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/60ae6298-408b-4fa9-b8d4-6c43a285608d"
            }}
            style={styles.ImageBackground_I0_482_0_2890}
          />
        </View>
      </View>
      <View style={styles.View_0_485}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10525668-89e9-4969-8d04-cf5a50f49e04"
          }}
          style={styles.ImageBackground_I0_485_0_2939}
        />
        <View style={styles.View_I0_485_0_2944}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50f4f0da-d03f-4eb3-ba2b-21584880abeb"
            }}
            style={styles.ImageBackground_I0_485_0_2943}
          />
        </View>
        <View style={styles.View_I0_485_0_2952}>
          <View source={{ uri: "null" }} style={styles.View_I0_485_0_2945} />
          <View style={styles.View_I0_485_0_2948}>
            <View style={styles.View_I0_485_0_2946}>
              <Text style={styles.Text_I0_485_0_2946}> </Text>
            </View>
            <View style={styles.View_I0_485_0_2947}>
              <Text style={styles.Text_I0_485_0_2947}> </Text>
            </View>
          </View>
          <View style={styles.View_I0_485_0_2951}>
            <View style={styles.View_I0_485_0_2949}>
              <Text style={styles.Text_I0_485_0_2949}>0</Text>
            </View>
            <View style={styles.View_I0_485_0_2950}>
              <Text style={styles.Text_I0_485_0_2950}>0</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_485_0_2957}>
          <View source={{ uri: "null" }} style={styles.View_I0_485_0_2953} />
          <View style={styles.View_I0_485_0_2956}>
            <View style={styles.View_I0_485_0_2954}>
              <Text style={styles.Text_I0_485_0_2954}>PGRS</Text>
            </View>
            <View style={styles.View_I0_485_0_2955}>
              <Text style={styles.Text_I0_485_0_2955}>PGRS</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_485_0_3027}>
          <View style={styles.View_I0_485_0_2965}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2958} />
            <View style={styles.View_I0_485_0_2961}>
              <View style={styles.View_I0_485_0_2959}>
                <Text style={styles.Text_I0_485_0_2959}>WXYZ</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/446fe18e-ad1e-41e3-b4b0-9bfdaf7e0f42"
                }}
                style={styles.ImageBackground_I0_485_0_2960}
              />
            </View>
            <View style={styles.View_I0_485_0_2964}>
              <View style={styles.View_I0_485_0_2962}>
                <Text style={styles.Text_I0_485_0_2962}>9</Text>
              </View>
              <View style={styles.View_I0_485_0_2963}>
                <Text style={styles.Text_I0_485_0_2963}>9</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_2970}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2966} />
            <View style={styles.View_I0_485_0_2969}>
              <View style={styles.View_I0_485_0_2967}>
                <Text style={styles.Text_I0_485_0_2967}>8</Text>
              </View>
              <View style={styles.View_I0_485_0_2968}>
                <Text style={styles.Text_I0_485_0_2968}>8</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_2978}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2971} />
            <View style={styles.View_I0_485_0_2974}>
              <View style={styles.View_I0_485_0_2972}>
                <Text style={styles.Text_I0_485_0_2972}>PGRS</Text>
              </View>
              <View style={styles.View_I0_485_0_2973}>
                <Text style={styles.Text_I0_485_0_2973}>PGRS</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_2977}>
              <View style={styles.View_I0_485_0_2975}>
                <Text style={styles.Text_I0_485_0_2975}>7</Text>
              </View>
              <View style={styles.View_I0_485_0_2976}>
                <Text style={styles.Text_I0_485_0_2976}>7</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_2986}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2979} />
            <View style={styles.View_I0_485_0_2982}>
              <View style={styles.View_I0_485_0_2980}>
                <Text style={styles.Text_I0_485_0_2980}>MNO</Text>
              </View>
              <View style={styles.View_I0_485_0_2981}>
                <Text style={styles.Text_I0_485_0_2981}>MNO</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_2985}>
              <View style={styles.View_I0_485_0_2983}>
                <Text style={styles.Text_I0_485_0_2983}>6</Text>
              </View>
              <View style={styles.View_I0_485_0_2984}>
                <Text style={styles.Text_I0_485_0_2984}>6</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_2994}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2987} />
            <View style={styles.View_I0_485_0_2990}>
              <View style={styles.View_I0_485_0_2988}>
                <Text style={styles.Text_I0_485_0_2988}>JKL</Text>
              </View>
              <View style={styles.View_I0_485_0_2989}>
                <Text style={styles.Text_I0_485_0_2989}>JKL</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_2993}>
              <View style={styles.View_I0_485_0_2991}>
                <Text style={styles.Text_I0_485_0_2991}>5</Text>
              </View>
              <View style={styles.View_I0_485_0_2992}>
                <Text style={styles.Text_I0_485_0_2992}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_3002}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_2995} />
            <View style={styles.View_I0_485_0_2998}>
              <View style={styles.View_I0_485_0_2996}>
                <Text style={styles.Text_I0_485_0_2996}>GHI</Text>
              </View>
              <View style={styles.View_I0_485_0_2997}>
                <Text style={styles.Text_I0_485_0_2997}>GHI</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_3001}>
              <View style={styles.View_I0_485_0_2999}>
                <Text style={styles.Text_I0_485_0_2999}>4</Text>
              </View>
              <View style={styles.View_I0_485_0_3000}>
                <Text style={styles.Text_I0_485_0_3000}>4</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_3010}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_3003} />
            <View style={styles.View_I0_485_0_3006}>
              <View style={styles.View_I0_485_0_3004}>
                <Text style={styles.Text_I0_485_0_3004}>DEF</Text>
              </View>
              <View style={styles.View_I0_485_0_3005}>
                <Text style={styles.Text_I0_485_0_3005}>DEF</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_3009}>
              <View style={styles.View_I0_485_0_3007}>
                <Text style={styles.Text_I0_485_0_3007}>3</Text>
              </View>
              <View style={styles.View_I0_485_0_3008}>
                <Text style={styles.Text_I0_485_0_3008}>3</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_3018}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_3011} />
            <View style={styles.View_I0_485_0_3014}>
              <View style={styles.View_I0_485_0_3012}>
                <Text style={styles.Text_I0_485_0_3012}>ABC</Text>
              </View>
              <View style={styles.View_I0_485_0_3013}>
                <Text style={styles.Text_I0_485_0_3013}>ABC</Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_3017}>
              <View style={styles.View_I0_485_0_3015}>
                <Text style={styles.Text_I0_485_0_3015}>2</Text>
              </View>
              <View style={styles.View_I0_485_0_3016}>
                <Text style={styles.Text_I0_485_0_3016}>2</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_I0_485_0_3026}>
            <View source={{ uri: "null" }} style={styles.View_I0_485_0_3019} />
            <View style={styles.View_I0_485_0_3022}>
              <View style={styles.View_I0_485_0_3020}>
                <Text style={styles.Text_I0_485_0_3020}> </Text>
              </View>
              <View style={styles.View_I0_485_0_3021}>
                <Text style={styles.Text_I0_485_0_3021}> </Text>
              </View>
            </View>
            <View style={styles.View_I0_485_0_3025}>
              <View style={styles.View_I0_485_0_3023}>
                <Text style={styles.Text_I0_485_0_3023}>1</Text>
              </View>
              <View style={styles.View_I0_485_0_3024}>
                <Text style={styles.Text_I0_485_0_3024}>1</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_I0_485_0_3040}>
          <View style={styles.View_I0_485_0_3039}>
            <View style={styles.View_I0_485_0_3038}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d887052-5b8a-4e3e-a145-cfeca54e4368"
                }}
                style={styles.ImageBackground_I0_485_0_3028}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afaf65ae-be58-4c13-8011-2d33e0726756"
                }}
                style={styles.ImageBackground_I0_485_0_3029}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bfcaf5c2-75a1-4d25-8fa7-d3a064df4330"
                }}
                style={styles.ImageBackground_I0_485_0_3030}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49b0c9f3-4c9b-4914-8e65-b58aadaa6109"
                }}
                style={styles.ImageBackground_I0_485_0_3031}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/12982335-ad4f-4926-9e94-cc138a14535a"
                }}
                style={styles.ImageBackground_I0_485_0_3032}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28fc7aa0-d853-40a5-bdcc-6e7f32dc2a9e"
                }}
                style={styles.ImageBackground_I0_485_0_3033}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1af75a76-ed80-4361-98ca-3e34a247fbaf"
                }}
                style={styles.ImageBackground_I0_485_0_3034}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6d14d332-99e7-46e5-803d-b840752b4e3c"
                }}
                style={styles.ImageBackground_I0_485_0_3035}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cb63aa31-6ccf-4fb7-8abf-b3466c68b7cb"
                }}
                style={styles.ImageBackground_I0_485_0_3036}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5138bdb4-2898-4be1-987f-9618f60e9040"
                }}
                style={styles.ImageBackground_I0_485_0_3037}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_488}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3609ba34-f000-40b1-bfb2-7eb6768ee0ba"
          }}
          style={styles.ImageBackground_I0_488_0_3060}
        />
        <View style={styles.View_I0_488_0_3061}>
          <Text style={styles.Text_I0_488_0_3061}>Sign up</Text>
        </View>
      </View>
      <View style={styles.View_0_491}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b3d39616-195b-4282-bf54-33ea0ed8b009"
          }}
          style={styles.ImageBackground_I0_491_0_3050}
        />
        <View style={styles.View_I0_491_0_3052}>
          <View style={styles.View_I0_491_0_3051}>
            <Text style={styles.Text_I0_491_0_3051}>Sign in</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("661%") },
  ImageBackground_0_170: {
    width: wp("100%"),
    height: hp("230%"),
    top: hp("433%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_179: {
    width: wp("91%"),
    height: hp("75%"),
    top: hp("302%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_171: {
    width: wp("5%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_171: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_172: {
    width: wp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%"),
    justifyContent: "flex-start"
  },
  Text_0_172: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_173: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_173: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_174: {
    width: wp("28%"),
    height: hp("61%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_175: {
    width: wp("28%"),
    height: hp("61%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  ImageBackground_0_176: {
    width: wp("10%"),
    height: hp("61%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("70%")
  },
  ImageBackground_0_177: {
    width: wp("10%"),
    height: hp("61%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("59%")
  },
  ImageBackground_0_178: {
    width: wp("10%"),
    height: hp("61%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("81%")
  },
  View_0_201: {
    width: wp("90%"),
    height: hp("143%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_182: {
    width: wp("28%"),
    height: hp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_180: {
    width: wp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_180: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_181: {
    width: wp("28%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_181: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_189: {
    width: wp("69%"),
    height: hp("17%"),
    top: hp("126%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_183: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_183: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_184: {
    width: wp("8%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_0_184: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_185: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    justifyContent: "flex-start"
  },
  Text_0_185: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_186: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_186: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_187: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    justifyContent: "flex-start"
  },
  Text_0_187: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_188: {
    width: wp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    justifyContent: "flex-start"
  },
  Text_0_188: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 58,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_195: {
    width: wp("52%"),
    height: hp("26%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_190: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_190: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_191: {
    width: wp("12%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_191: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 115,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_192: {
    width: wp("6%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_0_192: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_193: {
    width: wp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    justifyContent: "flex-start"
  },
  Text_0_193: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_194: {
    width: wp("5%"),
    top: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("47%"),
    justifyContent: "flex-start"
  },
  Text_0_194: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 58,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_200: {
    width: wp("90%"),
    height: hp("56%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_196: {
    width: wp("49%"),
    height: hp("55%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%")
  },
  View_0_197: {
    width: wp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_197: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_198: {
    width: wp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_198: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_199: {
    width: wp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    justifyContent: "flex-start"
  },
  Text_0_199: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 29,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_202: {
    width: wp("16%"),
    top: hp("384%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_202: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_203: {
    width: wp("3%"),
    top: hp("394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_203: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_204: {
    width: wp("7%"),
    top: hp("394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    justifyContent: "flex-start"
  },
  Text_0_204: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_205: {
    width: wp("5%"),
    top: hp("394%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    justifyContent: "flex-start"
  },
  Text_0_205: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_206: {
    width: wp("2%"),
    top: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    justifyContent: "flex-start"
  },
  Text_0_206: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_207: {
    width: wp("4%"),
    top: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    justifyContent: "flex-start"
  },
  Text_0_207: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_208: {
    width: wp("2%"),
    top: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_208: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_209: {
    width: wp("4%"),
    top: hp("469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_209: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_210: {
    width: wp("5%"),
    top: hp("469%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    justifyContent: "flex-start"
  },
  Text_0_210: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_211: {
    width: wp("5%"),
    top: hp("484%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_211: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_212: {
    width: wp("5%"),
    top: hp("501%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_212: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_213: {
    width: wp("5%"),
    top: hp("570%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_213: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_214: {
    width: wp("4%"),
    top: hp("553%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_214: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_215: {
    width: wp("4%"),
    top: hp("570%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_215: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_216: {
    width: wp("9%"),
    top: hp("570%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    justifyContent: "flex-start"
  },
  Text_0_216: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_217: {
    width: wp("2%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_217: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_218: {
    width: wp("4%"),
    top: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    justifyContent: "flex-start"
  },
  Text_0_218: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_219: {
    width: wp("3%"),
    top: hp("400%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    justifyContent: "flex-start"
  },
  Text_0_219: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_220: {
    width: wp("2%"),
    top: hp("413%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    justifyContent: "flex-start"
  },
  Text_0_220: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_221: {
    width: wp("4%"),
    top: hp("440%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_221: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_222: {
    width: wp("6%"),
    top: hp("440%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    justifyContent: "flex-start"
  },
  Text_0_222: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_223: {
    width: wp("8%"),
    top: hp("440%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    justifyContent: "flex-start"
  },
  Text_0_223: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_225: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_225_0_2586: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_225_0_2589: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_225_0_2587: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_225_0_2588: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_245: {
    width: wp("25%"),
    height: hp("75%"),
    top: hp("574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_0_227: {
    width: wp("25%"),
    height: hp("75%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_228: {
    width: wp("10%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_228: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_229: {
    width: wp("9%"),
    top: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_229: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_230: {
    width: wp("13%"),
    top: hp("57%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_230: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_241: {
    width: wp("22%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_231: {
    width: wp("22%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_240: {
    width: wp("13%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_232: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_232: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_233: {
    width: wp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_233: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_235: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_235_0_2839: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_235_0_2840: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_235_0_2841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_235_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_235_0_2842: {
    width: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_235_0_2843: {
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
  ImageBackground_0_239: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_242: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("56%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_243: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("64%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_0_244: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  View_0_263: {
    width: wp("25%"),
    height: hp("53%"),
    top: hp("574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%")
  },
  ImageBackground_0_246: {
    width: wp("25%"),
    height: hp("53%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_247: {
    width: wp("4%"),
    top: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_247: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_248: {
    width: wp("17%"),
    top: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_248: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_249: {
    width: wp("1%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_249: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_258: {
    width: wp("22%"),
    height: hp("19%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_250: {
    width: wp("22%"),
    height: hp("19%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_257: {
    width: wp("13%"),
    height: hp("14%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_0_251: {
    width: wp("9%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_251: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_252: {
    width: wp("13%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_252: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_253: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_253_0_2839: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_253_0_2840: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_253_0_2841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_253_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_253_0_2842: {
    width: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_253_0_2843: {
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
  ImageBackground_0_256: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_0_259: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("35%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_261: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_261_0_2768: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_261_0_2769: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_261_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_261_0_2772: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_261_0_2770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_261_0_2771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_309: {
    width: wp("25%"),
    height: hp("51%"),
    top: hp("574%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%")
  },
  ImageBackground_0_264: {
    width: wp("25%"),
    height: hp("51%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_265: {
    width: wp("4%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_265: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_266: {
    width: wp("3%"),
    top: hp("34%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_266: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_267: {
    width: wp("5%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_0_267: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_269: {
    width: wp("9%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_0_268: {
    width: wp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_268: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_0_270: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_277: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%")
  },
  ImageBackground_0_278: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("31%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_0_279: {
    width: wp("22%"),
    height: hp("0%"),
    top: hp("39%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_280: {
    width: wp("5%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    justifyContent: "flex-start"
  },
  Text_0_280: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_285: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("26%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%")
  },
  View_0_281: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_284: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_283: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_287: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("42%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_287_0_2763: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_287_0_2767: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_287_0_1133: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_287_0_1133: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_287_0_2766: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_287_0_2764: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_287_0_2765: {
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
  View_0_290: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_290_0_2754: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_290_0_2755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_290_0_2757: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_298: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_297: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_296: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_295: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_308: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_299: {
    width: wp("25%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_302: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_0_300: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_300: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_301: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_301_0_2839: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_301_0_2840: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_301_0_2841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_301_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_301_0_2842: {
    width: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_301_0_2843: {
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
  View_0_307: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_0_303: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_306: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_305: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_310: {
    width: wp("45%"),
    top: hp("193%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_310: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 38,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_311: {
    width: wp("29%"),
    top: hp("207%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_311: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 22,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_312: {
    width: wp("23%"),
    top: hp("217%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_312: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_313: {
    width: wp("21%"),
    top: hp("226%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_313: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 18,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_314: {
    width: wp("21%"),
    top: hp("234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_314: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_315: {
    width: wp("18%"),
    top: hp("242%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_315: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_316: {
    width: wp("17%"),
    top: hp("249%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_316: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_317: {
    width: wp("16%"),
    top: hp("256%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_317: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_318: {
    width: wp("17%"),
    top: hp("263%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_318: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_319: {
    width: wp("16%"),
    top: hp("269%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_319: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_320: {
    width: wp("14%"),
    top: hp("276%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_320: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_321: {
    width: wp("13%"),
    top: hp("282%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_321: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_322: {
    width: wp("14%"),
    top: hp("288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_322: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_323: {
    width: wp("49%"),
    top: hp("181%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_323: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 38,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_324: {
    width: wp("50%"),
    top: hp("168%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_324: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 38,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_325: {
    width: wp("6%"),
    top: hp("160%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "flex-start"
  },
  Text_0_325: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_326: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_326_0_2839: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_326_0_2840: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_326_0_2841: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_326_0_2844: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_326_0_2842: {
    width: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_326_0_2843: {
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
  View_0_328: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_328_0_2877: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_328_0_2878: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_328_0_2878: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_328_0_2886: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_328_0_2879: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_328_0_2882: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_328_0_2880: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_328_0_2881: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_328_0_2885: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_328_0_2883: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_328_0_2884: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_331: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_331_0_3041: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_331_0_3042: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I0_331_0_3042: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_334: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_334_0_2592: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_334_0_2593: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_334_0_2595: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_337: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("49%"),
    top: hp("403%")
  },
  View_0_340: {
    width: wp("8%"),
    height: hp("16%"),
    top: hp("403%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_340_0_2435: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_340_0_2436: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("0%")
  },
  ImageBackground_0_343: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("403%")
  },
  View_0_346: {
    width: wp("26%"),
    height: hp("7%"),
    top: hp("455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_346_0_3094: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3094_0_2701: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3094_0_2702: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_346_0_3094_0_2702: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_346_0_3094_0_2705: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3094_0_2703: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_346_0_3094_0_2704: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I0_346_0_3095: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3095_0_2743: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3095_0_2744: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_346_0_3095_0_2744: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_346_0_3095_0_2752: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3095_0_2745: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3095_0_2748: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3095_0_2746: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_346_0_3095_0_2747: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3095_0_2751: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3095_0_2749: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_346_0_3095_0_2750: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3096: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3096_0_2708: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_346_0_3096_0_2709: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_346_0_3096_0_2709: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_346_0_3096_0_2712: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_346_0_3096_0_2710: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_346_0_3096_0_2711: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_349: {
    width: wp("26%"),
    height: hp("7%"),
    top: hp("445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_349_0_3097: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3097_0_2715: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3097_0_2716: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_349_0_3097_0_2716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_349_0_3097_0_2724: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3097_0_2717: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3097_0_2720: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3097_0_2718: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_349_0_3097_0_2719: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3097_0_2723: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3097_0_2721: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_349_0_3097_0_2722: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3098: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3098_0_2727: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3098_0_2730: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_349_0_3098_0_2728: {
    width: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_349_0_3098_0_2728: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_349_0_3098_0_2729: {
    width: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_349_0_3098_0_2729: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_349_0_3098_0_2733: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3098_0_2731: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_349_0_3098_0_2732: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_I0_349_0_3099: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3099_0_2736: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_349_0_3099_0_2737: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_349_0_3099_0_2737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_349_0_3099_0_2740: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_349_0_3099_0_2738: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_349_0_3099_0_2739: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_352: {
    width: wp("26%"),
    height: hp("7%"),
    top: hp("455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2438: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_352_0_2439: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_352_0_2439: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_352_0_2442: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2440: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_352_0_2441: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_352_0_2443: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I0_352_0_2444: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_352_0_2444: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_352_0_2452: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2445: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_352_0_2448: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2446: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_352_0_2447: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_352_0_2451: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2449: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_352_0_2450: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_352_0_2453: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I0_352_0_2454: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_352_0_2454: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_352_0_2457: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_352_0_2455: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_352_0_2456: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_355: {
    width: wp("26%"),
    height: hp("7%"),
    top: hp("445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2458: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%")
  },
  View_I0_355_0_2459: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_355_0_2459: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_355_0_2462: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2460: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_355_0_2461: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_355_0_2463: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_355_0_2466: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_355_0_2464: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_355_0_2464: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_355_0_2465: {
    width: wp("3%"),
    minWidth: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_355_0_2465: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_355_0_2469: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2467: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_355_0_2468: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_355_0_2470: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%")
  },
  View_I0_355_0_2471: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_355_0_2471: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_355_0_2479: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2472: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_355_0_2475: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2473: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_355_0_2474: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_355_0_2478: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_355_0_2476: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_355_0_2477: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_358: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("91%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_358_0_2481: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_358_0_2494: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_358_0_2493: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_358_0_2492: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_358_0_2482: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_358_0_2483: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_358_0_2484: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_358_0_2485: {
    width: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_358_0_2486: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_358_0_2487: {
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_358_0_2488: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_358_0_2489: {
    width: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_358_0_2490: {
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
  ImageBackground_I0_358_0_2491: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_361: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("88%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_361_0_2495: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_361_0_2499: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_361_0_2496: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_361_0_2498: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_364: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("84%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_364_0_2500: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_364_0_2503: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_364_0_2501: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_364_0_2502: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_367: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_367_0_2504: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_367_0_2508: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_367_0_2505: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_367_0_2507: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_370: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_370_0_2509: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_370_0_2513: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_370_0_2510: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_370_0_2511: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_370_0_2512: {
    width: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_0_373: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_373_0_2514: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_373_0_2518: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_373_0_2515: {
    width: wp("0%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_373_0_2516: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_373_0_2517: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_376: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_376_0_2519: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_376_0_2526: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_376_0_2520: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_376_0_2521: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_376_0_2522: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_376_0_2523: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I0_376_0_2524: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_376_0_2525: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_0_379: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_379_0_2527: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_379_0_2530: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_379_0_2528: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_379_0_2529: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_382: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_382_0_2531: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_382_0_2534: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_382_0_2532: {
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_382_0_2533: {
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
  View_0_385: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("90%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_385_0_2536: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_385_0_2549: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_385_0_2548: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_385_0_2547: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_385_0_2537: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_385_0_2538: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_385_0_2539: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_385_0_2540: {
    width: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_385_0_2541: {
    width: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_385_0_2542: {
    width: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  ImageBackground_I0_385_0_2543: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  ImageBackground_I0_385_0_2544: {
    width: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_385_0_2545: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_385_0_2546: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_388: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_388_0_2550: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_388_0_2554: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_388_0_2551: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_388_0_2553: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_0_391: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_391_0_2555: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_391_0_2558: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_391_0_2556: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_391_0_2557: {
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_394: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_394_0_2559: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_394_0_2563: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_394_0_2560: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_394_0_2562: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_397: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_397_0_2564: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_397_0_2568: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_397_0_2565: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_397_0_2566: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_397_0_2567: {
    width: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%")
  },
  View_0_400: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_400_0_2569: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_400_0_2573: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_400_0_2570: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_400_0_2571: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_400_0_2572: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_403: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("69%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_403_0_2574: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_403_0_2581: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_403_0_2575: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_403_0_2576: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_403_0_2577: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("3%")
  },
  ImageBackground_I0_403_0_2578: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%")
  },
  ImageBackground_I0_403_0_2579: {
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
  ImageBackground_I0_403_0_2580: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_0_406: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("402%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_406_0_2582: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_406_0_2585: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_406_0_2583: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_406_0_2584: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_409: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("528%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_409_0_2590: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_409_0_2591: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_409_0_2591: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_411: {
    width: wp("4%"),
    height: hp("4%"),
    top: hp("558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_411_0_2754: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_411_0_2755: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_411_0_2757: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  View_0_413: {
    width: wp("26%"),
    height: hp("30%"),
    top: hp("506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_413_0_2596: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2601: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_413_0_2600: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_413_0_2609: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2602: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2605: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2603: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2603: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2604: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2604: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2608: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2606: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2606: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2607: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2607: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2617: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2610: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2613: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2611: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2611: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_413_0_2612: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2616: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2614: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2614: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2615: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2615: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2622: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2618: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2621: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2619: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2619: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2620: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2620: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2630: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2623: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2626: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2624: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2624: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2625: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2625: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2629: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2627: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2627: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2628: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2628: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2635: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2631: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2634: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2632: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2632: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2633: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2633: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2643: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2636: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2639: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2637: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2637: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2638: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2638: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2642: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2640: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2640: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2641: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2641: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2651: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2644: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2647: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2645: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2645: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2646: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2646: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2650: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2648: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2648: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2649: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2649: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2659: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2652: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2655: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2653: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2653: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2654: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2654: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2658: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2656: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2656: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2657: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2657: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2667: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2660: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2663: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2661: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2661: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2662: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2662: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2666: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2664: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2664: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2665: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2665: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2675: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2668: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2671: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2669: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2669: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2670: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2670: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2674: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2672: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2672: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2673: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2673: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2683: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2676: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_413_0_2679: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2677: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2677: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2678: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2678: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2682: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2680: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2680: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2681: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_413_0_2681: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_413_0_2696: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2695: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_413_0_2694: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_413_0_2684: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_413_0_2685: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_413_0_2686: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_413_0_2687: {
    width: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_413_0_2688: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_413_0_2689: {
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_413_0_2690: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_413_0_2691: {
    width: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_413_0_2692: {
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
  ImageBackground_I0_413_0_2693: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_416: {
    width: wp("24%"),
    height: hp("5%"),
    top: hp("488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_416_0_2758: {
    flexGrow: 1,
    width: wp("24%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_416_0_2759: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_416_0_2759: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_416_0_2762: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_416_0_2760: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_416_0_2761: {
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
  View_0_418: {
    width: wp("22%"),
    height: hp("6%"),
    top: hp("517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_418_0_2763: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_418_0_2767: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_418_0_1133: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_418_0_1133: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_418_0_2766: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_418_0_2764: {
    flexGrow: 1,
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_418_0_2765: {
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
  View_0_420: {
    width: wp("10%"),
    height: hp("6%"),
    top: hp("538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_420_0_2773: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_420_0_2774: {
    flexGrow: 1,
    width: wp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_420_0_2774: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_422: {
    width: wp("14%"),
    height: hp("6%"),
    top: hp("538%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_422_0_2768: {
    flexGrow: 1,
    width: wp("14%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_422_0_2769: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_422_0_2769: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 13,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_422_0_2772: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_422_0_2770: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_422_0_2771: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_424: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_424_0_3100: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_424_0_3101: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%")
  },
  ImageBackground_I0_424_0_3102: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%")
  },
  View_0_427: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_427_0_3103: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_427_0_3104: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_427_0_3104: {
    color: "rgba(230, 75, 56, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_430: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_430_0_3105: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_430_0_3106: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_I0_430_0_3106: {
    color: "rgba(0, 40, 86, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_433: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_433_0_3107: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_433_0_3117: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_433_0_3108: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_433_0_3109: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_433_0_3110: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_433_0_3111: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_433_0_3112: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_433_0_3113: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_433_0_3114: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_433_0_3115: {
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_433_0_3116: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_436: {
    width: wp("3%"),
    height: hp("7%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_436_0_3118: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_436_0_3132: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_436_0_3119: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3120: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_436_0_3121: {
    width: wp("0%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_436_0_3122: {
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  ImageBackground_I0_436_0_3123: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3124: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3125: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3126: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3127: {
    width: wp("0%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3128: {
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_436_0_3129: {
    width: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("0%")
  },
  ImageBackground_I0_436_0_3130: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_436_0_3131: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_0_444: {
    width: wp("20%"),
    height: hp("7%"),
    top: hp("517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%")
  },
  View_0_438: {
    flexGrow: 1,
    width: wp("17%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_0_438: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_439: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_0_439: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_443: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  ImageBackground_0_440: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_441: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_442: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_446: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("558%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_446_0_2786: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_446_0_2788: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_0_449: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("558%")
  },
  ImageBackground_0_452: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("472%")
  },
  View_0_455: {
    width: wp("6%"),
    height: hp("9%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_455_0_2792: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_455_0_2793: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_455_0_2794: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I0_455_0_2801: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_455_0_2797: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_455_0_2795: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_455_0_2796: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_455_0_2800: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_455_0_2798: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_455_0_2799: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_458: {
    width: wp("3%"),
    height: hp("5%"),
    top: hp("415%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_458_0_2802: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_458_0_2803: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_458_0_2810: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_458_0_2806: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_458_0_2804: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_458_0_2805: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_458_0_2809: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_458_0_2807: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_458_0_2808: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_461: {
    width: wp("28%"),
    height: hp("11%"),
    top: hp("633%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_461_0_2821: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_461_0_2812: {
    flexGrow: 1,
    width: wp("7%"),
    height: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_461_0_2813: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I0_461_0_2820: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("6%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_461_0_2816: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_461_0_2814: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_461_0_2815: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_461_0_2819: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_461_0_2817: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_461_0_2818: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I0_461_0_2833: {
    flexGrow: 1,
    width: wp("10%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_461_0_2822: {
    flexGrow: 1,
    width: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_461_0_2822: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_461_0_2831: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_461_0_2825: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I0_461_0_2828: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_I0_461_0_2829: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("0%")
  },
  View_I0_461_0_2830: {
    width: wp("1%"),
    minWidth: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_I0_461_0_2830: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_461_0_2832: {
    width: wp("4%"),
    minWidth: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_461_0_2832: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_461_0_2837: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_461_0_2834: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_461_0_2835: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_461_0_2836: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_464: {
    width: wp("22%"),
    height: hp("5%"),
    top: hp("488%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_464_0_3138: {
    flexGrow: 1,
    width: wp("22%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_464_0_2409: {
    flexGrow: 1,
    width: wp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I0_464_0_2409: {
    color: "rgba(41, 39, 36, 1)",
    fontSize: 14,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_464_0_3139: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_464_0_3139_0_2777: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_464_0_3139_0_2775: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_464_0_3139_0_2776: {
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
  View_0_467: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_467_0_2845: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_467_0_2846: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_467_0_2846: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_467_0_2849: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_467_0_2847: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_467_0_2848: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_470: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_470_0_2850: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_470_0_2853: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_470_0_2851: {
    width: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_470_0_2851: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_470_0_2852: {
    width: wp("3%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_470_0_2852: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_470_0_2856: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_470_0_2854: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_470_0_2855: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_473: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("445%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_473_0_2857: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_473_0_2858: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_473_0_2858: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_473_0_2866: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_473_0_2859: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_473_0_2862: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_473_0_2860: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_473_0_2861: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_473_0_2865: {
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_473_0_2863: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_473_0_2864: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_476: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_476_0_2867: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_476_0_2868: {
    flexGrow: 1,
    width: wp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_476_0_2868: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_476_0_2871: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_476_0_2869: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_476_0_2870: {
    width: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_0_479: {
    width: wp("9%"),
    height: hp("7%"),
    top: hp("455%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_479_0_2872: {
    flexGrow: 1,
    width: wp("9%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_479_0_2873: {
    flexGrow: 1,
    width: wp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("5%"),
    justifyContent: "flex-start"
  },
  Text_I0_479_0_2873: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_479_0_2876: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_479_0_2874: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_479_0_2875: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_0_482: {
    width: wp("6%"),
    height: hp("9%"),
    top: hp("401%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_482_0_2888: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  ImageBackground_I0_482_0_795: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_482_0_796: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_I0_482_0_2891: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_482_0_2889: {
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_482_0_2890: {
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
  View_0_485: {
    width: wp("26%"),
    height: hp("30%"),
    top: hp("472%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_485_0_2939: {
    flexGrow: 1,
    width: wp("26%"),
    height: hp("30%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2944: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("25%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_485_0_2943: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I0_485_0_2952: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2945: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2948: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2946: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2946: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2947: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2947: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2951: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2949: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2949: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2950: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2950: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2957: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2953: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2956: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2954: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2954: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2955: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2955: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3027: {
    flexGrow: 1,
    width: wp("25%"),
    height: hp("21%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2965: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2958: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2961: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2959: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2959: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I0_485_0_2960: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2964: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2962: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2962: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2963: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2963: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2970: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2966: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2969: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2967: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2967: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2968: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2968: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2978: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2971: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2974: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2972: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2972: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2973: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2973: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2977: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2975: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2975: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2976: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2976: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2986: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2979: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2982: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2980: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2980: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2981: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2981: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2985: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2983: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2983: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2984: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2984: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2994: {
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2987: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2990: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2988: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2988: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2989: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2989: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2993: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2991: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2991: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2992: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2992: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3002: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2995: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_2998: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2996: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2996: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_2997: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2997: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3001: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_2999: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_2999: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3000: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3000: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3010: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3003: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_3006: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3004: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3004: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3005: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3005: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3009: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3007: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3007: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3008: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3008: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3018: {
    width: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3011: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_3014: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3012: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3012: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3013: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3013: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3017: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3015: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3015: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3016: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3016: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3026: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3019: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_485_0_3022: {
    width: wp("8%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3020: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3020: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3021: {
    flexGrow: 1,
    width: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3021: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 8,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3025: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3023: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3023: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3024: {
    flexGrow: 1,
    width: wp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_485_0_3024: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 20,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I0_485_0_3040: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("24%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3039: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_485_0_3038: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_485_0_3028: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_485_0_3029: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I0_485_0_3030: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_485_0_3031: {
    width: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_485_0_3032: {
    width: wp("1%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_485_0_3033: {
    width: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  ImageBackground_I0_485_0_3034: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  ImageBackground_I0_485_0_3035: {
    width: wp("1%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  ImageBackground_I0_485_0_3036: {
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
  ImageBackground_I0_485_0_3037: {
    width: wp("1%"),
    minWidth: wp("1%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%")
  },
  View_0_488: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_488_0_3060: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_488_0_3061: {
    flexGrow: 1,
    width: wp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("3%"),
    justifyContent: "flex-start"
  },
  Text_I0_488_0_3061: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_491: {
    width: wp("11%"),
    height: hp("8%"),
    top: hp("504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I0_491_0_3050: {
    flexGrow: 1,
    width: wp("11%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I0_491_0_3052: {
    flexGrow: 1,
    width: wp("4%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_491_0_3051: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I0_491_0_3051: {
    color: "rgba(60, 60, 60, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
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
