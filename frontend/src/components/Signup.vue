<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <body id="fat_rabbit">
    <div class="wrapper">
      <div class="toppad">&nbsp;</div>

      <div class="flex_container blank_page clearfix">
        <a href="/"
          ><img
            height="200"
            width="200"
            class="envelope"
            src="https://assets.splitwise.com/assets/core/logo-square-65a6124237868b1d2ce2f5db2ab0b7c777e2348b797626816400534116ae22d7.svg"
        /></a>

        <div class="content-block">
          <h2>Introduce yourself</h2>

          <form
            @submit.prevent="Signup"
            class="form-stacked"
            id="new_user"
            accept-charset="UTF-8"
          >
            <input
              type="hidden"
              name="authenticity_token"
              value="E_twIPPNfOzI8AAvJPxOEV0Y-x1_DZXoH08QRUW2yHTQcoT22SvgjasjuS2EyGFMklQJh3sDUxdmQGGOLk5ySA"
              autocomplete="off"
            />
            <div style="font-size: 24px; line-height: 140%; margin: 16px 0 5px">
              Hi there! My name is
            </div>
            <input
              v-model="username"
              tabindex="1"
              autocomplete="off"
              style="font-size: 32px; height: 42px"
              onchange="showSecondaryFields()"
              onkeyup="showSecondaryFields()"
              type="text"
              value
              name="username"
            />

            <div class="secondary_fields" style="display: none">
              <div>
                Here’s my <strong>email address</strong>:
                <br />
                <input
                  v-model="email"
                  tabindex="2"
                  type="email"
                  name="email"
                  id="user_email"
                  value
                  required
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                  @input="validateEmail"
                />
              </div>

              <div>
                And here’s my <strong>password</strong>:
                <br />
                <input
                  v-model="password"
                  tabindex="3"
                  type="password"
                  name="password"
                  id="user_password"
                  value
                  ref="password"
                  @input="validatePassword"
                />
              </div>
              <div v-if="error" class="error">{{ error }}</div>
              <input
                autocomplete="off"
                type="hidden"
                name="user[referral_code]"
                id="user_referral_code"
              />
            </div>

            <div id="currency" style="display: none">
              And here’s the <strong>currency</strong> that I use:
              <br />
              <select
                class="modernized"
                name="user[default_currency]"
                id="user_default_currency"
              >
                <option value="AED">AED (DH)</option>
                <option value="AFN">AFN (Afs)</option>
                <option value="ALL">ALL (L)</option>
                <option value="AMD">AMD (AMD)</option>
                <option value="ANG">ANG (NAf)</option>
                <option value="AOA">AOA (Kz)</option>
                <option value="ARS">ARS ($)</option>
                <option value="AUD">AUD ($)</option>
                <option value="AWG">AWG (Afl.)</option>
                <option value="AZN">AZN (m.)</option>
                <option value="BAM">BAM (KM)</option>
                <option value="BBD">BBD ($)</option>
                <option value="BDT">BDT (Tk)</option>
                <option value="BGN">BGN (BGN)</option>
                <option value="BHD">BHD (BD)</option>
                <option value="BIF">BIF (FBu)</option>
                <option value="BND">BND (B$)</option>
                <option value="BOB">BOB (Bs.)</option>
                <option value="BRL">BRL (R$)</option>
                <option value="BTC">BTC (฿)</option>
                <option value="BTN">BTN (Nu.)</option>
                <option value="BWP">BWP (P)</option>
                <option value="BYN">BYN (Br)</option>
                <option value="BYR">BYR (BYR)</option>
                <option value="BZD">BZD (BZ$)</option>
                <option value="CAD">CAD ($)</option>
                <option value="CDF">CDF (FC)</option>
                <option value="CHF">CHF (Fr.)</option>
                <option value="CLP">CLP ($)</option>
                <option value="CMG">CMG (CMg)</option>
                <option value="CNY">CNY (¥)</option>
                <option value="COP">COP ($)</option>
                <option value="CRC">CRC (₡)</option>
                <option value="CUC">CUC (CUC$)</option>
                <option value="CUP">CUP ($)</option>
                <option value="CVE">CVE ($)</option>
                <option value="CZK">CZK (Kč)</option>
                <option value="DJF">DJF (Fdj )</option>
                <option value="DKK">DKK (kr)</option>
                <option value="DOP">DOP ($)</option>
                <option value="DZD">DZD (DA)</option>
                <option value="EGP">EGP (E£)</option>
                <option value="ETB">ETB (Br)</option>
                <option value="EUR">EUR (€)</option>
                <option value="FJD">FJD ($)</option>
                <option value="GBP">GBP (£)</option>
                <option value="GEL">GEL (GEL)</option>
                <option value="GHS">GHS (GH₵)</option>
                <option value="GMD">GMD (D)</option>
                <option value="GTQ">GTQ (Q)</option>
                <option value="GYD">GYD (G$)</option>
                <option value="HKD">HKD ($)</option>
                <option value="HNL">HNL (L)</option>
                <option value="HRK">HRK (HRK)</option>
                <option value="HTG">HTG (G)</option>
                <option value="HUF">HUF (Ft)</option>
                <option value="IDR">IDR (Rp )</option>
                <option value="ILS">ILS (₪)</option>
                <option value="INR">INR (₹)</option>
                <option value="IQD">IQD (IQD)</option>
                <option value="IRR">IRR (IRR)</option>
                <option value="ISK">ISK (kr)</option>
                <option value="JMD">JMD (J$)</option>
                <option value="JOD">JOD (JOD)</option>
                <option value="JPY">JPY (¥)</option>
                <option value="KES">KES (KSh)</option>
                <option value="KGS">KGS (KGS)</option>
                <option value="KHR">KHR (៛)</option>
                <option value="KMF">KMF (CF)</option>
                <option value="KRW">KRW (₩)</option>
                <option value="KWD">KWD (KWD)</option>
                <option value="KYD">KYD (CI$)</option>
                <option value="KZT">KZT (₸)</option>
                <option value="LAK">LAK (₭)</option>
                <option value="LBP">LBP (ل.ل)</option>
                <option value="LKR">LKR (Rs. )</option>
                <option value="LTL">LTL (Lt )</option>
                <option value="LYD">LYD (LD)</option>
                <option value="MAD">MAD (MAD)</option>
                <option value="MDL">MDL (MDL)</option>
                <option value="MGA">MGA (Ar)</option>
                <option value="MKD">MKD (ден)</option>
                <option value="MMK">MMK (K)</option>
                <option value="MNT">MNT (₮)</option>
                <option value="MOP">MOP (MOP$)</option>
                <option value="MUR">MUR (₨)</option>
                <option value="MVR">MVR (MVR)</option>
                <option value="MWK">MWK (K)</option>
                <option value="MXN">MXN ($)</option>
                <option value="MYR">MYR (RM)</option>
                <option value="MZN">MZN (MT)</option>
                <option value="NAD">NAD ($)</option>
                <option value="NGN">NGN (₦)</option>
                <option value="NIO">NIO (C$)</option>
                <option value="NOK">NOK (kr)</option>
                <option value="NPR">NPR (Rs. )</option>
                <option value="NZD">NZD ($)</option>
                <option value="OMR">OMR (OMR)</option>
                <option value="PAB">PAB (B/. )</option>
                <option value="PEN">PEN (S/. )</option>
                <option value="PGK">PGK (K)</option>
                <option value="PHP">PHP (₱)</option>
                <option value="PKR">PKR (Rs)</option>
                <option value="PLN">PLN (PLN)</option>
                <option value="PYG">PYG (₲)</option>
                <option value="QAR">QAR (QR)</option>
                <option value="RON">RON (RON)</option>
                <option value="RSD">RSD (RSD)</option>
                <option value="RUB">RUB (₽)</option>
                <option value="RWF">RWF (FRw)</option>
                <option value="SAR">SAR (SR)</option>
                <option value="SBD">SBD (SI$)</option>
                <option value="SCR">SCR (SR)</option>
                <option value="SDG">SDG (SDG)</option>
                <option value="SEK">SEK (kr)</option>
                <option value="SGD">SGD ($)</option>
                <option value="SLL">SLL (Le)</option>
                <option value="SRD">SRD ($)</option>
                <option value="STD">STD (Db)</option>
                <option value="STN">STN (nDb)</option>
                <option value="SYP">SYP (£S)</option>
                <option value="SZL">SZL (E)</option>
                <option value="THB">THB (฿)</option>
                <option value="TJS">TJS (TJS)</option>
                <option value="TMT">TMT (T)</option>
                <option value="TND">TND (DT)</option>
                <option value="TOP">TOP (T$)</option>
                <option value="TRY">TRY (TL)</option>
                <option value="TTD">TTD (TT$)</option>
                <option value="TWD">TWD (NT$)</option>
                <option value="TZS">TZS (TZS)</option>
                <option value="UAH">UAH (₴)</option>
                <option value="UGX">UGX (USh)</option>
                <option selected="selected" value="USD">USD ($)</option>
                <option value="UYU">UYU ($)</option>
                <option value="UZS">UZS (UZS)</option>
                <option value="VEF">VEF (Bs)</option>
                <option value="VND">VND (₫)</option>
                <option value="VUV">VUV (Vt)</option>
                <option value="WST">WST (WS$)</option>
                <option value="XAF">XAF (CFA)</option>
                <option value="XCD">XCD (EC$)</option>
                <option value="XOF">XOF (CFA)</option>
                <option value="XPF">XPF (F)</option>
                <option value="YER">YER (YER)</option>
                <option value="ZAR">ZAR (R)</option>
                <option value="ZMW">ZMW (ZMW)</option>
                <option value="ZWL">ZWL (Z$)</option>
              </select>
            </div>

            <div style="position: relative; margin-top: -3px">
              <input
                type="submit"
                name="commit"
                value="Sign me up!"
                class="btn btn-large btn-orange"
                autocomplete="off"
                style="padding: 11px 15px"
              />

              <div
                style="
                  position: absolute;
                  top: 24px;
                  right: 8px;
                  text-align: right;
                  font-size: 14px;
                  color: #999;
                  line-height: 14px;
                "
              >
                or&nbsp;&nbsp;
                <a
                  class="btn btn-large btn-signup btn-google"
                  rel="nofollow"
                  data-method="post"
                  href="/auth/google_oauth2"
                >
                  <img
                    src="https://assets.splitwise.com/assets/fat_rabbit/signup/google-2017-a5b76a1c1eebd99689b571954b1ed40e13338b8a08d6649ffc5ca2ea1bfcb953.png"
                  />
                  Sign up with Google
                </a>
              </div>
            </div>

            <div class="tos_acceptance">
              <a target="_blank" rel="noopener" href="/terms"
                >By signing up, you accept the Splitwise Terms of Service.</a
              >
            </div>

            <div
              class="secondary_fields"
              style="
                font-size: 14px;
                margin-top: 10px;
                color: #999;
                display: none;
              "
            >
              Don't use USD for currency?
              <a href="#" onclick="$('#currency').slideDown(); return false"
                >Click here</a
              >.
            </div>
          </form>
        </div>
      </div>
    </div>

    <component
      v-bind:is="'script'"
      src="//ssl.google-analytics.com/ga.js"
    ></component
    ><component
      v-bind:is="'script'"
      src="https://assets.splitwise.com/assets/adorable-b960a11fdc7d5dec89170a8fa687a3a18bffc07dd0eda0a16c388f9bd1345c0e.js"
    ></component>
    <component v-bind:is="'script'">
      $(document).ready(function() {
      initTranslations({"errors":{"messages":{"carrierwave_processing_error":"failed
      to be processed","carrierwave_integrity_error":"is not of an allowed file
      type","carrierwave_download_error":"could not be
      downloaded","extension_allowlist_error":"You are not allowed to upload
      %{extension} files. Allowed file types include
      %{allowed_types}.","extension_denylist_error":"You are not allowed to
      upload %{extension} files, prohibited types:
      %{prohibited_types}","content_type_allowlist_error":"You are not allowed
      to upload %{content_type} files, allowed types:
      %{allowed_types}","content_type_denylist_error":"You are not allowed to
      upload %{content_type} files","rmagick_processing_error":"Failed to
      manipulate with rmagick, maybe it is not an
      image?","mini_magick_processing_error":"Failed to manipulate with
      MiniMagick, maybe it is not an image? Original Error:
      %{e}","vips_processing_error":"Failed to manipulate with vips, maybe it is
      not an image? Original Error: %{e}","min_size_error":"File size should be
      greater than %{min_size}","max_size_error":"File size should be less than
      %{max_size}","model_invalid":"Validation failed:
      %{errors}","inclusion":"is not included in the list","exclusion":"is
      reserved","invalid":"is invalid","confirmation":"doesn't match
      %{attribute}","accepted":"must be accepted","empty":"can't be
      empty","blank":"can't be blank","present":"must be
      blank","too_long":{"one":"is too long (maximum is 1
      character)","other":"is too long (maximum is %{count}
      characters)"},"too_short":{"one":"is too short (minimum is 1
      character)","other":"is too short (minimum is %{count}
      characters)"},"wrong_length":{"one":"is the wrong length (should be 1
      character)","other":"is the wrong length (should be %{count}
      characters)"},"not_a_number":"is not a number","not_an_integer":"must be
      an integer","greater_than":"must be greater than
      %{count}","greater_than_or_equal_to":"must be greater than or equal to
      %{count}","equal_to":"must be equal to %{count}","less_than":"must be less
      than %{count}","less_than_or_equal_to":"must be less than or equal to
      %{count}","other_than":"must be other than %{count}","odd":"must be
      odd","even":"must be even","required":"must exist","taken":"has already
      been taken","mime_types_processing_error":"Failed to process file with
      MIME::Types, maybe not valid content-type?"},"format":"%{attribute}
      %{message}","template":{"body":"There were problems with the following
      fields:","header":{"one":"1 error prohibited this %{model} from being
      saved","other":"%{count} errors prohibited this %{model} from being
      saved"}}},"date":{"formats":{"default":"%Y-%m-%d","short":"%b
      %d","long":"%B %d,
      %Y","input":"%m/%d/%Y","table":"%m/%d","statement":"%Y-%m"},"day_names":["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],"abbr_day_names":["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],"month_names":[null,"January","February","March","April","May","June","July","August","September","October","November","December"],"abbr_month_names":[null,"Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],"order":["year","month","day"]},"time":{"formats":{"default":"%a,
      %d %b %Y %H:%M:%S %z","short":"%d %b %H:%M","long":"%B %d, %Y
      %H:%M","input":"%m/%d/%Y","table":"%m/%d","admin":"%Y-%m-%d
      %l:%M%P","statement":"%Y-%m"},"am":"am","pm":"pm"},"support":{"array":{"words_connector":",
      ","two_words_connector":" and ","last_word_connector":", and
      "}},"number":{"format":{"separator":".","delimiter":",","precision":2,"round_mode":"default","significant":false,"strip_insignificant_zeros":false},"currency":{"format":{"format":"%u%n","unit":"$","separator":".","delimiter":",","precision":2,"significant":false,"strip_insignificant_zeros":false}},"percentage":{"format":{"delimiter":"","format":"%n%"}},"precision":{"format":{"delimiter":""}},"human":{"format":{"delimiter":"","precision":3,"significant":true,"strip_insignificant_zeros":true},"storage_units":{"format":"%n
      %u","units":{"byte":{"one":"Byte","other":"Bytes"},"kb":"KB","mb":"MB","gb":"GB","tb":"TB","pb":"PB","eb":"EB"}},"decimal_units":{"format":"%n
      %u","units":{"unit":"","thousand":"Thousand","million":"Million","billion":"Billion","trillion":"Trillion","quadrillion":"Quadrillion"}}},"nth":{"ordinals":{},"ordinalized":{}}},"activerecord":{"errors":{"messages":{"record_invalid":"Validation
      failed: %{errors}","restrict_dependent_destroy":{"has_one":"Cannot delete
      record because a dependent %{record} exists","has_many":"Cannot delete
      record because dependent %{record}
      exist"}},"models":{"user":{"attributes":{"email":{"taken":"has already
      been taken"}}}}}},"datetime":{"distance_in_words":{"half_a_minute":"half a
      minute","less_than_x_seconds":{"one":"less than 1 second","other":"less
      than %{count} seconds"},"x_seconds":{"one":"1 second","other":"%{count}
      seconds"},"less_than_x_minutes":{"one":"less than a minute","other":"less
      than %{count} minutes"},"x_minutes":{"one":"1 minute","other":"%{count}
      minutes"},"about_x_hours":{"one":"about 1 hour","other":"about %{count}
      hours"},"x_days":{"one":"1 day","other":"%{count}
      days"},"about_x_months":{"one":"about 1 month","other":"about %{count}
      months"},"x_months":{"one":"1 month","other":"%{count}
      months"},"about_x_years":{"one":"about 1 year","other":"about %{count}
      years"},"over_x_years":{"one":"over 1 year","other":"over %{count}
      years"},"almost_x_years":{"one":"almost 1 year","other":"almost %{count}
      years"},"x_years":{"one":"1 year","other":"%{count}
      years"}},"prompts":{"year":"Year","month":"Month","day":"Day","hour":"Hour","minute":"Minute","second":"Second"}},"helpers":{"select":{"prompt":"Please
      select"},"submit":{"create":"Create %{model}","update":"Update
      %{model}","submit":"Save %{model}"}},"countries":{"AC":"Ascension
      Island","AD":"Andorra","AE":"United Arab
      Emirates","AF":"Afghanistan","AG":"Antigua \u0026
      Barbuda","AI":"Anguilla","AL":"Albania","AM":"Armenia","AN":"Netherlands
      Antilles","AO":"Angola","AQ":"Antarctica","AR":"Argentina","AS":"American
      Samoa","AT":"Austria","AU":"Australia","AW":"Aruba","AX":"Åland
      Islands","AZ":"Azerbaijan","BA":"Bosnia \u0026
      Herzegovina","BB":"Barbados","BD":"Bangladesh","BE":"Belgium","BF":"Burkina
      Faso","BG":"Bulgaria","BH":"Bahrain","BI":"Burundi","BJ":"Benin","BL":"St.
      Barthélemy","BM":"Bermuda","BN":"Brunei","BO":"Bolivia","BQ":"Caribbean
      Netherlands","BR":"Brazil","BS":"Bahamas","BT":"Bhutan","BV":"Bouvet
      Island","BW":"Botswana","BY":"Belarus","BZ":"Belize","CA":"Canada","CC":"Cocos
      (Keeling) Islands","CD":"Congo - Kinshasa","CF":"Central African
      Republic","CG":"Congo - Brazzaville","CH":"Switzerland","CI":"Côte
      d’Ivoire","CK":"Cook
      Islands","CL":"Chile","CM":"Cameroon","CN":"China","CO":"Colombia","CP":"Clipperton
      Island","CR":"Costa Rica","CU":"Cuba","CV":"Cape
      Verde","CW":"Curaçao","CX":"Christmas Island","CY":"Cyprus","CZ":"Czech
      Republic","DE":"Germany","DG":"Diego
      Garcia","DJ":"Djibouti","DK":"Denmark","DM":"Dominica","DO":"Dominican
      Republic","DZ":"Algeria","EA":"Ceuta \u0026
      Melilla","EC":"Ecuador","EE":"Estonia","EG":"Egypt","EH":"Western
      Sahara","ER":"Eritrea","ES":"Spain","ET":"Ethiopia","EU":"European
      Union","FI":"Finland","FJ":"Fiji","FK":"Falkland
      Islands","FM":"Micronesia","FO":"Faroe
      Islands","FR":"France","GA":"Gabon","GB":"United
      Kingdom","GD":"Grenada","GE":"Georgia","GF":"French
      Guiana","GG":"Guernsey","GH":"Ghana","GI":"Gibraltar","GL":"Greenland","GM":"Gambia","GN":"Guinea","GP":"Guadeloupe","GQ":"Equatorial
      Guinea","GR":"Greece","GS":"South Georgia \u0026 South Sandwich
      Islands","GT":"Guatemala","GU":"Guam","GW":"Guinea-Bissau","GY":"Guyana","HK":"Hong
      Kong SAR China","HM":"Heard \u0026 McDonald
      Islands","HN":"Honduras","HR":"Croatia","HT":"Haiti","HU":"Hungary","IC":"Canary
      Islands","ID":"Indonesia","IE":"Ireland","IL":"Israel","IM":"Isle of
      Man","IN":"India","IO":"British Indian Ocean
      Territory","IQ":"Iraq","IR":"Iran","IS":"Iceland","IT":"Italy","JE":"Jersey","JM":"Jamaica","JO":"Jordan","JP":"Japan","KE":"Kenya","KG":"Kyrgyzstan","KH":"Cambodia","KI":"Kiribati","KM":"Comoros","KN":"St.
      Kitts \u0026 Nevis","KP":"North Korea","KR":"South
      Korea","KW":"Kuwait","KY":"Cayman
      Islands","KZ":"Kazakhstan","LA":"Laos","LB":"Lebanon","LC":"St.
      Lucia","LI":"Liechtenstein","LK":"Sri
      Lanka","LR":"Liberia","LS":"Lesotho","LT":"Lithuania","LU":"Luxembourg","LV":"Latvia","LY":"Libya","MA":"Morocco","MC":"Monaco","MD":"Moldova","ME":"Montenegro","MF":"St.
      Martin","MG":"Madagascar","MH":"Marshall
      Islands","MK":"Macedonia","ML":"Mali","MM":"Myanmar
      (Burma)","MN":"Mongolia","MO":"Macau SAR China","MP":"Northern Mariana
      Islands","MQ":"Martinique","MR":"Mauritania","MS":"Montserrat","MT":"Malta","MU":"Mauritius","MV":"Maldives","MW":"Malawi","MX":"Mexico","MY":"Malaysia","MZ":"Mozambique","NA":"Namibia","NC":"New
      Caledonia","NE":"Niger","NF":"Norfolk
      Island","NG":"Nigeria","NI":"Nicaragua","NL":"Netherlands","NO":"Norway","NP":"Nepal","NR":"Nauru","NU":"Niue","NZ":"New
      Zealand","OM":"Oman","PA":"Panama","PE":"Peru","PF":"French
      Polynesia","PG":"Papua New
      Guinea","PH":"Philippines","PK":"Pakistan","PL":"Poland","PM":"St. Pierre
      \u0026 Miquelon","PN":"Pitcairn Islands","PR":"Puerto
      Rico","PS":"Palestinian
      Territories","PT":"Portugal","PW":"Palau","PY":"Paraguay","QA":"Qatar","QO":"Outlying
      Oceania","RE":"Réunion","RO":"Romania","RS":"Serbia","RU":"Russia","RW":"Rwanda","SA":"Saudi
      Arabia","SB":"Solomon
      Islands","SC":"Seychelles","SD":"Sudan","SE":"Sweden","SG":"Singapore","SH":"St.
      Helena","SI":"Slovenia","SJ":"Svalbard \u0026 Jan
      Mayen","SK":"Slovakia","SL":"Sierra Leone","SM":"San
      Marino","SN":"Senegal","SO":"Somalia","SR":"Suriname","SS":"South
      Sudan","ST":"São Tomé \u0026 Príncipe","SV":"El Salvador","SX":"Saint
      Martin","SY":"Syria","SZ":"Swaziland","TA":"Tristan da Cunha","TC":"Turks
      \u0026 Caicos Islands","TD":"Chad","TF":"French Southern
      Territories","TG":"Togo","TH":"Thailand","TJ":"Tajikistan","TK":"Tokelau","TL":"Timor-Leste","TM":"Turkmenistan","TN":"Tunisia","TO":"Tonga","TR":"Turkey","TT":"Trinidad
      \u0026
      Tobago","TV":"Tuvalu","TW":"Taiwan","TZ":"Tanzania","UA":"Ukraine","UG":"Uganda","UM":"U.S.
      Outlying Islands","US":"United
      States","UY":"Uruguay","UZ":"Uzbekistan","VA":"Vatican City","VC":"St.
      Vincent \u0026 Grenadines","VE":"Venezuela","VG":"British Virgin
      Islands","VI":"U.S. Virgin
      Islands","VN":"Vietnam","VU":"Vanuatu","WF":"Wallis \u0026
      Futuna","WS":"Samoa","XK":"Kosovo","YE":"Yemen","YT":"Mayotte","ZA":"South
      Africa","ZM":"Zambia","ZW":"Zimbabwe"},"i18n":{"plural":{"keys":["one","other"],"rule":{}}},"recaptcha":{"errors":{"verification_failed":"reCAPTCHA
      verification failed, please try again.","recaptcha_unreachable":"Oops, we
      failed to validate your reCAPTCHA response. Please try
      again."}},"stripe":{"errors":{"incorrect_number":"The card number is
      incorrect.","invalid_number":"The card number is not a valid credit card
      number.","invalid_expiry_month":"The card's expiration month is
      invalid.","invalid_expiry_year":"The card's expiration year is
      invalid.","invalid_cvc":"The card's security code is
      invalid.","expired_card":"The card has expired.","incorrect_cvc":"The
      card's security code is incorrect.","incorrect_zip":"The card's zip code
      failed validation.","card_declined":"The card was
      declined.","missing":"There is no card on a customer that is being
      charged.","processing_error":"An error occurred while processing the
      card.","rate_limit":"An error occurred due to requests hitting the API too
      quickly. Please let us know if you're consistently running into this
      error."}},"_native_language":"English","passcode_failed_once":"1 passcode
      failed attempt","about_simplified_debts":"About simplified
      debts","account_settings":"Account
      settings","activity":"Activity","add":"Add","add_a_bill":"Add an
      expense","add_expenses":"Add expenses","add_image_or_notes":"Add
      image/notes","add_a_comment":"Add a comment","add_a_group_trip":"Add a
      group trip","add_a_person":"Add a person","add_friends_on_splitwise":"Add
      friends on Splitwise","add_group_member":"Add group
      member","add_members":"Add members","add_more_friends":"Add more
      friends","add_notes":"Add notes","add_your_apartment":"Add your
      apartment","added_by_PERSON_on_DATE":"Added by %1$@ on
      %2$@","added_by_you_on_DATE":"Added by you on
      %@","adding":"Adding","advanced_settings":"Advanced
      settings","advanced_features":"Advanced
      features","advanced_features_tagline":"Most users don’t need these
      features – but here they are in case you
      do!","all":"All","all_expenses":"All expenses","all_of_GROUP":"All of
      %@","all_time":"All time","AMOUNT_left":"%@
      left","AMOUNT_per_person":"%@/person","an_unexpected_NUMBER_server_error_occured":"An
      unexpected %@ server error occurred. Please try again or contact us if you
      have repeated issues. Sorry for the
      inconvenience!","an_unknown_error_occured":"An unknown error
      occurred.","an_unknown_quickadd_problem_occured":"An unknown problem
      occurred. Splitwise may not have been able to understand your
      message.","and":"and","and_split":"and
      split","apartment":"Apartment","are_you_absolutely_sure_you_want_to_delete_this_group":"Are
      you ABSOLUTELY sure you want to delete this group? This will remove this
      group for ALL users involved, not just
      yourself.","are_you_sure_you_want_to_delete_this_expense":"Are you sure
      you want to delete this expense? This will remove this expense for ALL
      people involved, not just
      you.","are_you_sure_you_want_to_delete_this_friend":"Are you sure you want
      to delete this friend? This will delete all the expenses you've shared
      with them. Additionally, a note that you've removed them will will be
      added to their Recent Activity
      feed.","are_you_sure_you_want_to_delete_this_payment":"Are you sure you
      want to delete this payment?","are_you_sure_you_want_to_log_out":"Are you
      sure you want to log
      out?","are_you_sure_you_want_to_remove_this_person_from_this_group":"Are
      you sure you want to remove this person from this
      group?","are_you_sure_you_want_to_undelete_this_expense":"Are you sure you
      want to undelete this
      expense?","are_you_sure_you_want_to_undelete_this_payment":"Are you sure
      you want to undelete this
      payment?","back":"Back","balances":"Balances","before_you_use_quick_add_please_select_a_group_by_hitting_the_gray_button":"Before
      you use quick-add, please select a group by hitting the gray
      button.","cancel":"Cancel","category":"Category","change":"Change","change_passcode":"Change
      passcode","checkmark_expense_saved":"✓ Expense
      saved!","choose_payer":"Choose payer","choose_a_person":"Choose a
      person","choose_a_recipient":"Choose a
      recipient","choose_a_payment_method":"Choose a payment
      method","each_person_paid_own_share":"Each person paid for their own
      share","each_person_gets_back":"Each person gets
      back","choose_date":"Choose date","choose_from_library":"Choose from
      Library","choose_group":"Choose group","choose_split_options":"Choose
      split
      options","close":"Close","comments":"Comments","confirmation":"Confirmation","confirmation_pending":"Confirmation
      pending","confirm_convert_group_to_CURRENCY":"This will convert all
      transactions in this group to %@ (your default currency) at the current
      international exchange rate. This action cannot be reversed. Are you sure
      you wish to continue?","convert_all_bills_to_CURRENCY":"Convert all
      expenses to %@","contact_us":"Contact us","create_a_group":"Create a
      group","currency":"Currency","i_currently_owe_you_BALANCE":"I currently
      owe you %@.","default_currency":"Default
      currency","delete_expense":"Delete expense","delete_friend":"Delete
      friend","delete_group":"Delete group","delete_payment":"Delete
      payment","deleted":"Deleted","deleting":"Deleting","details":"Details","do_this_later":"I'll
      do this later","done":"Done","edit_bill":"Edit
      expense","edit_payment":"Edit payment","email_address":"Email
      address","enter_a_decomponent ion":"Enter a decomponent
      ion","enter_a_decomponent ion__short":"Enter a decomponent
      ion","enter_a_group_name":"Enter a group
      name","enter_a_name_for_this_person":"Enter a name for this
      person","we_will_send_them_a_link_via_sms":"We'll send them a link via
      SMS","we_will_send_them_a_link":"We'll send them a
      link","enter_a_phone_number":"Enter a phone
      number","enter_a_reason_for_this_payment":"Enter a reason for this
      payment","enter_an_email_address":"Enter an email
      address","enter_an_email_address_or_phone_number_for_this_person":"Enter
      an email address or phone number for this
      person","enter_name_email_or_phone":"Enter name, email, or phone
      #","enter_names_emails_or_phone_numbers":"Enter names, emails, or phone
      #s","enter_paid_amounts":"Enter paid
      amounts","equally":"Equally","money_received_by":"Money received
      by","error":"Error","error_MESSAGE":"Error:
      %@","example_electric_bill":"Example: Electric bill
      $80","expense_details":"Expense details","expense_added":"Expense
      added","export_as_spreadsheet":"Export as
      spreadsheet","failed_to_sync":"Failed to sync","N_days_early":"%@ days
      early","for_bills_on_splitwise":"For bills on
      splitwise.com","for_debts_in_GROUP":"For debts in
      %@","forgot_your_password":"Forgot your
      password?","fortnightly":"Fortnightly","friend_settings":"Friend
      settings","friends":"Friends","from_your_contacts":"From your
      contacts","full_name":"Full name","generating_spreadsheet":"Generating
      spreadsheet","gets_back":"gets
      back","go_to_a_specific_friend_or_group_first":"Go to a specific friend or
      group first, then long-press the plus button.","go_to_paypal":"Go to
      PayPal.com?","groceries_20_dollars":"Groceries
      $20","group_settings":"Group settings","group_balances":"Group
      balances","group_members":"Group
      members","groups":"Groups","groups_make_it_easy_to_split_apartment_bills":"Groups
      make it easy to split apartment bills, share travel expenses, and
      more.","hey_friends_join_my_GROUP_on_splitwise_LINK__sms":"Hey friends!
      Join my group '%1$@' on Splitwise:
      %2$@","home_house":"Home","home_page":"Home","house":"House","i_use_CODE_SYMBOL_as_my_currency":"I
      use %1$@ (%2$@) as my currency.","image_uploaded":"Image
      uploaded!","invalid_api_request":"Invalid API Request. If this seems
      weird, or persists, sorry! You can shoot us an email at app@splitwise.com
      and we’ll see if we can fix the bug.","invalid_phone_alert":"You did not
      enter a valid phone number. Please try
      again.","invalid_email_alert":"Please enter a valid email
      address.","invalid_email_or_phone_alert":"You did not enter a valid email
      address or phone number. Please try
      again.","invalid_value_try_again":"Invalid value – please try
      again.","invite":"Invite","invite_a_friend_to_splitwise":"Invite a friend
      to Splitwise","invite_pending":"Invite
      pending","invite_PERSON_to_splitwise":"Invite %@ to
      Splitwise","just_this_once":"Just this
      once","kittens":"Kittens!","last_month":"Last
      month","last_updated_on_DATE__legacy":"Last updated on
      %@","last_updated_by_you_on_DATE":"Last updated by you on
      %@","last_updated_by_PERSON_on_DATE":"Last updated by %1$@ on
      %2$@","lets_get_started":"Let's get
      started","lets_get_you_set_up_NAME":"Let’s get you set up,
      %@","lets_settle_up_the_next_time_we_see_each_other":"Let's settle up the
      next time we see each other.","already_have_an_account":"Already have a
      Splitwise
      account?","would_you_like_to_merge_ACCOUNT_into_ACCOUNT_html":"This invite
      is for %1$@, but you’re already signed in as %2$@.\n\nWould you like to
      merge accounts and accept this invite as %2$@?","yes_merge_accounts":"Yes,
      merge the accounts","no_do_not_merge_accounts":"No, treat them
      separately","loading":"Loading","log_in":"Log
      in","log_in_to_splitwise":"Log in to Splitwise","log_out":"Log
      out","logged_in_as__header":"Logged in as","logged_out":"logged
      out","logging_in":"Logging in","made_with_smiles_in_YEAR_KITTENS":"Made
      with :) in Providence, RI, USA\nCopyright © %1$@ Splitwise, Inc.\nP.S.
      %2$@","made_with_smiles_KITTENS":"Made with :) in Providence, RI,
      USA\nCopyright © 2015 Splitwise, Inc.\nP.S.
      %@","monthly":"Monthly","more":"More","more_options":"More
      options","multiple_people":"Multiple
      people","next":"Next","next_payment_due_DATE":"Next payment due
      %@","non_group_expenses__short":"No group","no_balance__cell":"no
      balance","no_email_address":"No email address","no_expenses__cell":"no
      expenses","no_expenses__friend":"no expenses","no_expenses__group":"no
      expenses","no_reminder":"No reminder","non_group_expenses":"Non-group
      expenses","none_of_the_people_on_this_expense_are_in_GROUP":"None of the
      people on this expense are in the group '%@'. Please choose a different
      group.","not_able_to_access_this_group":"You're not able to access this
      group. You may have been removed from the group or it may have been
      deleted.","not_in_a_group":"Not in a group","not_involved__cell":"not
      involved","note_paypal_payments_via_debit_or_credit_card_incur_fees":"When
      you use a payment service, your payment is shared with that company under
      its Privacy Policy and Terms, including any fees if applicable. Splitwise
      charges no additional
      fees.","notes":"Notes","notification_settings":"Notification
      settings","passcode_failed_N_times":"%@ passcode failed
      attempts","N_people":"%@ people","N_people_paid_AMOUNT":"%1$@ people paid
      %2$@","N_people_who_owe_you_AMOUNT":"%1$@ people owe you
      %2$@","ok":"OK","on_splitwise_you_can_add_expenses_that_dont_belong_to_any_group":"On
      Splitwise, you can add expenses that don't belong to any group – for
      example, lunch with a friend.\n\nYou can view all these expenses from the
      ‘Non-group expenses’ section of the Groups tab.","on_the_day_of":"On the
      day of","one_day_early":"1 day early","one_week_early":"1 week
      early","oops":"Oops","oops_looks_like_youre_logged_out_of_splitwise":"Oops!
      Looks like you're logged out of
      Splitwise.","or":"or","other":"Other","owes_you__cell_friend":"owes
      you","owes_you__cell_group":"you are owed","owes_you_AMOUNT":"owes you
      %@","paid_by__legacy":"Paid by","paid_by_PERSON":"Paid by
      %@","paid_by_the_other_person_and_split_equally":"Paid by the other person
      and split equally","paid_by_you":"Paid by
      you","paid_by_you_and_split_equally":"Paid by you and split
      equally","fallback_person_name":"the other
      person","passcode":"Passcode","passcodes_did_not_match":"Passcodes did not
      match. Try again.","pay_your_friends_back_any_time":"Pay your friends back
      any time","PERSON_paid_PERSON_AMOUNT":"%1$@ paid %2$@
      %3$@","PERSON_paid_PERSON_AMOUNT_for_DEcomponent ION":"%1$@ paid %2$@ %3$@
      for
      ‘%4$@’","payment":"Payment","payments":"Payments","paypal_only_allows_payments_up_to_500_per_week":"PayPal
      only allows payments up to $500 per week. Sorry :(","PERCENT_left":"%@%
      left","PERCENT_over":"%@% over","PERSON_is_sending_PERSON":"%1$@ is
      sending %2$@","you_are_sending_PERSON":"You are sending
      %@","PERSON_paid_PERSON":"%1$@ paid %2$@","you_are_not_involved":"You are
      not involved","PERSON_is_not_involved":"%@ is not
      involved","PERSON_is_settled_up":"%@ is settled
      up","PERSON_paid_AMOUNT":"%1$@ paid %2$@","phone_optional":"Phone #
      (optional)","plus_N_other_balances":"Plus %@ other
      balances","post":"Post","processing_expenses":"Processing
      expenses","rate_splitwise":"Rate
      Splitwise","receipt":"Receipt","recent":"Recent","recent_activity":"Recent
      activity","record_a_cash_payment":"Record a cash
      payment","refreshing":"Refreshing","remind":"Remind","reminder":"Reminder","reminder_sent":"Reminder
      sent","reminder_text_NAME_owes_me_AMOUNT":"Hey %1$@,\n\nI just wanted to
      note that you currently owe me
      %2$@.","reminder_text_i_owe_NAME_AMOUNT":"Hey %1$@,\n\nI just wanted to
      note that I currently owe you
      %2$@.","reminder_text_NAME_owes_me_AMOUNT_in_GROUP":"Hey %1$@,\n\nI just
      wanted to note that you currently owe me %2$@ in the group
      ‘%3$@’.","reminder_text_i_owe_NAME_AMOUNT_in_GROUP":"Hey %1$@,\n\nI just
      wanted to note that I currently owe you %2$@ in the group
      ‘%3$@’.","reminder_text_NAME_owes_NAME_AMOUNT_in_GROUP":"Hey %1$@ and
      %2$@,\n\nI just wanted to note that %1$@ currently owes %2$@ %3$@ in the
      group ‘%4$@’.","remove_group_member":"Remove group
      member","removing":"Removing","repeats":"Repeats","repeats_interval":"Repeats
      %@","request_money_with_venmo":"Request money with
      Venmo","resend_invite":"Resend invite","reset_password":"Reset
      password","save":"Save","save_and_resend_invite":"Save \u0026 resend
      invite","save_and_send_invite":"Save \u0026 send
      invite","saving":"Saving","search":"Search","search_by_name":"Search by
      name","send":"Send","send_a_reminder_ON_DATE":"Send a reminder
      %@","send_an_invite_to_this_email_address":"Send an invite to this email
      address","send_an_invite_to_this_number":"Send an invite to this
      number","send_reminder":"Send
      reminder","sending":"Sending","sending_you_back_to_the_home_screen":"We're
      sending you back to the home screen to refresh your data.
      Geronimo!","sent":"Sent","sent_via_METHOD":"Sent via
      %@","settings":"Settings","settle_up":"Settle
      up","settled_up__cell_friend":"settled
      up","settled_up__cell_group":"settled
      up","you_are_settled_up__watch_line_2":"settled up","share_a_link":"Share
      a link","share_or_shares":"Share(s)","shared_group":"Shared
      group","showing_all_outstanding_balances":"Showing all outstanding
      balances.","showing_only_groups_that_owe_you":"Showing only groups that
      owe you.","showing_only_groups_that_you_owe":"Showing only groups that you
      owe.","showing_only_people_that_owe_you":"Showing only people that owe
      you.","showing_only_people_that_you_owe":"Showing only people that you
      owe.","sign_up":"Sign
      up","simplify":"Simplify","simplify_group_debts":"Simplify group
      debts","simplify_debts_is_on_in_this_group":"Simplify debts is ON in this
      group","in_the_group_GROUP":"In the group
      ‘%@’","on__enabled":"On","off__disabled":"Off","simplify_debts_off_illustration_explanation":"Splitwise
      will not combine debts in this group, even if there are unnecessary extra
      payments.","simplify_debts_on_illustration_explanation":"Splitwise will
      automatically combine debts in this group to get rid of unnecessary extra
      payments.","sorry":"Sorry","split_by_exact_amounts":"Split by exact
      amounts","split_by_percentages":"Split by
      percentages","split_by_shares":"Split by
      shares","split_by_adjustment":"Split by
      adjustment","reimbursement":"Reimbursement","itemized_bill":"Itemized
      expense","split_equally":"Split equally","split_unequally":"Split
      unequally","split_the_bill":"Split the
      expense","splitwise_could_not_understand_your_message":"Splitwise could
      not understand your
      message.","splitwise_helps_you_split_bills_with_friends":"Splitwise helps
      you split bills with
      friends.","splitwise_is_temporarily_down_for_maintenance":"Splitwise is
      temporarily down for maintenance. Please check @splitwise on Twitter for
      updates. Sorry for the
      inconvenience!","splitwise_keeps_track_of_balances_between_friends":"Splitwise
      keeps track of balances between friends.","start_a_group":"Start a
      group","start_a_new_group":"Start a new group","still_working":"Still
      working","syncing":"Syncing","take_a_picture":"Take a
      picture","tap_anywhere_to_begin":"Tap anywhere to
      begin.","tap_to_show_old_settled_friends":"Tap to show old settled
      friends","tap_to_show_old_settled_groups":"Tap to show old settled
      groups","terms_of_service":"Terms of
      Service","thanks_person":"Thanks!\n%@","the_expense_could_not_be_deleted":"The
      expense '%1$@' could not be deleted:
      %2$@\nSorry!","the_math_for_this_expense_doesnt_add_up":"The math for this
      expense doesn't add up. Please double-check that you've entered the
      correct amounts for each
      person!","the_internet_connection_appears_to_be_offline":"The Internet
      connection appears to be offline. We will attempt to add this expense
      again when the device is
      online.","the_payment_values_do_not_add_up_to_COST":"The payment values do
      not add up to the total cost of
      %@.","there_is_no_activity_in_your_account_yet":"There is no activity in
      your account yet.\nTry adding an
      expense!","they_owe_the_full_amount":"They owe the full
      amount","this_group_is_a_default_group_created_by_splitwise":"This group
      is a default group created by Splitwise – you cannot change its settings.
      Sorry for the
      trouble!","this_expense_cannot_be_edited_while_splitwise_is_syncing_with_the_server":"This
      expense cannot be edited while Splitwise is syncing with the server.
      Please try again
      later.","this_expense_has_been_deleted_and_cannot_be_edited":"This expense
      has been deleted and cannot be edited. Undelete the expense if you would
      like to update it.","no_comments_yet":"No comments
      yet.","this_expense_has_not_yet_synced_with_the_server":"This expense has
      not yet synced with the server","this_feature_isnt_available":"This
      feature isn't available on iOS right now. Please sign up with your email
      address instead.","this_month":"This
      month","this_person_has_been_sent_an_invite_but_has_not_claimed_their_account_yet":"This
      person has been sent an invite, but has not claimed their account yet.
      They will not receive any messages from
      Splitwise.","this_person_has_been_sent_an_invite_but_has_not_yet_accepted_that_invite":"This
      person has been sent an invite, but has not yet accepted that invite. To
      send another invite to this person (or to send an invite to a different
      address), tap the settings icon in the
      upper-right.","this_person_has_not_been_invited_to_splitwise_yet":"This
      person has not been invited to Splitwise yet, and cannot receive any
      messages.","this_person_has_unsubscribed_from_all_splitwise_messages":"This
      person has unsubscribed from all Splitwise
      messages.","this_person_has_not_claimed_their_invite_click_to_update":"This
      person has been sent an invite, but has not claimed their account yet.
      Click to update their contact info or to re-send an invite
      message.","this_person_does_not_have_an_email_click_to_update":"This
      person does not have an email address, and will not receive notifications
      about expenses. Click to add an email address and send an invite to this
      person.","this_setting_automatically_combines_debts":"This setting
      automatically combines debts to reduce the total number of repayments
      between group members.\n\nFor example, if you owe Anna $10 and Anna owes
      Bob $10, a group with simplified debts will tell you to pay Bob $10
      directly.","to__email_field":"To:","today":"Today","tos_disclaimer":"By
      signing up, you accept the Splitwise Terms of
      Service.","total":"Total","total_AMOUNT_of_AMOUNT":"Total: %1$@ of
      %2$@","total_PERCENT_of_100":"Total: %@% of 100%","total_balance":"Total
      balance","total_balance__header":"total
      balance","total_group_spending":"Total group
      spending","total_you_paid_for":"Total you paid
      for","trip":"Trip","trying_to_use_quick_add":"Trying to use
      quick-add?","turn_off_passcode":"Turn off passcode","two_weeks_early":"2
      weeks early","unable_to_load_user":"Unable to load
      user","unable_to_parse_expense":"Unable to parse expense. Please make sure
      you've included both a decomponent ion and an
      amount.","unable_to_update_user":"Unable to update
      user","undelete_expense":"Undelete expense","undelete_payment":"Undelete
      payment","undeleting":"Undeleting","unequally":"Unequally","update_friend_info":"Update
      friend info","update_your_account_info":"Update your account
      info","uploading_image":"Uploading image","view_details":"View
      details","view_all_group_balances":"View all group
      balances","view_group_totals":"View group
      totals","weekly":"Weekly","welcome_to_splitwise_NAME":"Welcome to
      Splitwise,\n%@!","welcome_to_splitwise":"Welcome to
      Splitwise","what_would_you_like_to_do":"What would you like to
      do?","whats_this":"What’s this?","where_should_we_send_this_invite":"Where
      should we send this invite?","who_do_you_want_to_settle_up_with":"Who do
      you want to settle up with?","who_is_getting_paid":"Who is getting
      paid?","who_is_paying":"Who is
      paying?","whoops":"Whoops!","yearly":"Yearly","you__legacy":"you","you_and_PERSON_are_all_settled_up":"You
      and %@ are all settled up.","you_are_settled_up__watch_line_1":"you
      are","you_are_all_settled_up_for_these_expenses":"You are all settled up
      for these expenses.","you_are_all_settled_up_in_this_group":"You are all
      settled up in this group.","you_are_owed__header":"you are
      owed","you_are_over_by_AMOUNT":"You are over by
      %@.","you_are_short_by_AMOUNT":"You are short by
      %@.","you_are_the_only_one_here":"You’re the only one
      here!","you_borrowed__expense_cell":"you
      borrowed","you_can_only_include_one_group_in_an_expense":"You can only
      include one group in an
      expense.","you_can_split_expenses_with_groups_or_with_individuals":"You
      can split expenses with groups or with
      individuals.","you_cant_comment_on_a_deleted_expense":"You can't comment
      on a deleted expense. Undelete the expense if you would like to leave a
      comment.","you_do_not_have_any_groups_yet":"You do not have any groups
      yet.","you_have_balances_in_multiple_currencies":"* You have balances in
      multiple
      currencies.","this_group_has_balances_in_multiple_currencies":"This group
      has balances in multiple
      currencies.","you_have_not_added_any_friends_yet":"You have not added any
      friends yet.","you_have_not_entered_a_name_for_your_group_yet":"You
      haven't entered a name for your group
      yet!","you_just_added_your_first_non_group_expense":"You just added your
      first non-group expense!","you_lent__expense_cell":"you
      lent","you_lent_NAME__expense_cell":"you lent
      %@","you_may_not_enter_a_negative_amount_for_this_expense":"You may not
      enter a negative amount for this expense.","you_owe__header":"you
      owe","you_owe__friend":"you owe","you_owe__group":"you
      owe","you_owe_PERSON":"You owe %@","you_owe_PERSON_AMOUNT":"You owe %1$@
      %2$@","you_owe_the_full_amount":"You owe the full
      amount","you_paid_for_yourself":"You paid for
      yourself","you_paid_PERSON":"You paid %@","you_were_not_involved":"You
      were not involved","your_account":"Your
      account","your_comment_failed_to_send":"Your comment failed to send.
      Please try again.","your_email_address":"Your email
      address","your_invalid_expense_was_unable_to_sync":"Your expense was
      unable to sync because it is invalid. Please edit the expense and try
      again.","your_password":"Your
      password","your_password_must_be_at_least_4_characters_long":"Your
      password must be at least 4 characters long.","your_total_share":"Your
      total share","youre_the_only_member_in_this_group":"You're the only member
      in this group, and there's no point in settling up with yourself
      :)","add_group__short":"Add","add_friend__short":"Add","allow_find_by_email_or_phone":"Allow
      other Splitwise users who have my email address or phone number in their
      contact book to see that I use Splitwise","change_your_password":"Change
      your password","dashboard":"Dashboard","these_errors_occurred":"The
      following errors occurred:","email_notifications":"Email
      notifications","filter_by_name":"Filter by
      name","groups_and_friends":"Groups and
      friends","major_splitwise_news_and_updates":"Major Splitwise news and
      updates","mobile_notifications":"Mobile
      notifications","monthly_summary_of_my_activity":"Monthly summary of my
      activity","news_and_updates":"News and updates","phone_number":"Phone
      number","post_to_facebook__short":"Share","post_to_twitter__short":"Tweet","reset_password_prompt":"Enter
      your email address or phone number and we’ll send you a link to reset your
      password.","reset_password_success_message":"A message has been sent with
      instructions to reset your
      password.","reset_password_if_you_have_issues":"If you have any further
      issues, please contact support@splitwise.com and we’ll respond as quickly
      as we’re able.","reset_your_password":"Reset your
      password","save_changes":"Save
      changes","success":"Success","time_zone":"Time
      zone","bunnies_photo_credit":"Photo by Isaie Simonnet. Thanks,
      Isaie!","unsubscribed_all_emails":"You have unsubscribed from all
      Splitwise emails.","when_a_bill_is_added":"When an expense is
      added","when_a_bill_is_edited_or_deleted":"When an expense is
      edited/deleted","when_a_bill_is_commented_on":"When someone comments on an
      expense","when_a_bill_is_due":"When an expense is
      due","when_added_as_a_friend":"When someone adds me as a
      friend","when_added_to_a_group":"When someone adds me to a
      group","when_someone_pays_me":"When someone pays
      me","your_email_address_or_phone_number":"Your email address/phone
      #","hiding_accounts_explanation":"Hiding accounts settled for more than 30
      days. Show »","invite_friends":"Invite friends","send_invite":"Send
      invite","send_a_message_to":"Send a message
      to","invite_sent_smiley":"Invite sent! :)","you_do_not_owe_anything":"You
      do not owe anything","you_received_AMOUNT":"You received
      %@","you_owe_AMOUNT":"You owe %@","you_paid_AMOUNT":"You paid
      %@","you_get_back_AMOUNT":"You get back %@","you_added_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e added
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_updated_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e updated
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_deleted_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e deleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_undeleted_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e undeleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_added_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e added
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_updated_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e updated
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_deleted_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e deleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_undeleted_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e undeleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","show_more":"Show
      more","undelete_group":"Undelete
      group","yesterday":"Yesterday","click_add_bill_or_add_some_friends_first":"Click
      “Add an expense” above to get started, or invite some friends
      first!","to_add_an_expense_click_add_bill":"To add a new expense, click
      the orange “Add an expense”
      button.","youre_all_settled_up_awesome":"You’re all settled up.
      Awesome!","view_as_chart__web_dashboard":"view
      chart","view_as_list__web_dashboard":"view as
      list","you_are_not_owed_anything":"You are not owed
      anything","unknown_group_name":"[Unknown
      group]","quickadd":"Quick-add","unsubscribed":"Unsubscribed","view_printable_summary":"View
      printable summary","you_are_all_settled_up":"You are all settled
      up","unknown_user_name__proper_noun":"Someone","unknown_user_name__common_noun":"someone","NAME_paid_you_AMOUNT":"%1$@
      paid you %3$@","you_paid_NAME_AMOUNT":"You paid %2$@
      %3$@","NAME_paid_NAME_AMOUNT":"%1$@ paid %2$@ %3$@","for_DEcomponent
      ION_html":"for %@","sms_invite_reminder_FROM":"%1$@ wants to remind you to
      join Splitwise! Sign up for free:
      https://www.splitwise.com/i/%2$@","sms_GROUP_invite_FROM":"%2$@ just
      invited you to the group '%1$@' on Splitwise! Sign up now to split
      expenses: https://www.splitwise.com/i/%3$@","sms_invite_FROM":"Your friend
      %1$@ has invited you to split expenses on Splitwise:
      https://www.splitwise.com/i/%2$@","sms_password_reset_LINK":"Reset your
      Splitwise password: https://www.splitwise.com%@\nIf you did not request
      this message, you may safely ignore
      it.","NAME_added_NAME_to_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      added \u003cstrong\u003e%2$@\u003c/strong\u003e to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_added_NAME_to_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      added %2$@ to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_added_you_to_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      added you to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_were_added_to_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      were added to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_was_added_to_GROUP_html":"\u003cstrong\u003e%2$@\u003c/strong\u003e
      was added to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_created_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      created the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_commented_on_EXPENSE_COMMENT_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      commented on \u003cstrong\u003e“%2$@”\u003c/strong\u003e:
      “%3$@”","you_commented_on_EXPENSE_COMMENT_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      commented on \u003cstrong\u003e“%2$@”\u003c/strong\u003e:
      “%3$@”","new_recurring_bill__prepend_html":"\u003cstrong\u003eNew
      recurring expense:\u003c/strong\u003e","payment_updated__prepend":"Payment
      updated:","payment_deleted__prepend":"Payment
      deleted:","payment_undeleted__prepend":"Payment
      undeleted:","expense_updated__prepend":"Expense
      updated:","expense_deleted__prepend":"Expense
      deleted:","expense_undeleted__prepend":"Expense
      undeleted:","simplify_turned_on_in_GROUP_html":"\u003cstrong\u003e“Simplify
      debts”\u003c/strong\u003e was turned
      \u003cstrong\u003eon\u003c/strong\u003e in the group
      \u003cstrong\u003e“%@”\u003c/strong\u003e.","simplify_turned_off_in_GROUP_html":"\u003cstrong\u003e“Simplify
      debts”\u003c/strong\u003e was turned
      \u003cstrong\u003eoff\u003c/strong\u003e in the group
      \u003cstrong\u003e“%@”\u003c/strong\u003e.","hey_NAME":"Hey
      %@!","new_expense_EXPENSE_was_just_added_html":"A new expense for %@ was
      just added on
      Splitwise.","NAME_added_EXPENSE_to_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just added \u003cstrong\u003e“%2$@”\u003c/strong\u003e to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_added_EXPENSE_on_splitwise_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just added the expense \u003cstrong\u003e“%2$@”\u003c/strong\u003e on
      Splitwise.","view_on_splitwise":"View on
      Splitwise","have_a_great_day":"Have a great
      day!","the_splitwise_team":"The Splitwise
      Team","NAME_just_deleted_EXPENSE_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just deleted \u003cstrong\u003e“%2$@”\u003c/strong\u003e in the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_just_updated_EXPENSE_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just updated \u003cstrong\u003e“%2$@”\u003c/strong\u003e in the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_just_deleted_EXPENSE_on_splitwise_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just deleted \u003cstrong\u003e“%2$@”\u003c/strong\u003e on
      Splitwise.","NAME_just_updated_EXPENSE_on_splitwise_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      just updated \u003cstrong\u003e“%2$@”\u003c/strong\u003e on
      Splitwise.","NAME_deleted_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      deleted the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_deleted_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      deleted the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_removed_you_from_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed you from the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_removed_yourself_from_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed yourself from the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_removed_NAME_from_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%2$@\u003c/strong\u003e from the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_removed_NAME_from_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed \u003cstrong\u003e%2$@\u003c/strong\u003e from the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_left_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      left the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_removed_NAME_as_friend_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%2$@\u003c/strong\u003e as a
      friend.","NAME_removed_you_as_friend_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed you as a
      friend.","you_undeleted_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      undeleted the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_undeleted_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      undeleted the group
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_converted_GROUP_to_CURRENCY_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      converted all expenses in \u003cstrong\u003e“%2$@”\u003c/strong\u003e to
      the currency
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_converted_GROUP_to_CURRENCY_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      converted all expenses in \u003cstrong\u003e“%2$@”\u003c/strong\u003e to
      the currency
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_converted_NAME_to_CURRENCY_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      converted all expenses with \u003cstrong\u003e%2$@\u003c/strong\u003e to
      the currency
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_converted_you_to_CURRENCY_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      converted all expenses with you to the currency
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","reminder_EXPENSE_is_due_today_html":"Reminder:
      \u003cstrong\u003e“%1$@”\u003c/strong\u003e is due
      \u003cstrong\u003etoday\u003c/strong\u003e!","reminder_EXPENSE_is_due_tomorrow_html":"Reminder:
      \u003cstrong\u003e“%1$@”\u003c/strong\u003e is due
      \u003cstrong\u003etomorrow\u003c/strong\u003e!","reminder_EXPENSE_is_due_in_N_days_html":"Reminder:
      \u003cstrong\u003e“%1$@”\u003c/strong\u003e is due \u003cstrong\u003ein
      %2$@
      days\u003c/strong\u003e!","email_confused_about_this_email_NAME_html":"If
      you’re confused about this, just hit reply to send an email to %@ and
      figure out what’s going on.","reminder_EXPENSE_is_due_today":"Reminder:
      '%@' is due today","reminder_EXPENSE_is_due_tomorrow":"Reminder: '%@' is
      due tomorrow","reminder_EXPENSE_is_due_in_N_days":"Reminder: '%1$@' is due
      in %2$@ days","NAME_recorded_payment_to_you_in_GROUP_html":"FYI: %1$@ just
      recorded a payment to you in the group
      “%3$@”.","NAME_recorded_payment_to_you_on_splitwise_html":"FYI: %1$@ just
      recorded a payment to you on
      Splitwise.","NAME_recorded_payment_to_you_from_NAME_in_GROUP_html":"FYI:
      %1$@ just recorded a payment to you from %2$@ in the group
      “%3$@”.","NAME_recorded_payment_to_you_from_NAME_on_splitwise_html":"FYI:
      %1$@ just recorded a payment to you from %2$@ on
      Splitwise.","payment_for_DEcomponent ION":"Payment for
      %@","payment_to_NAME":"Payment to %@","you_received_nothing":"You received
      nothing","NAME_EMAIL_added_you_to_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (%2$@) just added you to the group
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e on
      Splitwise.","visit_now":"Visit now","hope_youre_enjoying_splitwise":"We
      hope you’re enjoying
      Splitwise!","have_questions_let_us_know_at_ADDRESS":"If you have any
      questions or comments, be sure to let us know at
      %@.","visit_splitwise_now":"Visit Splitwise
      now","any_comments_hit_reply":"Any comments, thoughts, or suggestions? Hit
      reply and let us know.","youre_settled_up_with_everyone":"You're settled
      up with everyone!","see_all_friends":"See all
      friends","plus_N_more_friends":"Plus %@ more
      friends","largest_expenses":"Largest
      expenses","bars_not_to_scale_for_multiple_currencies":"(bars not to scale
      for multiple currencies)","see_all_transactions":"See all
      transactions","see_more_details":"See more
      details","payments_made":"Payments made","payments_received":"Payments
      received","your_balance_for_MONTH":"Your balance for
      %@","payment_added_subject_line":"%1$@ paid you %2$@ on
      Splitwise","expense_added_subject_line":"'%1$@' (%2$@) added by
      %3$@","expense_updated_subject_line":"'%1$@' (%2$@) updated by
      %3$@","expense_deleted_subject_line":"'%1$@' (%2$@) deleted by
      %3$@","comment_added_subject_line":"%1$@ commented on
      '%2$@'","added_to_group_subject_line":"%1$@ added you to the group '%2$@'
      on Splitwise","manual_invite_reminder_subject_line":"A reminder from %@:
      come join Splitwise!","automatic_invite_reminder_subject_line":"%@ is
      still waiting for you to join
      Splitwise...","group_invite_subject_line":"[%1$@] %2$@ wants to share
      bills with you on Splitwise!","friendship_invite_subject_line":"%@ wants
      to share bills with you on Splitwise!","join_splitwise":"Join
      Splitwise","NAME_is_still_waiting_for_you_to_join_html":"%@ is still
      waiting for you to join
      Splitwise...","if_youre_not_interested_we_wont_bother_you_again":"(If
      you’re not interested in Splitwise, we won’t bother you
      again.)","give_it_a_try":"Give it a try and see what you
      think!","NAME_just_invited_you_to_join_html":"%@ just invited you to join
      Splitwise!","NAME_EMAIL_just_invited_you_to_join_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) has invited you to
      join the group \u003cstrong\u003e“%3$@”\u003c/strong\u003e on
      Splitwise.","splitwise_explanation_for_group_invite_html":"\u003cstrong\u003eSplitwise
      makes it easy to split expenses with your friends.\u003c/strong\u003e Use
      Splitwise any time you split a bill – we’ll keep track of how much each
      person owes in total, and make sure that everyone gets paid
      back.","sign_up_now_for_group_invite":"Sign up now to see all of your
      group’s bills, and to start adding bills of your
      own!","nice_to_meet_you_NAME":"Nice to meet you,
      %@!","already_seen_mobile_be_sure_to_check_out_our_website_html":"You’ve
      already discovered our mobile app, but be sure to also check out our
      \u003ca href='https://www.splitwise.com'\u003ewebsite\u003c/a\u003e for
      spending charts, fairness calculators, and
      more.","already_seen_web_be_sure_to_check_out_our_mobile_apps_html":"You’ve
      already seen \u003ca
      href='https://www.splitwise.com'\u003eSplitwise.com\u003c/a\u003e, but
      make sure to check out our free mobile apps for \u003ca
      href='https://itunes.apple.com/us/app/splitwise-split-bills-expenses/id458023433?mt=8\u0026uo=4\u0026at=11l4CC'\u003eiPhone\u003c/a\u003e
      and \u003ca
      href='http://market.android.com/details?id=com.Splitwise.SplitwiseMobile'\u003eAndroid\u003c/a\u003e
      (plus unofficial Splitwise apps for \u003ca
      href='https://www.microsoft.com/en-us/search/result.aspx?q=splitwise#nav-apps'\u003eWindows
      Phone\u003c/a\u003e):","have_questions_or_feedback_hit_reply_html":"If you
      have any questions or feedback, hit reply and let us know – we’d love to
      hear from you. (Really!)","organic_welcome_subject_line":"Hey
      there!","visit_splitwise":"Visit
      Splitwise","lapsed_user_how_are_you_html":"It’s been a while since we last
      saw you at Splitwise, so we wanted to check in and see how you’re
      doing.","lapsed_user_hit_reply_if_you_need_anything_html":"If there’s
      anything we can do to make your Splitwise experience better,
      \u003cstrong\u003ejust hit reply and let us know\u003c/strong\u003e.
      Otherwise, we won’t bother you like this again
      :)","lapsed_user_we_wanted_to_check_in":"We wanted to check in and see how
      you’re doing.","lapsed_user_subject_line":"Long time no see,
      %@!","ryan_from_splitwise":"Ryan from
      Splitwise","lapsed_24_user_how_are_you_doing_html":"How are you doing? I
      noticed that you haven’t added any expenses on Splitwise yet, so I wanted
      to check in and see if there’s anything I can help you
      with.","lapsed_24_user_hit_reply_if_you_need_anything_html":"If you have
      any thoughts or questions at all, \u003cstrong\u003ejust hit reply and let
      me know\u003c/strong\u003e. We’d all love to know what you’re thinking –
      it’ll help us make Splitwise better, for you and for all our users
      :)","lapsed_24_user_subject_line":"Just checking in - anything we can help
      you with?","forgot_password_subject_line":"Forgot your password? Fear
      not!","NAME_forgot_your_password_it_happens":"We get it, %@ – you forgot
      your password. It happens to the best of us. We feel your
      pain.","get_back_to_expense_splitting_html":"Click here to make up a new
      password and get back to
      expense-splittin’:","password_reset_failed_subject_line":"Password reset
      attempt","password_reset_email_ps_html":"P.S. If you did not request a
      password reset, or are having any trouble logging in, please let us know
      at \u003ca
      href='mailto:support@splitwise.com'\u003esupport@splitwise.com\u003c/a\u003e.","password_reset_failed_opener_html":"You
      (or someone else) entered this email address when attempting to reset your
      password on Splitwise. \u003cstrong\u003eUnfortunately, there is no
      account on Splitwise with this email
      address.\u003c/strong\u003e","password_reset_failed_contact_us":"If you
      are a Splitwise user and were expecting this email, please try again with
      the email address that you used to register for
      Splitwise.","password_reset_failed_not_sw_user":"If you are not a
      Splitwise user, please ignore this email. (And sorry for the
      spam!)","visit_your_group_now":"Visit your group
      now","you_are_settled_up_GROUP":"You are currently settled up for
      '%1$@'","you_are_settled_up_FRIEND":"You are currently settled up with
      %1$@","you_owe_AMOUNT_GROUP":"You currently owe %2$@ for
      '%1$@'","you_owe_AMOUNT_FRIEND":"You currently owe %2$@ to
      %1$@","you_are_owed_AMOUNT_GROUP":"You are currently owed %2$@ for
      '%1$@'","you_are_owed_AMOUNT_FRIEND":"You are currently owed %2$@ by
      %1$@","note_NOTE":"Note: %@","added_as_friend_subject_line":"%@ added you
      as a friend on Splitwise","NAME_EMAIL_added_you_as_a_friend_html":"%1$@
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) just added you as a
      friend on Splitwise. Now you can easily share expenses and
      IOUs.","p_s_check_us_out_on_mobile_html":"P.S. Be sure to check us out on
      \u003ca
      href='https://itunes.apple.com/us/app/splitwise-split-bills-expenses/id458023433?mt=8\u0026uo=4\u0026at=11l4CC'\u003eiPhone\u003c/a\u003e
      and \u003ca
      href='http://market.android.com/details?id=com.Splitwise.SplitwiseMobile'\u003eAndroid\u003c/a\u003e
      to split expenses on the go!","EXPENSE_is_almost_due":"‘%@’ is almost
      due!","including_this_bill_you_owe_AMOUNT_in_this_group_html":"Including
      this expense, you currently owe %@ in this
      group.","including_this_bill_you_are_owed_AMOUNT_in_this_group_html":"Including
      this expense, you are currently owed %@ in this
      group.","you_owe_nothing":"You owe nothing","please_pay_promptly":"Please
      remember to pay up
      promptly.","NAME_EMAIL_removed_you_from_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) just removed you from
      the group \u003cstrong\u003e“%3$@”\u003c/strong\u003e on
      Splitwise.","reply_to_email_NAME_if_this_seems_wrong":"If this seems
      wrong, just hit reply to send an email to %@ and ask what's
      up.","NAME_removed_you_from_GROUP":"%1$@ removed you from the group '%2$@'
      on Splitwise","NAME_deleted_GROUP":"%1$@ deleted the group '%2$@' on
      Splitwise","undelete_group_from_account_settings_html":"If you wish, you
      may also undelete this group from your \u003ca
      href='https://secure.splitwise.com/account/settings'\u003eaccount settings
      page\u003c/a\u003e on
      Splitwise.com.","NAME_EMAIL_deleted_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) just deleted the
      group \u003cstrong\u003e“%3$@”\u003c/strong\u003e on
      Splitwise.","incorrect_email_or_password":"The email or password you
      entered is incorrect. Please try
      again.","category_1":"Utilities","category_27":"Home","category_25":"Food
      and
      drink","category_31":"Transportation","category_40":"Life","category_2":"Uncategorized","category_19":"Entertainment","category_48":"Cleaning","category_37":"Trash","category_7":"Water","category_11":"Other","category_8":"TV/Phone/Internet","category_6":"Heat/gas","category_5":"Electricity","category_18":"General","category_20":"Games","category_22":"Music","category_23":"Other","category_24":"Sports","category_21":"Movies","category_26":"Other","category_12":"Groceries","category_38":"Liquor","category_13":"Dining
      out","category_4":"Mortgage","category_39":"Electronics","category_3":"Rent","category_30":"Services","category_29":"Pets","category_28":"Other","category_14":"Household
      supplies","category_16":"Furniture","category_17":"Maintenance","category_47":"Hotel","category_46":"Bicycle","category_36":"Taxi","category_15":"Car","category_35":"Plane","category_34":"Other","category_9":"Parking","category_33":"Gas/fuel","category_32":"Bus/train","category_10":"Insurance","category_45":"Taxes","category_44":"Other","category_43":"Medical
      expenses","category_41":"Clothing","category_42":"Gifts","NAME_undeleted_GROUP":"%1$@
      undeleted the group '%2$@' on
      Splitwise","NAME_EMAIL_undeleted_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) just undeleted the
      group \u003cstrong\u003e“%3$@”\u003c/strong\u003e on
      Splitwise.","view_your_group_now":"View your group
      now","NAME_updated_this_transaction":"%@ updated this
      transaction:","bullet_moved_from_GROUP_to_GROUP":"- Moved from '%1$@' to
      '%2$@'","bullet_decomponent ion_changed_from_DEcomponent
      ION_to_DEcomponent ION":"- Decomponent ion changed from '%1$@' to
      '%2$@'","bullet_cost_changed_from_AMOUNT_to_AMOUNT":"- Cost changed from
      %1$@ to %2$@","bullet_currency_changed_from_DEcomponent ION_to_DEcomponent
      ION":"- Currency changed from %1$@ to
      %2$@","bullet_payer_changed_from_X_to_Y":"- Payer changed from %1$@ to
      %2$@","NAME_AMOUNT":"%1$@
      (%2$@)","error_expense_cannot_involve_non_group_members":"This expense
      cannot be saved because it involves people who do not currently belong to
      the specified group. Saving this expense would throw off the balances of
      other group members such that they no longer added up correctly. If you
      wish to make this change, you must first add all of these people to the
      group.","error_expense_you_do_not_belong_to_group":"You cannot add an
      expense to a group that you are not a member
      of.","error_expense_must_involve_you":"You cannot add an expense that does
      not involve yourself, unless that expense is in a
      group.","error_number_limited_to_two_decimals":"is limited to two decimal
      places","error_expense_shares_owed_TOTAL_different_than_COST":"The total
      of everyone's owed shares (%1$@) is different than the total cost
      (%2$@)","error_expense_shares_paid_TOTAL_different_than_COST":"The total
      of everyone's paid shares (%1$@) is different than the total cost
      (%2$@)","error_expense_person_has_multiple_shares":"A person was included
      on this expense multiple times","error_expense_date_invalid":"Date must be
      between the year 2000 and the year
      2050","error_expense_quickadd_nongroup_with_more_than_20_people":"Quick-add
      cannot split a non-group expense with more than 20 people.
      Sorry!","error_expense_quickadd_N_people_confirmation":"This input would
      split an expense with all %@ of your friends. If you're sure you want to
      do this, please add 'with everyone' to the end of your
      sentence.","error_friendship_already_exists":"These two users are already
      friends","error_friendship_cant_delete_because_of_shared_group":"This
      person is in a group with you. If you wish to delete them from your
      friends list, you will need to delete them from your group first, or
      remove the group
      entirely.","error_friendship_cant_delete_not_settled_up":"You still have
      outstanding debts with this person. If you wish to delete them from your
      friends list, you will need to settle those debts first.","paid_share":"A
      person's paid share","owed_share":"A person's owed
      share","bullet_NAME_share_changed_from_AMOUNT_to_AMOUNT":"- %1$@'s share
      changed from %2$@ to %3$@","bullet_NAME_was_added_to_the_transaction":"-
      %@ was added to the
      transaction","bullet_NAMES_were_added_to_the_transaction":"- %@ were added
      to the transaction","bullet_NAME_was_removed_from_the_transaction":"- %@
      was removed from the
      transaction","bullet_NAMES_were_removed_from_the_transaction":"- %@ were
      removed from the transaction","NAME_converted_GROUP_to_CURRENCY":"%1$@
      converted all expenses in the group '%2$@' to the currency
      %3$@","NAME_EMAIL_converted_GROUP_to_CURRENCY_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      (\u003ca href='mailto:%2$@'\u003e%2$@\u003c/a\u003e) just converted all
      expenses in the group \u003cstrong\u003e“%3$@”\u003c/strong\u003e to the
      currency
      \u003cstrong\u003e%4$@\u003c/strong\u003e.","settle_all_balances":"Settle
      all balances","settle_all_balances_explanation":"Because %1$@ and %2$@ had
      a total balance of zero across all of Splitwise, Splitwise has
      automatically settled their balance with each other in every group (as
      well as settling any non-group expenses). This transaction is one part of
      a set. To see all parts of the 'Settle all balances' transaction, go to
      the 'All expenses' screen.","one_on_one_debt_simplification":"One-on-one
      debt simplification","one_on_one_debt_simplification_explanation":"This
      transaction consolidates the balance between %1$@ and %2$@ in one
      place.","debt_simplification":"Debt
      simplification","debt_simplification_explanation":"This expense
      consolidates the balances between multiple different friends. Go to the
      'All expenses' screen to see all of the parts of this debt simplification
      that affect you, and to see how it changed your balances with other
      friends. (Your total balance across all friends has not
      changed.)","user_email":"Email
      address","user_name":"Name","user_first_name":"First
      name","user_password":"Password","user_phone":"Phone
      number","group_name":"Group name","expense_decomponent ion":"Decomponent
      ion","expense_cost":"Cost","decomponent ion":"Decomponent
      ion","expense_date":"Date","cost":"Cost","subtotal":"Subtotal","grand_total":"Grand
      total","itemized_bill_item":"Item","bill_tax":"Tax","bill_tip":"Tip","memberships_user_email":"A
      member's email address","memberships_user_name":"A member's
      name","memberships_user_phone":"A member's phone
      number","error_user_misspelled_email_address":"It looks like you
      misspelled the end of your email address. Please fix any mistakes and try
      again!","error_user_cant_use_splitwise_email":"Sorry, but you can't sign
      up with an email address ending in '@splitwise.com'. Please enter another
      email address where we can reach
      you.","error_user_password_is_too_common":"is too common (e.g. '12345',
      'password', etc) - please choose something more complex or
      unique","error_user_phone_looks_like_nonUS_number":"It looks like you're
      trying to enter a non-US phone number. If so, please include a plus symbol
      and country code at the beginning of the number (for example, \"+44\" for
      the United Kingdom). Thanks!","error_user_PHONE_invalid_for_REGION":"%1$@
      does not appear to be a valid %2$@ phone number.
      Sorry!","error_user_merge_shared_expenses":"This action would merge two
      user accounts that have expenses in common. If you really want to combine
      these accounts, first you'll need to delete any expenses that they share.
      Sorry for the trouble!","error_user_merge_shared_groups":"Sorry, but
      Splitwise requires all group members to have unique email addresses! This
      action would merge two user accounts in the same group under one email
      address. If you think you've received this message in error, please let us
      know at
      support@splitwise.com.","error_group_cannot_turn_off_simplify_debts_with_REMOVED_MEMBERS":"'Simplify
      debts' cannot be turned off after a group member has been removed, as it
      would cause the following removed members to have balances again: %@. If
      you wish to disable 'simplify debts', please add these members back to the
      group first.","error_group_must_have_members":"A group must have at least
      one member","error_group_cannot_add_member_by_user_id":"You cannot add
      unknown users to a group by
      user_id","error_group_member_merge_failed_DETAILS":"An error occurred when
      attempting to merge accounts: %@","error_membership_duplicate_member":"A
      user cannot belong to a group more than
      once","error_membership_delete_not_settled_up_simplify_on":"You can't
      delete someone from your group until that person has a balance of
      zero","error_membership_delete_not_settled_up_simplify_off":"You can't
      delete someone from your group who still has outstanding debts to other
      people","settings_updated_successfully":"Settings updated
      successfully","password_reset_sent_html":"A message has been sent to %@
      with instructions to reset your
      password.","language":"Language","group_tooltip":"Groups are perfect for
      apartments, trips, and other situations where the same set of people share
      a large number of expenses.","invalid_login_code":"Your login code is no
      longer valid. Please log in with your email address and password
      instead.","splitwise_on_the_go":"Splitwise on the
      go","get_the_app_and_add_ious_anywhere":"Get the free Splitwise app and
      add IOUs from anywhere:","get_the_splitwise_app":"Get the Splitwise
      app","or_continue_to_the_Splitwise_website":"or continue to the Splitwise
      website","mobile_splash_tagline":"Split bills, IOUs, and other expenses
      with your friends,
      stress-free.","flash_after_invite_app_download_prompt":"Account created
      successfully! Now get the app and start splitting
      expenses:","plus_third_party_apps":"+ third-party apps
      for","windows_phone":"Windows Phone","happy_summer":"Happy
      summer!","get_outside_and_play_use_splitwise_for_post_game_dinner":"Get
      outside and play! Use Splitwise for team expenses, or to split a post-game
      dinner with friends.","split_the_dinner_bill":"Split the dinner
      bill","check_out_plates_html":"Check out
      \u003cstrong\u003ePlates\u003c/strong\u003e, our free iOS app to quickly
      and easily split dinner bills with
      friends.","check_out_plates_LINK_html":"Check out \u003ca
      href='%@'\u003ePlates\u003c/a\u003e, our free iPhone app to help you split
      restaurant bills.","download_plates":"Download
      Plates","upcoming_bills":"Upcoming
      expenses","trends":"Trends","whiteboard":"Whiteboard","trends_this_month":"Trends
      this month","view_full_charts":"View full
      charts","click_to_edit_whiteboard":"Click here to edit the
      whiteboard!","whiteboard_decomponent ion":"Use the whiteboard to remember
      important info, like your landlord’s address or emergency contact
      info.","edit_friend_info":"Edit friend info","remove_this_friend":"Remove
      this friend","send_a_balance_reminder":"Send a balance
      reminder","simplify_debts_with_this_person":"Simplify debts with this
      person","nongroup_currency_conversion_confirmation":"This will convert all
      non-group transactions with this friend to %@ (your default currency) at
      the current international exchange rate. This action cannot be reversed.
      Are you sure you wish to
      continue?","group_currency_conversion_confirmation":"This will convert all
      transactions in this group to %@ (your default currency) at the current
      international exchange rate. This action cannot be reversed. Are you sure
      you wish to continue?","pro":"Pro","convert_to_CURRENCY":"Convert to
      %@","edit_group_settings":"Edit group
      settings","hide_items_without_me":"Hide items not involving
      me","show_items_without_me":"Show items not involving
      me","pending":"Pending","you_paid__expense_cell":"you
      paid","you_received__expense_cell":"you
      received","recurring":"Recurring","NAME_paid__expense_cell":"%@
      paid","N_people_paid__expense_cell":"%@ people
      paid","not_involved__expense_cell_oneline_html":"not
      involved","not_involved__expense_cell_html":"not\u003cbr\u003einvolved","NAME_lent_you__expense_cell":"%@
      lent you","you_borrowed_nothing__expense_cell_html":"you
      borrowed\u003cbr\u003enothing","delete_expense_confirmation":"Are you sure
      you want to delete this
      expense?","delete_expense_confirmation_warning":"This will completely
      remove this expense for ALL people involved, not just
      you.","delete_payment_confirmation":"Are you sure you want to delete this
      payment?","delete_with_simplification":"This will undo all parts of this
      debt simplification.","recurring_bill_next_on_DATE":"Recurring expense
      (next occurrence on %@)","cancel_future_recurrences":"Cancel future
      recurrences","sent_via_METHOD_STATUS":"Sent via %1$@
      (%2$@)","confirmed__payment_status":"Payment
      confirmed","incomplete__payment_status":"Payment
      incomplete","venmo_incomplete_explanation":"We have not yet received
      confirmation from Venmo that the funds for this payment were
      transferred.","finish_sending_payment":"Finish sending
      payment","NAME_paid_AMOUNT_and_received_AMOUNT_html":"%1$@ paid %2$@ and
      received %3$@","NAME_paid_AMOUNT_and_owes_AMOUNT_html":"%1$@ paid %2$@ and
      owes %3$@","NAME_paid_AMOUNT_html":"%1$@ paid
      %2$@","NAME_received_AMOUNT_html":"%1$@ received
      %2$@","NAME_owes_AMOUNT_html":"%1$@ owes
      %2$@","NAME_owes_AMOUNT_to_NAME_html":"%1$@ owes %2$@ to
      %3$@","NAME_owes_NAME_AMOUNT_html":"%1$@ owes %2$@
      %3$@","notes_and_comments":"Notes and comments","no_results_found":"No
      results found","attach_an_image":"Attach an
      image","attach_an_image_or_pdf":"Attach an image or
      PDF","include_a_memo":"Include a memo","split_this_expense":"Split this
      expense","enter_each_persons_share":"Enter each person's
      share:","simplify_debts_is_on":"Simplify debts is
      ON","what_would_you_like_to_do_first":"What would you like to do
      first?","skip_setup_for_now":"Skip setup for
      now","device_settings":"Device
      settings","all_bills_before_this_date_have_been_settled_up":"All expenses
      before this date have been settled
      up.","never":"Never","choose_a_currency":"Choose a
      currency","add_bill":"Add
      expense","with__add_bill":"With:","with_you_and__add_bill_html":"With
      \u003cstrong\u003eyou\u003c/strong\u003e and:","i_owe_you":"I owe
      you","you_owe_me":"You owe me","NAME_owes_you_the_full_total":"%@ owes you
      the full total","two_plus_people":"2+ people","choose_a_category":"Choose
      a category","unable_to_process_image":"Unable to process
      image.","sync_in_progress":"Sync in
      progress","now_loading_expenses_wait":"Now loading your expenses...this
      may take a moment.","add_friend":"Add
      friend","you_cannot_remove_this_person_until_you_have_saved_changes_to_the_group":"You
      cannot remove this person until you have saved changes to the
      group","you_owe_PERSON_the_full_total":"You owe %@ the full
      total","add_person_to_group":"Add person to group","choose_person":"Choose
      person","this_will_restore_the_expense_for_everyone_involved":"This will
      restore the expense for everyone
      involved.","whoops_you_cannot_add_a_comment_until_the_expense_has_been_synced_with_the_server":"Whoops!
      You cannot add a comment until the expense has been synced with the
      server.","downloading":"Downloading","on_DATE":"On %@","for_MEMO":"For
      ‘%@’","you_must_select_at_least_one_person_to_split_with":"You must select
      at least one person to split with.","total_per_share_AMOUNT":"Total per
      share: %@","total_share_AMOUNT":"Total share:
      %@","this_expense_failed_to_sync":"This expense failed to
      sync","enter_new_name_and_email_address":"Enter new name and email
      address:","you_must_enter_a_name":"You must enter a
      name","this_person_is_not_yet_synced_to_our_server_please_sync_first":"This
      person is not yet synced to our server – please sync and then try
      again.","unable_to_find_program_that_can_send_email":"Unable to find
      program that can send email","send_file_with__choose_program":"Send file
      with","push_notifications_are_disabled_because_google_play_services_are_unavailable":"Push
      notifications are disabled because Google Play Services are
      unavailable.","none__choice_of_alert_sound":"None","splitwise_export_for_RELATIONSHIP":"Splitwise
      export for %@","NAME_gets_back_AMOUNT_in_total":"%1$@ gets back %2$@ in
      total","NAME_owes_AMOUNT_in_total":"%1$@ owes %2$@ in
      total","NAME_owes_AMOUNT_to_NAME":"%1$@ owes %2$@ to
      %3$@","connecting_to_google":"Connecting to
      Google","news":"News","this_will_restore_all_expenses_and_balances_for_this_group":"This
      will restore all expenses and balances for this
      group.","working":"Working","paypal_was_unable_to_complete_your_payment":"PayPal
      was unable to complete your
      payment:","please_contact_service_at_paypal_dot_com_for_support":"Please
      contact service@paypal.com for
      support.","bunnies_title":"Bunnies!","this_transaction_failed_to_sync_with_the_server":"This
      transaction failed to sync with the
      server","could_not_launch_the_google_play_store":"Could not launch the
      Google Play store","android_tour_left_menu_top":"Split with groups and
      individual friends","android_tour_left_menu_bottom":"Keep track of
      apartment bills, group trips, random IOUs, and
      more","android_tour_payment_methods_top":"Settle up instantly, any way you
      like","android_tour_payment_methods_bottom":"Send money for free with
      PayPal and Venmo (or just use cash)","android_tour_laptop_top":"Works on
      your phone and on the web","android_tour_laptop_bottom":"Everyone can log
      in and add bills, even without a smartphone","android_tour_logo_top":"Time
      to get started!","android_tour_logo_bottom":"Tap anywhere to
      begin.","expenses":"Expenses","undelete_this_payment":"Undelete this
      payment","undelete_this_expense":"Undelete this
      expense","delete_this_payment":"Delete this
      payment","delete_this_expense":"Delete this
      expense","unable_to_find_program_that_can_view_EXTENSION_files":"Unable to
      find program that can view .%@ files.","invite_resent":"Invite
      re-sent","failed":"Failed","enter_names_or_emails":"Enter names or email
      addresses","hit_enter_to_add_person":"Hit enter to add this
      person","NUMBER_contacts_imported":"%@ contacts
      imported","enter_an_email_address_for_NAME":"Enter an email address for
      %@","general_unknown_error":"An unknown error occurred. Please try again
      or contact support@splitwise.com if you experience repeated issues. Sorry
      for the trouble!","cannot_view_permission_error_html":"Whoops – you don't
      have permission to view this friend or group! Make sure you're logged into
      the correct Splitwise account. Sorry!
      :(","NAME_currently_owes_AMOUNT":"%1$@ currently owes
      %2$@","NAME_is_currently_owed_AMOUNT":"%1$@ is currently owed
      %2$@","NAME_currently_owes_nothing":"%1$@ currently owes
      nothing","no_recurring_bills_added_html":"You have not added any recurring
      expenses yet","error_expense_render_ID":"Please report this expense ID to
      us at support@splitwise.com: ID #%@.
      Thanks!","cancel_recurrence_confirmation":"Are you sure you want to stop
      this expense from recurring in the
      future?","delete_comment_confirmation":"Are you sure you want to delete
      this comment?","error_expense_list_group_render":"The data on this page
      may be out of date. Please try refreshing the page, or contact us at
      support@splitwise.com if you experience this error repeatedly.
      Thanks!","simplify_debts_with_NAME":"Simplify debts with
      %@","you_have_multiple_balances_with_NAME_html":"You have multiple
      balances with %@.","simplify_explaination_with_NAME_NAME_html":"If you
      click “Simplify debts”, all of your group balances with %1$@ will be
      settled, and the outstanding balance will be consolidated into one
      non-group expense with %2$@.","send_money_via_paypal":"Send money via
      PayPal","finish_payment_with_SERVICE":"Finish payment with
      %@","alert_no_users_involved":"There are zero people involved in this
      expense! Make sure to add some before
      saving.","alert_only_one_user_confirmation":"There is only one person
      involved in this expense. Do you still want to save
      it?","you_must_enter_an_amount":"You must enter an
      amount","you_must_enter_a_decomponent ion":"You must enter a decomponent
      ion","alert_COMPANY_only_accepts_usd":"%@ only accepts payments in USD.
      Sorry!","alert_request_via_venmo_unsupported":"Splitwise doesn't support
      requesting money via Venmo yet. If you want someone else to settle up with
      you via Venmo, they'll need to log in and initiate the transaction from
      their account. Our apologies!","send_AMOUNT_via_SERVICE":"Send %1$@ via
      %2$@","alert_file_size_exceeded_confirmation":"Splitwise does not allow
      file uploads larger than 2MB. Would you like to save this expense without
      the attachment?","hey_there":"Hey
      there","simplify_debts_tooltip":"'Simplify debts' automatically combines
      debts between members of your group to reduce the total number of
      payments. Turn this feature on and off from the group settings
      page.","it_looks_like_you_use_an_ad_blocker":"It looks like you use an ad
      blocker. That’s cool! So do we
      :)","please_support_splitwise_by_telling_friends":"Please support
      Splitwise by telling your friends about
      us!","edit":"Edit","notification_sound":"Notification
      sound","vibrate":"Vibrate","led_lights":"LED
      lights","led_lights_decomponent ion":"Flash LED lights when a notification
      arrives","disable_notifications":"Disable
      notifications","disable_notifications_decomponent ion":"Prevent this
      device from receiving notifications.\nDoes not disable notifications on
      other devices.","fairness_calculators":"Fairness
      calculators","splitwise_pro":"Splitwise
      Pro","charts":"Charts","total_change_in_balance":"Total change in
      balance","this_group_has_simplify_turned_on_explanation":"This group has
      the 'simplify debts' setting turned on. If you're confused why you owe
      this amount, visit this group and click 'More details' for further
      explanation.","you_have_not_added_any_expenses_yet":"You have not added
      any expenses yet","your_balance":"Your balance","your_total_balance":"Your
      total balance","show_settled_bills":"Show settled
      expenses","include_an_optional_message":"Include an optional
      message","send_invites_and_add_friends":"Send invites and add
      friends","preview_the_message_youll_send":"Preview the message you'll
      send","suggested_repayments_for_GROUP":"Suggested repayments for
      “%@”","NAME_is_all_settled_up":"%@ is all settled
      up","bullet_owes_AMOUNT_to_NAME__short_html":"• owes %1$@ to
      %2$@","bullet_gets_back_AMOUNT_from_NAME__short_html":"• gets back %1$@
      from %2$@","looking_for_our_fairness_calculators":"Looking for our
      fairness calculators?","click_here":"Click here","or_log_in_with":"Or log
      in with","flash_login_failed_reset_password":"Whoops! We couldn’t find an
      account for that email address and password. Maybe you’ve \u003ca
      href='%@'\u003eforgotten your
      password?\u003c/a\u003e","my_group_shall_be_called":"My group shall be
      called","my_group_is_called":"My group is
      called","tip_group_invite_link_ONCLICK_html":"Tip: Lots of people to add?
      Send your friends an \u003ca href='#' onclick=\"%@\"\u003einvite
      link\u003c/a\u003e.","alert_removal_criteria":"A person must zero out
      their account (i.e. have a balance of $0.00) before he or she can be
      removed.","invite_group_members_by_link":"Invite group members by
      link","invite_group_link_explanation":"Send this link to your friends, and
      when they click it, they'll automatically be added to this
      group.","or_add_group_members_manually":"Or add group members
      manually","whoops_emails_must_be_unique_html":"Whoops! Please use a unique
      email for each group member.","view_receipt_EXTENSION_with":"View receipt
      .%@ with","PERSON_received_AMOUNT":"%1$@ received
      %2$@","PERSON_owes_AMOUNT":"%1$@ owes
      %2$@","PERSON_paid_AMOUNT_and_owes_AMOUNT":"%1$@ paid %2$@ and owes
      %3$@","select_source":"Select
      source","nothing__amount":"nothing","my_account":"My
      account","create_a_new_password":"Create a new
      password","very_sorry_for_the_trouble_NAME":"Very sorry for the trouble,
      %@!","please_enter_a_new_password_below":"Please enter a new password
      below:","your_new_password":"Your new password","your_name":"Your
      name","get_started":"Get started!","change_your_avatar":"Change your
      avatar","check_out_splitwise_pro":"Check out Splitwise
      Pro","simplify_your_debts":"Simplify your
      debts","privacy_settings":"Privacy settings","your_apps":"Your
      apps","log_out_on_all_devices":"Log out on all
      devices","log_out_on_all_devices_confirmation":"Are you sure? This will
      log you out of Splitwise.com and the Splitwise mobile apps, and will
      revoke access to all third-party apps that access your
      account.","download_json_backup":"Download JSON
      backup","delete_your_account":"Delete your
      account","delete_your_account_confirmation":"Are you ABSOLUTELY sure you
      want to close your Splitwise account?","merge_with_another_account":"Merge
      with another account","select_a_group_to_undelete":"Select a group to
      undelete:","deleted_on_DATE_by_NAME":"deleted on %1$@ by
      %2$@","your_default_currency":"Your default
      currency","for_new_expenses":"for new expenses","your_time_zone":"Your
      time zone","connect_your_EXTERNAL_SERVICE_account":"Connect your %@
      account","disconnect_your_external_accounts":"Disconnect your external
      accounts","disconnect_your_external_accounts_confirmation":"Are you sure
      you want to disconnect your external accounts? You will still be able to
      log in to Splitwise with your email address and
      password.","get_splitwise_pro":"Get Splitwise
      Pro!","subscribe_to_sw_pro_for_BENEFITS_html":"Subscribe to
      \u003cstrong\u003eSplitwise Pro\u003c/strong\u003e for charts, search, %@,
      and more!","early_access_to_new_features":"early access to new
      features","an_adfree_experience":"an ad-free
      experience","you_are_a_sw_pro_member_html":"You are a
      \u003cstrong\u003eSplitwise Pro\u003c/strong\u003e
      member.","thanks_for_your_support":"Thanks for your
      support!","you_currently_pay_splitwise_AMOUNT_each_month_html":"You
      currently pay Splitwise %@ each
      month.","you_currently_pay_splitwise_AMOUNT_every_NUM_months_html":"You
      currently pay Splitwise %1$@ every %2$@
      months.","if_you_like_splitwise_please_consider_contributing":"If you like
      Splitwise, please consider contributing! :)","update_subcomponent
      ion":"Update subcomponent ion","cancel_subcomponent ion":"Cancel
      subcomponent ion","join_GROUP":"Join “%@”","introduce_yourself":"Introduce
      yourself","hi_there_my_name_is":"Hi there! My name
      is","heres_my_email_address_html":"Here’s my \u003cstrong\u003eemail
      address\u003c/strong\u003e:","and_heres_my_password_html":"And here’s my
      \u003cstrong\u003epassword\u003c/strong\u003e:","and_heres_the_currency_i_use_html":"And
      here’s the \u003cstrong\u003ecurrency\u003c/strong\u003e that I
      use:","sign_me_up":"Sign me up!","just_a_sec":"Just a
      sec...","sign_up_with_SERVICE":"Sign up with
      %@","dont_use_usd_for_currency":"Don't use USD for
      currency?","split_expenses_with_friends__home_page_header":"Split expenses
      with friends.","learn_more":"Learn more","meta_tag_decomponent
      ion":"Splitwise is a free tool for friends and roommates to track bills
      and other shared expenses, so that everyone gets paid back. On the web,
      iPhone, and Android!","made_with_smiles_in_pvd_html":"Made with ☻ in
      Providence, RI, USA","copyright_YEAR":"Copyright © %@ Splitwise, Inc. All
      rights
      reserved.","jobs":"Jobs","calculators":"Calculators","blog":"Blog","terms":"Terms","press":"Press","you__subject":"You","_link_arrow":"%@
      »","_exclamation":"%@!","_parentheses":"(%@)","_in_progress":"%@...","_plus_prefix":"+
      %@","_colon":"%@:","_period":"%@.","_quotation_marks":"“%@”","you_added_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e added
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_updated_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e updated
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_deleted_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e deleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","you_undeleted_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e undeleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_added_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e added
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_updated_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e updated
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_deleted_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e deleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_undeleted_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e undeleted
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%3$@”\u003c/strong\u003e.","NAME_paid_you_AMOUNT_for_DEcomponent
      ION":"%1$@ paid you %3$@ for “%4$@”","you_paid_NAME_AMOUNT_for_DEcomponent
      ION":"You paid %2$@ %3$@ for
      “%4$@”","NAME_paid_NAME_AMOUNT_for_DEcomponent ION":"%1$@ paid %2$@ %3$@
      for
      “%4$@”","you_added_paid_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_added_received_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      recorded a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","you_added_uninvolved_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      added a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_updated_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      updated a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_deleted_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      deleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_undeleted_payment_to_PERSON_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      undeleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_added_paid_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_added_received_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      recorded a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","NAME_added_uninvolved_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      added a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_updated_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      updated a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_deleted_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      deleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","NAME_undeleted_payment_to_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      undeleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e.","you_added_paid_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_added_received_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e recorded a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_added_uninvolved_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e added a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_updated_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e updated a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_deleted_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e deleted a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_undeleted_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003eYou\u003c/strong\u003e undeleted a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_added_paid_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_added_received_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e recorded a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_added_uninvolved_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e added a payment from
      \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_updated_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e updated a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_deleted_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e deleted a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","NAME_undeleted_payment_to_PERSON_for_DEcomponent
      ION_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e undeleted a payment
      from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e.","you_added_paid_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      paid \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_added_received_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      recorded a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_added_uninvolved_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      added a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_updated_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      updated a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_deleted_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      deleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_undeleted_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      undeleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_paid_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      paid \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_received_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      recorded a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_uninvolved_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      added a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_updated_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      updated a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_deleted_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      deleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_undeleted_payment_to_PERSON_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      undeleted a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_added_paid_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_added_received_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e recorded a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_added_uninvolved_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e added a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_updated_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e updated a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_deleted_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e deleted a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","you_undeleted_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e undeleted a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_paid_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e paid
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_received_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e recorded a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_added_uninvolved_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e added a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_updated_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e updated a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_deleted_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e deleted a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","NAME_undeleted_payment_to_PERSON_for_DEcomponent
      ION_in_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e undeleted a
      payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      \u003cstrong\u003e%3$@\u003c/strong\u003e for
      \u003cstrong\u003e“%4$@”\u003c/strong\u003e in
      \u003cstrong\u003e“%5$@”\u003c/strong\u003e.","MONTH_is_over_heres_whats_up_html":"%@
      is over. \u003cstrong\u003eHere’s what’s up\u003c/strong\u003e in your
      account on Splitwise:","FRIEND_wrote_the_following_note":"%@ wrote the
      following note:","resubcomponent _to_emails":"Click here to resubscribe to
      Splitwise emails.","in_GROUP":"in “%@”","PERSON_owes_you_AMOUNT":"%1$@
      owes you %2$@","paid_by_PERSON_and_split_equally":"Paid by %@ and split
      equally","PERSON_owes_you__group_cell":"%@ owes
      you","you_owe_PERSON__group_cell":"you owe
      %@","_question":"%@?","are_sending__legacy":"are
      sending","is_sending__legacy":"is
      sending","NAME_owes_you_AMOUNT_for_GROUP_html":"%1$@ owes you %2$@ for
      “%3$@”","you_owe_NAME_AMOUNT_for_GROUP_html":"You owe %1$@ %2$@ for
      “%3$@”","simplify_debts_is_STATE_with_LINK_html":"Simplify debts is
      \u003cstrong\u003e\u003ca
      href=\"%2$@\"\u003e%1$@\u003c/a\u003e\u003c/strong\u003e","informal_message_opening":"Hey
      there,","informal_message_settle_up":"This is just a note to settle up on
      Splitwise as soon as you get the chance. You can visit our page for
      details on who owes
      what:","owes_AMOUNT_in_total_but_not_settled_up_with_group":"owes %@ in
      total but has not settled up with all group
      members","owes_AMOUNT__group_short_html":"owes
      %@","gets_back_AMOUNT__group_short_html":"gets back
      %@","settled_up__group_short":"settled
      up","notifications":"Notifications","about__page":"About","and_split__after":"&ZeroWidthSpace;","paid__legacy":"paid","adding_accounts_not_supported":"Adding
      accounts not supported","group_totals_title":"Group spending
      summary","x_new_alerts":"%@ new alerts","and_1_other":"and 1
      other","and_x_others":"and %@
      others","touch_to_view_all_new_activity":"Touch to view all new
      activity","note_deleting_the_payment_on_splitwise_does_not_cancel_the_transfer_on_PLATFORM":"Note:
      Deleting the payment on Splitwise does not cancel the transfer on
      %@","me":"Me","you_owe_N_people_AMOUNT":"You owe %1$@ people
      %2$@","owes__cell_group":"owes","password_required_for_updates":"Your
      current password is required to change your password or email
      address","your_current_password":"Your current
      password","incorrect_token":"There was no account found to
      confirm","confirm_your_email_address":"Confirm your email
      address","please_confirm_your_email":"Please confirm your email
      address","click_to_confirm_email":"Click here to confirm your email
      address","or_copy_this_link_into_your_browser":"Or copy the following link
      into your web browser","your_phone_number":"Your phone
      number","IDENTITY_has_been_confirmed":"%@ has been
      confirmed","current_password_incorrect":"Your current password is not
      correct","to_confirm_EMAIL_please_visit":"To confirm you own %@, please
      click the following
      link:","current_password_required_to_change_email_address":"Your current
      password is required to change email addresses on your
      account","only_allowed_NUMBER_emails":"You are only able to add %@ email
      addresses to your account","EMAIL_was_added_to_your_account":"%@ was added
      to your Splitwise
      account","EMAIL_was_added_to_your_account_info_with_PRIMARY":"The email
      address \u003cstrong\u003e%1$@\u003c/strong\u003e was added as an alias to
      your account
      (\u003cstrong\u003e%2$@\u003c/strong\u003e).","you_may_not_remove_your_primary_identity":"You
      may not remove your primary
      identity","EMAIL_was_removed_from_your_account":"%@ was removed from your
      Splitwise
      account","EMAIL_was_removed_from_your_account_info_with_PRIMARY":"The
      email address \u003cstrong\u003e%1$@\u003c/strong\u003e was removed as an
      alias from your account
      (\u003cstrong\u003e%2$@\u003c/strong\u003e).","a_confirmation_request_was_sent_to_IDENTITY":"A
      confirmation request has been sent to
      %@.","primary__email_address":"Primary","unconfirmed__email_address":"unconfirmed","unconfirmed_identity_tooltip":"This
      address has not been confirmed. Click to send a confirmation email to this
      email address.","add_new_email":"Add a new
      email","enter_password_to_remove_email":"Enter your current password to
      remove this email
      address:","confirm__removal":"Confirm","EMAIL_was_made_your_primary_address":"Your
      primary email address was changed to
      %@.","primary_changed_from_EMAIL_to_EMAIL__subject":"Your primary email
      has been changed from %1$@ to
      %2$@","primary_changed_from_EMAIL_to_EMAIL":"Your primary Splitwise email
      has been changed from \u003cstrong\u003e%1$@\u003c/strong\u003e to
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","reply_right_away_to_contact_support":"If
      you did not expect this email, please reply right away to contact
      Splitwise
      support.","none__no_phone_number":"None","splitwise_would_like_to_help_you_find_friends_that_already_use_splitwise":"Splitwise
      would like to help you find friends that already use
      Splitwise.","note_does_not_include_group_expenses__csv_export":"Note: does
      not include group
      expenses","you_do_not_have_permission_to_perform_that_action":"You do not
      have permission to perform that
      action.","third_party_involved_delete_warning":"Some of your expenses with
      this person also involve other third parties. \u003cstrong\u003eAs a
      result, deleting this friend will not delete those expenses, and they will
      still be visible from the \"All expenses\" screen.\u003c/strong\u003e
      However, this friend should be removed from your list of friends
      successfully.","delete_this_friend":"Delete this
      friend","this_person_is_in_the_following_groups_with_you":"This person is
      in the following groups with
      you:","how_to_change_this_persons_contact":"To change this person's
      contact info, please visit your group's settings
      page.","removed__csv_user":"(removed)","EMAIL_belongs_to_another_account":"%@
      already belongs to another
      account","EMAIL_belongs_to_another_account__reset_and_merge_suggestion":"If
      %1$@ is your email address, you can reset your password from our password
      reset page.","confirmed_user_info":"Trying to edit this group member's
      name or contact information? Since they have accepted their invitation and
      created a password, you won't be able to — but they can edit their
      information from their own Settings
      page.","trying_to_edit_your_own_information":"Trying to edit your own
      information?","edit_your_own_info_message":"Open your 'Settings' screen
      from the left sidebar menu to edit your name, contact information, avatar
      and more.","please_confirm_this_number":"Please confirm this phone
      number","showing_expenses_for__month":"Showing expenses
      for","starting_balance_as_of_DATE":"Starting balance as of
      %@","total_balance_as_of_DATE__caps":"TOTAL BALANCE as of
      %@","was_owed_AMOUNT__short":"was owed %@","owed_AMOUNT__short":"owed
      %@","you_paid__header":"You paid","your_share__header":"Your
      share","balance__header":"Balance","send_reminder_unacquainted_error":"You
      must be acquainted with this user to send
      reminders","send_reminder_missing_email_error":"Your friend must have or
      enter an email address to receive
      reminders","this_person_does_not_have_valid_email_address":"This person
      does not have a valid email address","merge_user_error":"The account
      information you provided was incorrect. If you do not know both accounts'
      passwords, please reset them and try again. Contact support@splitwise.com
      for further assistance if you continue to have
      trouble.","merge_success_notice":"Your accounts were merged successfully!
      If you use our mobile app, you may need to log out and log back in before
      all changes take effect.","merge_error_contact_us":"Your accounts could
      not be merged automatically - please contact support@splitwise.com and
      we'll help you out ASAP. Sorry for the
      trouble!","settled_up__group_short_html":"settled
      up","invited_via_sms":"invited via
      SMS","you_owe_AMOUNT__total_balance":"you owe
      %@","you_are_owed_AMOUNT__total_balance":"you are owed
      %@","you_are_all_settled_up__total_balance":"you are all settled
      up","split_details":"Split
      details","OLD_EMAIL_was_updated_to_NEW_EMAIL_note_these_are_the_same":"%1$@
      was updated to %2$@ as these email addresses are considered the same by
      your provider","expense_too_small_to_convert":"This expense is too small
      to convert and would result in amounts that cannot be paid back. Please
      consider converting it with your friends yourself or removing/forgiving
      the debt.","paypal_permissions_permanently_denied_error_message":"Want to
      settle up via PayPal? Tap here to open 'Settings', then grant Splitwise
      the 'Phone' permission. Thanks!","add_bill_permission_primer_text":"Enable
      “Contacts” to quickly add friends by email or phone number.\n\nWe DO NOT
      upload your address book.","paypal_permission_primer_text":"PayPal
      requires the “Phone” permission to make payments. Splitwise does not use
      this permission in any other way.\n\nTap “Allow” on the next screen to
      continue with your
      payment.","continue_button_text":"Continue","all_balances__filter":"All
      balances","you_owe__filter":"You owe","you_are_owed__filter":"You are
      owed","or_add_an_expense__empty_tutorial":"Or add an
      expense","search_your_contacts":"Search your
      contacts","sms_phone_was_added_to_EMAIL_confirm_LINK":"Your phone number
      was just added to the Splitwise account '%1$@'. To confirm your #, tap
      here: %2$@","confirm_phone":"Confirm your phone
      number","for_emails_and_notifications__parentheses":"(for emails and
      notifications)","change_your_group_invite_link":"Change your group's
      invite link","change_your_group_invite_link_confirmation":"Are you sure
      you want to generate a new invite link? This will invalidate your existing
      invite link. Your new invite link can be shared with your friends and used
      to join your
      group.","default_split_set_for_SPLITTABLE_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      set a default split for new expenses in
      \u003cstrong\u003e'%@'\u003c/strong\u003e.","default_split_updated_for_SPLITTABLE_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      updated your default split for new expenses in
      \u003cstrong\u003e'%@'\u003c/strong\u003e.","default_split_disabled_for_SPLITTABLE_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      disabled your default split for new expenses in
      \u003cstrong\u003e'%@'\u003c/strong\u003e.","default_split_system_disabled_for_SPLITTABLE_html":"\u003cstrong\u003eSplitwise\u003c/strong\u003e
      disabled your default split for new expenses in
      \u003cstrong\u003e'%@'\u003c/strong\u003e because a group member was added
      or removed.","yes_join_group":"Yes, join the group","no_dont_join":"No, I
      don't want to join","cash_payment_note":"This payment was recorded using
      the Splitwise \"record a cash payment\" feature. No money has been
      moved.","review_activity":"Review
      activity","password_changed_subject":"Your Splitwise password has been
      updated","password_changed_title":"Password updated for your Splitwise
      account","password_changed_body":"Your Splitwise password was just updated
      successfully. For additional security, we're sending an email to confirm
      that this was you.","new_login_subject":"New login to your Splitwise
      account","new_login_title":"New sign-in to your Splitwise
      account","new_login_body_from_DEVICE_html":"There was a new login to your
      Splitwise account from the following device:
      \u003cstrong\u003e%1$@\u003c/strong\u003e. We're sending this note to
      confirm that it was you.\u003cbr\u003e\u003cbr\u003eIf you recently logged
      into your Splitwise account, you can safely ignore this
      email.","recent_visits_title":"Recent
      visits","notice_something_suspicious_html":"Notice something suspicious?
      \u003ca
      href=\"mailto:support@splitwise.com?subject=Suspicious%20account%20activity\"\u003eContact
      support\u003c/a\u003e for more
      help.","time_header":"Time","device":"Device","user_agent":"User
      agent","estimated_location":"Estimated
      location","estimated_location_decomponent ion_html":"Based on your IP
      address, we can provide a rough estimate of the location that your visit
      came from.\u003cbr\u003e\u003cbr\u003eIf you are using a VPN, this
      estimate will show the location of your VPN, and not your original
      location.","ip_address":"IP
      address","unknown":"Unknown","show_additional_technical_details_button":"Show
      additional technical details","browser":"Browser","pro_feature_decomponent
      ion_charts":"Charts and graphs","pro_feature_decomponent ion_no_ads":"A
      totally ad-free experience","pro_feature_decomponent ion_search":"Expense
      search","pro_feature_decomponent ion_currency_conversion":"Currency
      conversion","pro_feature_decomponent ion_early_access":"Early access to
      new features","pro_feature_decomponent ion_plus_more":"Plus more goodies
      to come!","get_splitwise_pro_button":"Get Splitwise
      Pro","not_now_thanks_button":"Not now,
      thanks","pro_ad_header_pay_any_amount_html":"Pay \u003cspan\u003eany
      amount you want\u003c/span\u003e and
      get:","pro_ad_header_pay_PRICE_per_TIME_html":"Pay
      \u003cspan\u003e%1$@/%2$@\u003c/span\u003e and
      get:","pro_ad_header_pay_PRICE_per_TIME_or_PRICE_per_TIME_html":"Pay
      \u003cspan\u003e%1$@/%2$@\u003c/span\u003e or
      \u003cspan\u003e%3$@/%4$@\u003c/span\u003e and
      get:","pro_payment_info_header":"Payment
      info","pro_payment_info_subheader_html":"You are subscribing to
      \u003cstrong\u003eSplitwise
      Pro\u003c/strong\u003e.","pro_payment_info_subheader_AMOUNT_per_PERIOD_html":"You
      will be charged
      \u003cstrong\u003e%1$@/%2$@\u003c/strong\u003e.","pro_payment_form_submit_button":"Subscribe","payment_form_card_number":"Card
      number","payment_form_card_security_code":"Security
      code","payment_form_expiration_date":"Expiration
      date","payment_form_secure_payments_URL_by_COMPANY_html":"Secure payments
      by \u003ca href='%1$@'\u003e%2$@\u003c/a\u003e.","pro_subcomponent
      ion_success_message_details_URL_html":"You can update or cancel your
      subcomponent ion at any time from your \u003ca href='%@'\u003eaccount
      settings\u003c/a\u003e page.","your_pro_subcomponent
      ion_has_been_canceled_ends_on_DATE":"Your Splitwise Pro subcomponent ion
      has been canceled. It will end on
      %1$@.","resubscribe_to_splitwise_pro_button":"Re-subscribe to Splitwise
      Pro","restore_purchases_button":"Restore
      purchases","pro_feature_decomponent ion_spending_charts":"Spending
      charts","pro_feature_decomponent ion_and_more":"and
      more","pro_feature_decomponent ion_transaction_import":"Transaction
      import","pro_feature_decomponent ion_receipt_scanning":"Receipt
      scanning","pro_feature_decomponent ion_save_default_splits":"Save default
      splits","pro_feature_decomponent
      ion_filters":"Filters","pro_feature_decomponent ion_no_ads_short":"No
      ads","pro_subcomponent ion_trial":"Trial","pro_subcomponent
      ion_free_trial":"Free trial","pro_subcomponent ion_trial_period":"%@
      month(s) free","pro_subcomponent ion_yearly_price":"Per
      year","pro_subcomponent ion_monthly_price":"Per month","pro_subcomponent
      ion_upgrade_title":"Upgrade to Splitwise Pro!","pro_subcomponent
      ion_upgrade_button":"Upgrade","pro_subcomponent ion_cancel":"Cancel
      Splitwise Pro","solo_expenses":"Solo
      expenses","spending_by_category":"Spending by category","subcomponent
      ion_period_month":"month","subcomponent
      ion_period_year":"year","no_non_group_expenses_with_friend":"You have no
      non-group expenses with this
      person","sms_password_reset_for_pending_invite_LINK":"You have a pending
      Splitwise invite to accept: https://www.splitwise.com%@\nIf you didn't
      request this message, you may ignore
      it.","sms_password_reset_failed":"Someone tried to reset their Splitwise
      password via SMS, but there is no account for this phone #. If you didn't
      request this message, you may ignore it. Sorry!","view_more_charts":"View
      more charts","spending_over_time":"Spending over
      time","spending_by_category_details_picker":"All group
      members","pro_email_header":"Thank you for joining Splitwise Pro! Here's
      an overview of the features you just unlocked:","pro_email_footer":"We are
      actively building new Pro features, so you can expect regular updates and
      improvements. If you have feedback or suggestions, just hit reply to share
      them with us –- we'd love to hear from you.","pro_feature_decomponent
      ion_receipt_scanning_with_itemization":"Receipt scanning with
      itemization","pro_feature_decomponent
      ion_spending_charts_and_graphs":"Spending charts and
      graphs","pro_feature_decomponent ion_early_access_overview":"When we have
      something brand new in the works, we'll email you to share a sneak
      peek.","pro_feature_access_receipt_scanning":"To access, start adding a
      bill then tap the camera icon.","pro_feature_access_search_apple":"To
      access, launch the app then tap the search icon in the upper
      left.","pro_feature_access_search_google":"To access, launch the app then
      tap the search icon in the upper
      right.","pro_feature_access_search_web":"To access, click your name then
      \"Search\".","pro_feature_access_more_button":"To access, open any group
      or friendship then tap the More
      button.","pro_feature_access_menu_button":"To access, open any group or
      friendship then tap the menu
      button.","pro_feature_access_settings_icon":"To access, open any group or
      friendship then click the settings icon on the
      right.","pro_feature_access_charts_web":"To access, click your name then
      \"Charts\". Or click any expense to review spending in that category over
      time.","fullscreen_ad_ios_app_store_subcomponent
      ion_terms_html":"\u003cstrong\u003eRecurring billing, cancel
      anytime.\u003c/strong\u003e When trial period ends, your subcomponent ion
      will be charged to your iTunes account and auto-renews unless disabled a
      day before the renewal date. You can manage your subcomponent ion by going
      to iTunes Account Settings.","support_splitwise_ad_header":"Support
      Splitwise!","subscribe_button_text":"Subscribe","join_splitwise_pro_for_PRICE_per_TIME_and_unlock_html":"Join
      Splitwise Pro for \u003cstrong\u003e%1$@/%2$@\u003c/strong\u003e to
      unlock:","subcomponent ion_price_details_save_AMOUNT_html":"Save
      %@","challenge_email_header":"Someone is attempting to login to your
      Splitwise account from an unknown device or
      location.","challenge_email_this_is_you":"If this is you, please click the
      below link to finish signing into
      Splitwise:","challenge_email_this_is_not_you":"If you did not initiate
      this process, please immediately reset your Splitwise
      password:","challenge_email_footer":"If you have questions or concerns,
      please reply to this email to get in touch with Splitwise
      support.","location":"Location","challenge_token_error_html":"We could not
      confirm your login attempt. Sorry!\u003cbr\u003e\u003cbr\u003eIf you've
      tried to log in multiple times, please note that only the most recent
      login confirmation link will work. Please wait for all messages to arrive,
      then open the link in the most recent
      message.","challenge_confirmation_header":"Confirmation
      successful","challenge_confirmation_message":"Thanks for confirming your
      login attempt!","challenge_confirmation_action_html":"Please
      \u003cstrong\u003ereturn to the Splitwise app and log in
      again\u003c/strong\u003e, and this time your login should be
      successful.","challenge_please_confirm_header":"Check your email to finish
      logging in","challenge_please_confirm_message_EMAIL_html":"It looks like
      you may be logging in from a new device or location. For your security,
      we’ve sent a login confirmation email to
      \u003cstrong\u003e%@\u003c/strong\u003e.","challenge_please_confirm_action_html":"Please
      \u003cstrong\u003eclick the confirmation link in the
      email\u003c/strong\u003e to finish signing
      in.","challenge_mobile_error_EMAIL":"It looks like you may be logging in
      from a new device or location. For your security, please click the
      confirmation link sent to %@ to finish signing
      in.","finish_signing_up_LINK_html":"It looks like you were invited to
      Splitwise, but you haven't finished signing up yet. \u003ca
      href='%@'\u003eClick here\u003c/a\u003e to reset your password and finish
      creating an
      account.","account_settings_privacy_and_security_header":"Privacy \u0026
      Security","to_request_a_full_export_of_your_account_notice_html":"To
      request a full export of your account or to revoke consent for the
      processing of your data, please contact
      %1$@.","gdpr_mass_mail_subject":"Updated Terms of Service and Privacy
      Policy","gdpr_mass_mail_hi_there":"Hi
      there,","gdpr_mass_mail_thank_you":"Thank you for using
      Splitwise!","gdpr_mass_mail_the_splitwise_team":"–The Splitwise
      Team","try_splitwise_pro_header":"Try Splitwise
      Pro!","start_your_one_month_free_trial_button":"Start your 1-month free
      trial","start_your_one_week_free_trial_button":"Start your 1-week free
      trial","start_your_free_trial_button":"Start your free
      trial","now_offering_a_one_month_free_trial_html":"Now offering a
      \u003cstrong\u003e1-month free
      trial!\u003c/strong\u003e","now_offering_a_one_week_free_trial_html":"Now
      offering a \u003cstrong\u003e1-week free
      trial!\u003c/strong\u003e","now_offering_a_free_trial_html":"Now offering
      a \u003cstrong\u003efree
      trial!\u003c/strong\u003e","after_that_pay_PRICE_per_TIME_and_get_html":"After
      that, pay \u003cspan\u003e%1$@/%2$@\u003c/span\u003e and
      get:","pro_feature_details_receipt_scanning_with_itemization":"Add
      complicated bills to Splitwise with ease! Just take a picture of your
      receipt, and Splitwise will automatically detect the individual items so
      that you can assign them to your friends. Perfect for splitting restaurant
      and grocery bills.","pro_feature_details_currency_conversion":"Going
      abroad? Splitwise can convert all your bills to any currency you'd like,
      using today's foreign exchange
      rates.","pro_ad_receipt_scanning_full_decomponent ion":"Just take a
      picture of your receipt! Splitwise will scan your expenses, itemize them,
      and let you split them with your friends any way you
      like.","pro_ad_now_part_of_splitwise_pro_html":"Now part of
      \u003cstrong\u003eSplitwise
      Pro!\u003c/strong\u003e","want_to_subscribe_to_splitwise_pro":"Want to
      subscribe to Splitwise Pro?","first_youll_need_a_splitwise_account":"First
      you'll need a free Splitwise
      account.","pro_product_page_subheader":"Splitwise Pro includes all sorts
      of features to make splitting expenses easier than
      ever.","pro_feature_decomponent
      ion_itemization":"Itemization","pro_feature_details_itemization":"After
      scanning a receipt, Splitwise will detect the individual items so that you
      can assign them to your friends. Perfect for splitting restaurant and
      grocery bills.","pro_feature_details_receipt_scanning":"Add complicated
      bills to Splitwise with ease! Just take a picture of your receipt, and
      Splitwise will automatically scan its
      contents.","pro_feature_details_currency_conversion_data_source_html":"We
      use standard foreign exchange rates, via
      %@.","pro_feature_details_search":"Make sure you've entered everything
      correctly. Our search feature will help you locate old bills so you can
      double-check and edit them as needed.","pro_feature_details_no_ads":"Use
      the Splitwise app without any interruptions, and help support future
      development of Splitwise!","pro_feature_details_early_access":"Shape the
      future of Splitwise by sharing your feedback directly with our product and
      engineering teams. Get early access to redesigns and major new
      features.","pro_feature_details_charts":"Keep your budget on track, at
      home or on a trip. We break down your spending by category and show you
      trends over time, so you can identify excessive spending and save
      money.","have_questions":"Have
      questions?","email_us_at_LINK_and_we_can_help_you_html":"Email us at %@
      and we'd be happy to help you out.","pro_subcomponent
      ion_apple_cancellation_instructions_LINK":"This subcomponent ion was
      purchased through Apple. Apple requires iOS subcomponent ions to be
      canceled directly through the App Store app, or via iTunes on your
      computer. For more details, visit %@. Sorry for the
      inconvenience!","pro_ad_header_pay_AMOUNT_or_AMOUNT_html":"Pay %1$@ or
      %2$@ and get:","splitwise_pro_sidebar_ad_content":"Subscribe to Splitwise
      Pro for receipt scanning, no ads, currency conversion, charts, search, and
      more.","by_default":"by
      default","exchange_rate_for_CURRENCY_CODE_not_found":"The exchange rate
      for %1$@ could not be found. Please contact support@splitwise.com for
      assistance.","no_expenses_found_for_conversion":"No expenses were found to
      convert!","currency_conversion_in_progress":"Your currency conversion is
      now in progress. The conversion may take up to a minute to
      complete.\n\nPlease wait a moment, then pull-to-refresh to see your
      updated expenses. Thanks for your
      patience!","RELATIONSHIP_was_unable_to_be_converted_due_to_ERRORS":"'%1$@'
      was unable to be converted due to the following errors:
      %2$@","RELATIONSHIP_was_unable_to_be_converted":"'%1$@' was unable to be
      converted.","no_pro_error_message":"Sorry, that feature requires Splitwise
      Pro.","login_challenge_subject_line":"Please confirm your recent login
      attempt","alert_p2p_request_unsupported":"Splitwise does not currently
      support requesting money via this service. If you want someone else to
      settle up with you via this service, they'll need to log in and initiate
      the transaction from their account. Our
      apologies!","alert_p2p_recipient_invalid_email":"The user you are trying
      to pay does not have a valid email address, which is required in order to
      send this payment. Please ask the user to add a valid email address to
      their account, then try again.","alert_p2p_user_has_not_consented":"You
      have not yet provided your consent to use this payment service. Please go
      back and try your payment again, and Splitwise should ask you to confirm
      that you consent to share data with this payment
      service.","canceled":"Canceled","pay_with_paypal_button":"Pay with
      PayPal","verify_your_account_to_continue_settling_up_error_confirmation":"You
      must verify your Splitwise account to settle up via this
      service.","block_button":"Block","block_form_instructions":"Enter an email
      address to block:","manage_your_blocklist":"Manage your
      blocklist","block_other_users":"Block other
      users","you_have_not_blocked_any_other_users":"You have not blocked any
      other users.","you_have_blocked_the_following_people":"You have blocked
      the following people:","could_not_find_user_error":"Could not find
      user.","added_user_to_blocklist_confirmation":"Added user to
      blocklist.","removed_user_from_blocklist_confirmation":"Removed user from
      blocklist.","group_invite_link_not_found_error":"Sorry, we could not find
      a group for that invite link! If this is a brand-new group, the group
      creator may not have finished saving the group yet. Please try again in a
      few minutes, or ask your friend to resend you a more recent invite
      link.","paytm_payment_confirmation_system_comment":"Sent via Paytm to
      phone number %1$@.\nConfirmation #: %2$@\nFor help with Paytm, please
      email care@paytm.com or call
      +91–9643979797","new_lapsed_user_subject_line":"Any feedback for
      Splitwise?","fullscreen_ad_android_subcomponent
      ion_terms_html":"\u003cstrong\u003eRecurring billing, cancel
      anytime.\u003c/strong\u003e When trial period ends, your subcomponent ion
      will be charged to your Google Play account, and auto-renews unless
      disabled a day before the renewal date. You can manage your subcomponent
      ion from the Play Store.","fullscreen_ad_web_subcomponent
      ion_terms_html":"\u003cstrong\u003eRecurring billing, cancel
      anytime.\u003c/strong\u003e When trial period ends, your subcomponent ion
      will be charged to your credit card, and auto-renews unless disabled 24
      hours before the end of the bill cycle. You can manage your subcomponent
      ion from your Account Settings
      page.","NAME_created_cover_photo_for_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      uploaded a cover photo for
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_created_cover_photo_for_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      uploaded a cover photo for
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_changed_cover_photo_for_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      changed the cover photo for
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_changed_cover_photo_for_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      changed the cover photo for
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","NAME_removed_cover_photo_for_GROUP_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed the cover photo from
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","you_removed_cover_photo_for_GROUP_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed the cover photo from
      \u003cstrong\u003e“%2$@”\u003c/strong\u003e.","privacy_policy":"Privacy
      Policy","new_login_review_activity_LINK_cta_html":"If you don't recognize
      this login, please \u003ca href=\"%1$@\"\u003ereview your account
      activity\u003c/a\u003e.","core_features_header":"Core
      features","pro_features_header":"Pro features","features_list_header":"The
      whole nine yards","core_feature_add_groups_and_friends":"Add groups and
      friends","core_feature_split_expenses_record_debts":"Split expenses,
      record debts","core_feature_equal_or_unequal_splits":"Equal or unequal
      splits","core_feature_split_by_percent_or_shares":"Split by % or
      shares","core_feature_calculate_total_balances":"Calculate total
      balances","core_feature_suggested_repayments":"Suggested
      repayments","core_feature_simplify_debts":"Simplify
      debts","core_feature_recurring_expenses":"Recurring
      expenses","core_feature_offline_mode":"Offline
      mode","core_feature_cloud_sync":"Cloud
      sync","core_feature_spending_totals":"Spending
      totals","core_feature_categorize_expenses":"Categorize
      expenses","core_feature_csv_exports":"Easy CSV
      exports","core_feature_many_languages":"7+
      languages","core_feature_many_currencies":"100+
      currencies","core_feature_payment_integrations":"Payment
      integrations","homepage_title_trips_html":"Less stress when sharing
      expenses \u003cspan class=\"%@\"\u003eon
      trips.\u003c/span\u003e","homepage_title_housemates_html":"Less stress
      when sharing expenses \u003cspan class=\"%@\"\u003ewith
      housemates.\u003c/span\u003e","homepage_title_partner_html":"Less stress
      when sharing expenses \u003cspan class=\"%@\"\u003ewith your
      partner.\u003c/span\u003e","homepage_title_anyone_html":"Less stress when
      sharing expenses \u003cspan class=\"%@\"\u003ewith
      anyone.\u003c/span\u003e","homepage_subtitle":"Keep track of your shared
      expenses and balances with housemates, trips, groups, friends, and
      family.","homepage_free_for_IPHONE_ANDROID_and_web_html":"Free for %1$@,
      %2$@,\u0026nbsp;and web.","homepage_download_the_app_button":"Download the
      app","homepage_subheader_track_balances":"Track
      balances","homepage_subheader_track_balances_decomponent ion":"Keep track
      of shared expenses, balances, and who owes
      who.","homepage_subheader_organize_expenses":"Organize
      expenses","homepage_subheader_organize_expenses_decomponent ion":"Split
      expenses with any group: trips, housemates, friends, and
      family.","homepage_subheader_add_expenses_easily":"Add expenses
      easily","homepage_subheader_add_expenses_easily_decomponent ion":"Quickly
      add expenses on the go before you forget who
      paid.","homepage_subheader_pay_friends_back":"Pay friends
      back","homepage_subheader_pay_friends_back_decomponent ion":"Settle up
      with a friend and record any cash or online
      payment.","homepage_subheader_pro":"Get even more with
      PRO","homepage_subheader_pro_decomponent ion":"Get even more organized
      with receipt scanning, charts and graphs, currency conversion, and
      more!","start_with_one_month_free_prompt_html":"Start with \u003cspan
      class=\"%@\"\u003e1 month free\u003c/span\u003e, followed
      by","start_with_one_week_free_prompt_html":"Start with \u003cspan
      class=\"%@\"\u003e1 week free\u003c/span\u003e, followed
      by","currency_conversion_too_many_expenses":"There were too many expenses
      to be converted. Please contact support@splitwise.com for
      assistance.","conversion_to_CURRENCY_relationship_deleted":"The group or
      friendship whose expenses you wanted to convert to %@ no longer
      exists.","PHONE_was_added_to_your_account":"%@ was added to your Splitwise
      account","PHONE_was_added_to_your_account_info":"The phone number %@ was
      just added to your Splitwise account. If this is your number, you can
      safely ignore this email.","PHONE_was_removed_from_your_account":"%@ was
      removed from your Splitwise
      account","PHONE_was_removed_from_your_account_info":"The phone number %@
      was just removed from your Splitwise
      account.","phone_was_changed_on_your_account":"Phone number changed on
      your Splitwise
      account","PHONE_was_changed_to_PHONE_on_your_account_info":"The phone
      number on your Splitwise account was changed from %1$@ to
      %2$@.","accounts_merged":"Splitwise accounts
      merged","accounts_with_EMAIL_and_EMAIL_merged":"Your Splitwise account
      with %1$@ was just merged with the Splitwise account with
      %2$@.","identity_change_ignore_if_legitimate":"If you made this change,
      you can safely ignore this
      email.","category_49":"Education","category_50":"Childcare","pro_unsubscribe_cleared_default_split_in_GROUP":"\u003cstrong\u003eSplitwise\u003c/strong\u003e
      disabled your default split for new expenses in
      \u003cstrong\u003e“%@”\u003c/strong\u003e because you left Splitwise Pro.
      If you'd like to re-enable this default split, please re-subscribe to
      Splitwise Pro.","add_people_duplicate_email":"The following people had the
      same email address:","add_people_duplicate_phone":"The following people
      had the same phone number:","flash_login_failed_phone_number":"Whoops! It
      looks like you’re trying to log in with a phone number. Please include
      your country code with a leading plus
      sign.","login_failed_phone_number":"Please include your country code with
      a leading plus sign.","sms_magic_login_PATH":"Tap this link to log into
      your Splitwise account: https://www.splitwise.com%@\nIf you did not
      request this message, you may safely ignore
      it.","sms_magic_login_for_pending_invite_PATH":"This phone # doesn't
      belong to an active Splitwise account, but it's been invited in the past.
      To accept: https://www.splitwise.com%@","sms_magic_login_failed":"Someone
      requested a Splitwise magic link for this phone #, but there is no account
      for this phone #. If you did not request this message, you may ignore
      it.","magic_login_subject":"Your magic login
      link","magic_login_failed_subject":"Splitwise magic login
      attempt","magic_login_link_presentation":"Hello! You asked us to send you
      a magic link for quickly logging into Splitwise. Here it
      is:","magic_login_expiration_notice":"Please note this link will expire in
      24 hours, and can only be used once.","magic_login_failed_body":"You (or
      someone else) entered this email address when requesting a magic link for
      logging into Splitwise. Unfortunately, there is no account on Splitwise
      with this email address.","magic_login_failed_reprompt_LINK_html":"If you
      are a Splitwise user and were expecting this email, please return to our
      \u003ca href='%@'\u003emagic login form\u003c/a\u003e and try again with
      the email address that you used to register for
      Splitwise.","email_nonuser_sorry":"If you are not a Splitwise user, please
      ignore this email. (And sorry for the
      bother!)","magic_login_pending_invite_html":"Hi there! You recently
      requested a magic link for logging into Splitwise. \u003cstrong\u003eThere
      is no existing Splitwise account under this email address. However, there
      is a pending invitation for this email
      address.\u003c/strong\u003e","magic_login_pending_invite_link_presentation":"If
      you wish to accept your invite or merge it into an existing Splitwise
      account, please click the link below:","email_reply_for_assistance":"If
      you'd like assistance, please reply to this message to get in touch with
      our support team.","get_magic_link_title":"Log in via magic
      link","get_magic_link_prompt":"Enter your email address or phone number
      and we'll send you a magic link to finish logging
      in.","get_magic_link":"Get magic link","magic_link_sent_to_EMAIL_html":"An
      email has been sent to %@ with a magic login
      link.","magic_link_sent_to_PHONE_html":"An SMS has been sent to %@ with a
      magic login link.","invalid_email_or_phone_alert_INPUT_html":"You did not
      enter a valid email address or phone number (%@). Please try
      again.","email":"Email","error_invalid_perishable_token_link":"This link
      has expired, or has already been used. Please try
      again.","magic_login_welcome":"Welcome","magic_login_greet_NAME_with_EMAIL_html":"Hey
      \u003cstrong\u003e%1$@\u003c/strong\u003e! Please click the button below
      to log in to Splitwise as
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","expense_totals_too_many_expenses":"There
      were too many expenses to calculate
      totals.","forgot_password_subject_line_new":"Splitwise password
      reset","password_reset_presentation":"You requested a password reset link
      for your Splitwise account. Here it is:","password_reset_may_ignore":"If
      you didn't request this password reset link, you may safely ignore this
      message; your Splitwise account password will not
      change.","password_reset_failed_subject_line_new":"Splitwise password
      reset attempt","password_reset_failed_try_again_LINK_html":"If you are a
      Splitwise user and were expecting this email, please try again with the
      email address that you used to register for Splitwise: \u003ca
      href='%1$@'\u003e%1$@\u003c/a\u003e","password_reset_pending_invite_new_html":"Hi
      there! You recently requested a password reset link for logging into
      Splitwise. \u003cstrong\u003eThere is no existing Splitwise account under
      this email address. However, there is a pending invitation for this email
      address.\u003c/strong\u003e","blocklist_instructions_intro":"When you
      block someone, that person is automatically removed from your list of
      friends and balances. Additionally, the following kinds of information are
      also hidden:","blocklist_instructions_detail_1":"Any groups that involve
      the blocked person","blocklist_instructions_detail_2":"Any future
      notifications from that person","blocklist_instructions_detail_3":"Any
      future \"recent activity\" entries caused by that person's
      actions","blocklist_instructions_more_details":"Blocking another person
      does not notify that person about the block in any way. The blocked person
      can continue to add you to new expenses, groups, and more, but those new
      items will not appear in your account. If you choose to unblock the person
      later, then any items that they added you to will become visible at that
      time.","notification_you_blocked_NAME_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      blocked \u003cstrong\u003e%@\u003c/strong\u003e. This notification is only
      visible to
      you.","notification_you_unblocked_NAME_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      unblocked \u003cstrong\u003e%@\u003c/strong\u003e. This notification is
      only visible to you.","your_account_has_been_closed":"Your account has
      been closed.","too_many_manual_invite_reminders_today":"Sorry, you've
      re-sent this invite too many times today. Please try again
      tomorrow.","expense_spreadsheet_export_deferred":"We'll send you an email
      with your expense spreadsheet as soon as it's
      ready.","expense_spreadsheet_export_email_find_attached":"Please find your
      requested export attached. Please let us know if you have any
      questions.","expense_spreadsheet_export_email_subject":"Your Splitwise
      export is ready","top_category":"top
      category","PHONE_belongs_to_another_account":"%@ already belongs to
      another
      account.","PHONE_belongs_to_another_account__reset_and_merge_suggestion":"If
      %1$@ is your phone number, you can reset your password from our password
      reset
      page.","you_removed_NAME_as_friend__no_balance_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%1$@\u003c/strong\u003e from your friends list.
      You two were all settled
      up!","NAME_removed_you_as_friend__no_balance_html":"\u003cstrong\u003e%@\u003c/strong\u003e
      removed you from their friends list. You two were all settled
      up!","you_removed_NAME_as_friend__they_owed_AMOUNT_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%1$@\u003c/strong\u003e from your friends list.
      They owed you
      %2$@.","you_removed_NAME_as_friend__you_owed_AMOUNT_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%1$@\u003c/strong\u003e from your friends list.
      You owed them
      %2$@.","NAME_removed_you_as_friend__they_owed_AMOUNT_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed you from their friends list. They owed you
      %2$@.","NAME_removed_you_as_friend__you_owed_AMOUNT_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed you from their friends list. You owed them
      %2$@.","you_removed_NAME_as_friend__balances_in_NUMBER_currencies_html":"\u003cstrong\u003eYou\u003c/strong\u003e
      removed \u003cstrong\u003e%1$@\u003c/strong\u003e from your friends list.
      You had outstanding balances in %2$@
      currencies.","NAME_removed_you_as_friend__balances_in_NUMBER_currencies_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      removed you from their friends list. You had outstanding balances in %2$@
      currencies.","shareable_content__share_to_PLATFORM":"Share to
      %@","shareable_content__more_sharing_options":"More share
      options","try_splitwise_its_free":"Try Splitwise (it's
      free)","not_now":"Not now","join_FRIEND_and_others_on_splitwise":"Join %@
      and millions of others who keep track of shared expenses on
      Splitwise","join_FRIEND_and_others_on_splitwise_long":"Join %@ and
      millions of others who keep track of shared expenses and balances with
      housemates, trips, groups, friends, and
      family.","N_months_ago_you_joined_GROUP":"%1$@ months ago, you joined the
      group “%2$@”.","1_year_ago_you_joined_GROUP":"1 year ago, you joined the
      group “%2$@”.","N_years_ago_you_joined_GROUP":"%1$@ years ago, you joined
      the group “%2$@”.","N_months_ago_GROUP_was_joined_by_NAME":"%1$@ months
      ago, %3$@ joined the group
      “%2$@”.","1_year_ago_GROUP_was_joined_by_NAME":"1 year ago, %3$@ joined
      the group “%2$@”.","N_years_ago_GROUP_was_joined_by_NAME":"%1$@ years ago,
      %3$@ joined the group “%2$@”.","N_months_ago_you_created_GROUP":"%1$@
      months ago, you created the group
      “%2$@”.","1_year_ago_you_created_GROUP":"1 year ago, you created the group
      “%2$@”.","N_years_ago_you_created_GROUP":"%1$@ years ago, you created the
      group “%2$@”.","N_months_ago_GROUP_was_created_by_NAME":"%1$@ months ago,
      %3$@ created the group “%2$@”.","1_year_ago_GROUP_was_created_by_NAME":"1
      year ago, %3$@ created the group
      “%2$@”.","N_years_ago_GROUP_was_created_by_NAME":"%1$@ years ago, %3$@
      created the group “%2$@”.","remember_when_header":"Remember
      when?","shareable_content__social_title_for_GROUP":"Splitwise summary for
      “%@”","shareable_content__social_body":"Splitwise is a free app for
      sharing expenses with friends and family. Our mission is to reduce the
      stress that money places on
      relationships.","social_media_generic_share_body":"Splitwise makes it easy
      to split expenses with housemates, trips, groups, friends, and family.
      Check it out!","simplify_debts_video_what_exactly_is_simplify_debts":"What
      exactly is “simplify
      debts”?","simplify_debts_video_imagine_a_group_trip":"Imagine a group trip
      with lots of
      expenses.","simplify_debts_video_settle_up_off_summary":"Settle up with
      “simplify debts” turned off: 8
      payments.","simplify_debts_video_settle_up_on_summary":"Settle up with
      “simplify debts” turned on: 3
      payments.","simplify_debts_video_does_not_change_total_balance":"“Simplify
      debts” does not change anyone's total
      balance.","simplify_debts_video_just_reduces_payments":"It just reduces
      the number of payments, so everyone gets paid back
      quicker.","simplify_debts_video_savings_over_time":"“Simplify debts” can
      save your group hundreds of payments over
      time.","simplify_debts_video_thats_in_addition":"That's in addition to all
      the payments you already save by using Splitwise to split your
      expenses.","video_trancomponent _header":"Trancomponent
      ","NAME_turned_on_simplify_in_GROUP_see_how_it_works_html":"%1$@ turned
      \u003cstrong\u003e“simplify debts” on\u003c/strong\u003e in the group
      “%2$@”. ▶️ See how it
      works","shareable_content__social_title_generic":"Splitwise makes sharing
      easy","shareable_content__social_title_simplify_debts":"How “simplify
      debts” works on
      Splitwise","simplify_debts_video_splitwise_logo":"[Splitwise
      logo]","simplify_debts_video_zoom_to_settle_up":"[Zoom to Settle Up
      button]","a_confirmation_request_was_sent_to_IDENTITY__please_contact_support_with_issues":"A
      confirmation request has been sent to %@. For any trouble confirming your
      number, please contact:
      support@splitwise.com","push_notification_all_settled_up_account":"🎉 You
      are all settled up on
      Splitwise!","push_notification_all_settled_up_FRIEND":"🎉 You and %@ are
      all settled up!","push_notification_all_settled_up_GROUP":"🎉 You are all
      settled up in
      “%@”!","celebratory_title_generic":"Hooray!","celebratory_settle_up_caption_account_for_user":"You
      are all settled up!","celebratory_settle_up_caption_FRIEND_for_user":"You
      are all settled up with
      %@!","celebratory_settle_up_caption_GROUP_for_user":"You are all settled
      up in “%@”!","celebratory_settle_up_caption_account_for_social_media":"I
      am all settled
      up!","celebratory_settle_up_caption_FRIEND_for_social_media":"I am all
      settled up with
      %@!","celebratory_settle_up_caption_GROUP_for_social_media":"I am all
      settled up in “%@”!","celebratory_settle_up_share_prompt_account":"Love
      the feeling of being all settled up? Why not share
      it?","celebratory_settle_up_share_prompt_friend":"Love the feeling of
      being settled up with someone? Why not share
      it?","celebratory_settle_up_share_prompt_group":"Love the feeling of being
      settled up with friends? Why not share
      it?","celebratory_settle_up_landing_page_header":"Splitwise makes it easy
      to get paid back.","welcome_to_splitwise_pro":"Welcome to Splitwise
      Pro!","confirm_destroy_user__enter_current_password":"Enter your current
      password to delete your
      account:","confirm_destroy_user__send_email_prompt":"Or, delete your
      account by clicking on a link in your email:","send_email_button":"Send
      email","confirm_destroy_user__email_body_html":"Someone recently requested
      a link to \u003cstrong\u003eclose your Splitwise
      account\u003c/strong\u003e. If this was you and you would like to
      \u003cstrong\u003eclose your Splitwise account\u003c/strong\u003e, please
      click on the following
      link:","confirm_destroy_user__check_your_email":"Check your email to
      finish deleting your
      account.","signup_anniversary_recent_activity_header":"Happy Splitwise
      anniversary!","signup_anniversary_recent_activity_content_one_year":"You've
      been a Splitwise user for a whole year. Thanks for using our app!
      ❤️","signup_anniversary_recent_activity_content_N_years":"You've been a
      Splitwise user for %@ years. Thanks for using our app!
      ❤️","signup_anniversary_body_one_year_generic":"You've been a Splitwise
      user for a whole year! Thanks for splitting expenses with us
      😊","signup_anniversary_body_one_year_more_than_N_expenses":"You've been a
      Splitwise user for a whole year – and added more than %@ expenses! That's
      a whole lot of splitting
      💸","signup_anniversary_body_N_years_generic":"You've been a Splitwise
      user for %@ years! Thanks for splitting expenses with us
      😊","signup_anniversary_body_N_years_more_than_N_expenses":"You've been a
      Splitwise user for %1$@ years – and added more than %2$@ expenses! That's
      a whole lot of splitting
      💸","signup_anniversary_preview_text_NAME_has_used_splitwise_for_one_year":"%@
      has been a Splitwise user for 1
      year!","signup_anniversary_preview_text_NAME_has_used_splitwise_for_N_years":"%1$@
      has been a Splitwise user for %2$@ years!","NAME_is_using_splitwise":"%@
      is using Splitwise","join_NAME_on_splitwise":"Join %@ on
      Splitwise","add_friend_code_not_found":"Sorry, this code is invalid and
      can't be used to add the intended person as a friend. Please ask them to
      re-send their code, or add them manually by entering their email address
      or phone
      number.","NAME_converted_this_expense_from_OLD_CURRENCY_to_NEW_CURRENCY":"%1$@
      converted this transaction from %2$@ to
      %3$@.","exception_statement_invalid_message":"A database error occurred.
      Please try again, or contact support if you experience repeated
      issues.","please_cancel_active_apple_subcomponent
      ion_before_deleting_account_see_URL_html":"It looks like you have an
      active subcomponent ion to Splitwise Pro through Apple. Please cancel this
      subcomponent ion before deleting your Splitwise account. You can cancel
      your Apple subcomponent ion directly through the App Store app, or via
      iTunes on your computer. For more details, visit \u003ca
      href='%1$@'\u003e%1$@\u003c/a\u003e.","pro_homepage_page_title":"Splitwise
      Pro","pro_homepage_title":"Splitwise
      Pro","pro_homepage_subtitle":"Splitwise’s most powerful features. No
      limits and no ads.","pro_feature_decomponent
      ion_default_split_settings":"Default split
      settings","pro_feature_details_default_split_settings":"Want to split all
      expenses with your partner 55%/45%? Travelling with multiple families and
      want to assign each family a certain number of shares? Create a group
      default split so you can set it and forget
      it.","pro_homepage_plus":"Plus...","pro_subscribe_for_lots_of_features_html":"Get
      \u003cstrong\u003eSplitwise Pro\u003c/strong\u003e for a ton of extra
      features:","year_singular_capitalized":"Year","year_plural_capitalized":"Years","expense_singular_capitalized":"Expense","expense_plural_capitalized":"Expenses","signup_anniversary_youve_been_using_splitwise_for":"You've
      been using Splitwise for:","signup_anniversary_one_year_wiser":"One year
      wiser","signup_anniversary_happy_1_year_splitversary":"Happy 1-year
      Splitversary!","signup_anniversary_happy_N_year_splitversary":"Happy
      %@-year
      Splitversary!","signup_anniversary_share_text_i_have_been_using_splitwise_for_one_year":"I've
      been using Splitwise for 1
      year!","signup_anniversary_share_text_i_have_been_using_splitwise_for_N_years":"I've
      been using Splitwise for %2$@ years!","pro_view_your_benefits":"View your
      benefits","pro_payment_update_payment_method_header":"Update payment
      method","pro_payment_update_payment_method_subheader_html":"You are
      updating your payment method for \u003cstrong\u003eSplitwise
      Pro\u003c/strong\u003e.","pro_email_ad_body_html":"Like Splitwise? Please
      consider upgrading to \u003cstrong\u003eSplitwise Pro\u003c/strong\u003e!
      Get an ad-free experience, receipt scanning, currency conversion, default
      splits, and more.","start_a_free_trial_button":"Start a free
      trial","reminder_your_balance_in_GROUP":"Reminder: Your balance in
      “%@”","reminder_your_balance_with_PERSON":"Reminder: Your balance with
      %@","reminder_from_PERSON":"Reminder from
      %@","confirm_login_button":"Confirm login","all_categories":"All
      categories","pro_payment_form_submitted_button":"Processing...","hand_delivered_invite_add_FRIEND_LINK":"Hi
      %1$@! Tap this link to add me as a friend on Splitwise:
      %2$@","error_person_is_already_group_member":"That person is already a
      member of this group! If they don't yet appear in the list of group
      members, try refreshing or syncing and then check
      again.","hand_delivered_invite_add_friends_LINK":"Hi friends! Tap this
      link to finish joining our Splitwise group:
      %@","try_splitwise_pro_free_for_one_week":"Try Splitwise Pro free for one
      week","try_splitwise_pro_free_for_one_month":"Try Splitwise Pro free for
      one month","hand_delivered_invite_join_GROUP_LINK":"Hello! Please tap this
      link to finish joining our group “%1$@” on Splitwise: %2$@","subcomponent
      ion_price_details_save_PERCENT_html":"Save %@%","pro_subcomponent
      ion_sidebar_web_one_month_trial":"Get all of Splitwise’s most powerful
      features, including receipt scanning, default splits, and no ads, free for
      your first month.","pro_subcomponent ion_sidebar_web_one_week_trial":"Get
      all of Splitwise’s most powerful features, including receipt scanning,
      default splits, and no ads, free for your first week.","pro_subcomponent
      ion_sidebar_scroll_down_or_sign_up":"Scroll down for a full list of
      features, or sign up now!","pro_subcomponent
      ion_form_payment_option":"Payment option","pro_subcomponent
      ion_form_header_generic_trial":"Enter your payment info to begin your free
      trial of Splitwise Pro","pro_subcomponent
      ion_form_header_one_month_trial":"Enter your payment info to begin your
      free 1-month trial of Splitwise Pro","pro_subcomponent
      ion_form_header_one_week_trial":"Enter your payment info to begin your
      free 1-week trial of Splitwise
      Pro","hand_delivery_feature_unavailable_for_recipient":"Sorry, this
      feature is unavailable for this
      recipient.","hand_delivery_feature_unavailable_for_recipients":"Sorry,
      this feature is unavailable for these
      recipients.","reminders_blank_message_error":"Sorry, you can't send a
      blank message. Please write a note to your friend and try
      again.","pro_upsell_want_to_hide_ads_like_this":"Want to hide ads like
      this?","splitwise_card_used_AMOUNT_at_LOCATION":"Splitwise Card used: %1$@
      at %2$@","split_equally_with_GROUP":"Split equally with
      “%@”","split_equally_with_NAMES":"Split equally with
      %@","sms_automatic_invite_reminder_FROM":"Your friend %1$@ invited you to
      split expenses on Splitwise. Tap to accept:
      https://www.splitwise.com/i/%2$@","sms_automatic_invite_reminder_from_FRIEND_for_GROUP":"Your
      friend %1$@ invited you to the Splitwise group '%2$@'. Tap to accept:
      https://www.splitwise.com/i/%3$@","sms_challenge_CODE":"Splitwise: %1$@ is
      your sign-in code. Only input this code into Splitwise's app or website
      while signing in. NEVER share over phone, text, or social
      media.","created_card_with_RELATIONSHIP":"You
      \u003cstrong\u003ecreated\u003c/strong\u003e a Splitwise Card that splits
      with
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","froze_card_with_RELATIONSHIP":"You
      \u003cstrong\u003efroze\u003c/strong\u003e the Splitwise Card that splits
      with
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","unfroze_card_with_RELATIONSHIP":"You
      \u003cstrong\u003eun-froze\u003c/strong\u003e the Splitwise Card that
      splits with
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","added_BANK_to_splitwise":"You
      added your \u003cstrong\u003e%1$@\u003c/strong\u003e bank account to
      Splitwise.","closed_card_with_RELATIONSHIP":"You
      \u003cstrong\u003eclosed\u003c/strong\u003e the Splitwise Card that split
      with
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","split_by_percentages_with_GROUP":"Split
      by percentages with “%@”","split_by_shares_with_GROUP":"Split by shares
      with “%@”","split_with_GROUP":"Split with
      “%@”","challenge_email_header_2fa":"Someone is attempting to login to your
      Splitwise account from the below device or
      location.","challenge_email_2fa_ps_LINK_html":"P.S. You're getting this
      email because you've enabled the security setting “Enable two-factor
      authentication via email”. If you'd like to disable this for future login
      attempts, you may do so from \u003ca href='%@'\u003eAccount
      Settings\u003c/a\u003e.","2fa_challenge_please_confirm_header":"Check your
      email to finish logging
      in","2fa_challenge_please_confirm_message_EMAIL_html":"We've sent a login
      confirmation email to
      \u003cstrong\u003e%@\u003c/strong\u003e.","error_cards_reconnect_funding_source":"We're
      having trouble connecting to your bank account. To continue using your
      Splitwise Card, please reconnect your bank account from the Card settings
      page.","confirm_login_page_title":"Confirm your login
      attempt","challenge_preconfirmation_message_NAME_with_EMAIL_html":"Hey
      \u003cstrong\u003e%1$@\u003c/strong\u003e! Please click the button below
      to confirm your recent login attempt as
      \u003cstrong\u003e%2$@\u003c/strong\u003e:","spending_trends_for_GROUP_CATEGORY":"Spending
      trends for %@","spending_trends_with_FRIEND_CATEGORY":"Spending trends
      with %@","error_last_remaining_member_of_GROUP_cannot_leave":"You cannot
      leave “%@” because you are its only remaining member. If you wish to get
      rid of this group, please delete it
      instead.","group_type_couple":"Couple","error_cannot_remove_phone_identity_with_active_mfa":"You
      cannot change or remove your phone number because it is currently used to
      receive login confirmation codes for your account. Please disable
      SMS-based MFA from your account settings, then try
      again.","error_cannot_merge_while_mfa_enabled":"You cannot merge accounts
      while MFA is enabled. Please disable MFA on the account that you wish to
      merge, and then re-enable after merging if
      desired.","manage_mfa_button":"Manage
      MFA","this_feature_will_be_removed_on_DATE":"This feature will be removed
      on %@.","error_mobile_mfa_not_supported_please_update_app":"Your account
      has multi-factor authentication (MFA) enabled, but MFA is not supported by
      this version of the Splitwise app. Please update to the latest version,
      then try again.","sign_in_with_google":"Sign in with
      Google","enter_otp_instructions_for_email":"To finish logging you in, we
      need to send a one-time code to your email.","i_cant_access_this_email":"I
      can't access this email account","enter_otp_instructions_for_phone":"To
      finish logging you in, we need to send a one-time code to your phone
      number.","i_cant_access_this_phone":"I can't access this phone
      number","enter_otp_instructions_for_totp":"To finish logging you in, you
      must enter a code from your authenticator
      app.","i_cant_access_this_totp_device":"I can't access this
      device","request_a_code":"Request
      code","code_sent_to_HINT_may_take_up_to_2_minutes_to_arrive":"Code sent to
      %@ may take up to 2 minutes to
      arrive.","code_sent_please_enter_on_receipt":"Sent! Please enter the code
      when you receive it.","logged_in_successfully":"Logged in
      successfully.","need_code_assistance":"If you cannot retrieve this code,
      please contact Splitwise Support for
      assistance","include_code_in_message":"To expedite things, please include
      this code in your message:","contact_support":"Contact
      support","email_otp_header":"It looks like you’re currently logging in to
      Splitwise. To enhance your account security, please confirm the
      information below and enter the temporary sign-in code on your
      device.","email_otp_footer":"Never share a sign-in code over phone, email,
      text, or social media. If you did not recently attempt to log in to
      Splitwise, you should reset your password and reply to this email to get
      in touch with Splitwise support.","email_otp_subject":"Confirm your
      Splitwise login","new_request_from_DEVICE":"This request came from the
      following device: %1$@","estimated_LOCATION":"Estimated location:
      %1$@","send_again":"Send
      again","incorrect_email_or_password_short":"Incorrect email or
      password","error_login_failed_title":"Login
      failed","error_login_failed_at_this_time_detail":"Sorry, we are unable to
      log you in at this time.","error_more_information_is_required_title":"More
      information is
      required","error_more_information_is_required_detail":"Please include all
      required information.","error_auth_sequence_ended_detail":"Please retry
      your login attempt from the beginning.","error_otp_not_valid_title":"Code
      not valid","error_otp_not_valid_retry_detail":"Please check the code and
      try again, or hit “send again” to send a new
      code.","email_device_VALUE":"Device: %@","email_time_VALUE":"Time:
      %@","email_ip_VALUE":"IP: %@","email_otp_please_confirm":"Please confirm
      the information above and enter this temporary sign-in code on your
      device:","error_wait_to_resend_code":"Send limit exceeded. Please wait 1
      minute and try again.","error_wait_to_resend_code_title":"Send limit
      exceeded","error_wait_to_resend_code_detail":"Please wait 1 minute and try
      again.","error_attempts_exceeded_title":"Attempts
      exceeded","error_account_locked_temporarily_detail":"To safeguard your
      information, your account has been locked
      temporarily.","error_failed_to_correctly_save_all_people":"Splitwise
      failed to correctly save all the people on this bill -- very sorry for the
      trouble! Please make sure you're not re-using the same email address for
      multiple people, or contact us at support@splitwise.com for further
      help.","error_cannot_sync_involves_people_not_in_friends_list":"Splitwise
      cannot sync this expense, as it involves people who are not in your
      friends list. This may happen if a friend has recently merged an old
      account into a new account.\n\nIf you think you've received this message
      in error, please try logging out and logging back in to fully refresh your
      friends list, then update your expense again. For further help, contact
      support@splitwise.com.","error_cannot_edit_expense_involving_group_member_who_has_left":"This
      expense involves a person who has left the group, and thus it can no
      longer be edited. If you wish to change this expense, you must first add
      that person back to your
      group.","error_user_is_not_a_member_of_group":"That user is not a member
      of this group, or has already been removed. Refresh your data, then try
      again.","error_too_many_requests_title":"Too many
      requests","error_contact_support_for_help_logging_in_detail":"Please
      contact support@splitwise.com for help logging into your
      account.","email_explanation_for_invite_header":"Splitwise makes it easy
      to split expenses with your
      friends.","email_explanation_for_invite_paragraph_1":"Use Splitwise any
      time you split a bill – we’ll keep track of how much each person owes in
      total, and make sure that everyone gets paid
      back.","NAME_just_invited_you_to_join_GROUP_html":"%1$@ has invited you to
      join the group \u003cstrong\u003e%2$@\u003c/strong\u003e on
      Splitwise.","settle_all_balances_group_explanation_between_CREATOR_and_USER_on_DATE":"%1$@
      and %2$@ have shared expenses outside this group. On %3$@ %1$@ recorded 1
      payment with %2$@ that settled their TOTAL Splitwise balance. Splitwise
      automatically broke this 1 payment down into a set of \"Settle all
      balances\" transactions, to ensure %1$@ and %2$@ appear as settled up
      across
      Splitwise.","settle_all_balances_nongroup_explanation_between_CREATOR_and_USER_on_DATE":"%1$@
      and %2$@ have shared expenses in groups, too. On %3$@ %1$@ recorded 1
      payment with %2$@ that settled their TOTAL Splitwise balance. Splitwise
      automatically broke this 1 payment down into a set of \"Settle all
      balances\" transactions, to ensure %1$@ and %2$@ appear as settled up
      across
      Splitwise.","NAME_is_still_waiting_for_you_to_join_2021_06_html":"%@ is
      still waiting for you to join
      Splitwise.","GROUP_invite_by_NAME_subject_line_2021_06":"%2$@ wants to
      share bills with you in “%1$@” on
      Splitwise!","contact_support_faq_title":"Frequently asked
      questions","contact_support_faq_subtitle":"Find answers to common
      questions about Splitwise.","contact_support_email_subtitle":"We aim to
      reply to most support requests within 1 business
      day.","status_details_paypal_preparing_for_sender_sent_to_EMAIL_with_NAME":"According
      to PayPal, this payment was sent to %1$@. However, that ID is not yet
      registered for PayPal. %2$@ should check their email for a message from
      PayPal with instructions on how to claim this
      payment.","status_details_paypal_preparing_for_recipient_sent_to_EMAIL":"According
      to PayPal, this payment was sent to %1$@. However, that ID is not yet
      registered for PayPal.\nPlease check your email for a message from PayPal
      with instructions on how to claim your payment. If you don’t see an email
      from PayPal, you can also claim this payment by registering for PayPal
      using %1$@, or by adding %1$@ to your existing PayPal account as a
      secondary ID. If you do not claim this payment within the next few weeks,
      these funds may be returned to
      sender.","status_details_paypal_canceled_for_sender":"According to PayPal,
      this payment was canceled and funds were returned to
      you.","status_details_paypal_canceled_for_recipient":"According to PayPal,
      this payment was canceled and funds were returned to the
      sender.","status_details_paypal_failed_for_sender":"According to PayPal,
      this payment failed to process. Check your PayPal account for more
      details.","status_details_paypal_failed_for_recipient":"According to
      PayPal, this payment failed to process. Check PayPal for more
      details.","status_details_paypal_completed_sent_to_EMAIL":"PayPal
      confirmed that this payment was sent to
      %1$@.","status_details_venmo_preparing_for_sender_sent_to_EMAIL_with_NAME":"Venmo
      confirmed that this payment was sent to %1$@ – a new Venmo user or an
      existing user with an email address that hasn't been verified by Venmo.
      %2$@ should check their email for a message from Venmo with instructions
      on how to claim this
      payment.","status_details_venmo_preparing_for_recipient_sent_to_EMAIL":"Venmo
      confirmed that this payment was sent to %1$@ – a new Venmo user or an
      existing user with an email address that hasn't been verified by Venmo.
      Check your email for a message from Venmo with instructions on how to
      claim this
      payment.","status_details_venmo_canceled_for_sender_by_USERNAME":"Venmo
      confirmed that this payment was canceled by @%1$@. Please check your Venmo
      account for more
      details.","status_details_venmo_canceled_for_recipient_by_USERNAME":"Venmo
      confirmed that this payment was canceled by @%1$@. Check Venmo for more
      details.","status_details_venmo_completed_sent_to_USERNAME":"Venmo
      confirmed that this payment was delivered to @%1$@ on Venmo. Please check
      your Venmo account for more
      details.","paytm_payment_failed_support_EMAIL_and_PHONE":"For help with
      Paytm, please email %1$@ or call
      %2$@.","status_details_venmo_expired_on_DATE_for_sender_USERNAME":"According
      to Venmo, this payment expired on %1$@ and these funds were returned to
      @%2$@. Please check your Venmo account for more
      details.","status_details_venmo_expired_on_DATE_for_recipient_USERNAME":"According
      to Venmo, this payment expired on %1$@ and these funds were returned to
      @%2$@. Check Venmo for more
      details.","status_details_splitwise_pay_in_progress_DATE":"This payment
      started on %1$@ and is in progress. It should be complete in 3 to 5
      business
      days.","status_details_splitwise_pay_preparing_NAME_activate_before_DATE":"Splitwise
      is waiting on %1$@ to activate Splitwise Pay and accept these funds. They
      have until %2$@ to accept this
      payment.","status_details_splitwise_pay_preparing_activate_before_DATE":"Activate
      Splitwise Pay before %1$@ to accept these
      funds.","status_details_splitwise_pay_preparing_accept_terms_before_DATE":"Accept
      Splitwise Pay's new terms before %1$@ to receive these
      funds.","status_details_splitwise_pay_canceled_by_NAME_on_DATE":"This
      payment was canceled by %1$@ on %2$@. No funds were
      transferred.","status_details_splitwise_pay_expired_on_DATE":"This payment
      expired on %1$@. No funds were
      transferred.","status_details_splitwise_pay_failed_on_DATE":"This payment
      failed to transfer on %1$@. Please contact Splitwise support for
      details.","status_details_wallet_to_wallet_failed_on_DATE_to_sender":"This
      payment failed to transfer on %1$@. Your funds were returned to your
      Splitwise Pay Wallet. Please contact Splitwise support for
      details.","status_details_splitwise_pay_completed_on_DATE":"This payment
      was completed on %1$@.","USER_deactivated":"%1$@
      [Deactivated]","need_updated_mobile_app_to_see_p2p_payment":"In order to
      claim these funds or see the latest status of this payment, please view
      this on an up-to-date version of the Splitwise mobile
      app.","error_cannot_edit_splitwise_p2p_payment_preparing":"Sorry, you
      cannot edit the amount of a Splitwise Pay transaction. If you need to
      change the amount, please cancel this transaction and create a new
      one.","error_cannot_edit_splitwise_p2p_payment":"Sorry, you cannot edit
      the amount of a Splitwise Pay
      transaction.","transaction_to_PERSON_with_AMOUNT_has_expired":"Payment
      Expired: You paid %1$@
      %2$@","transaction_to_PERSON_has_expired_html":"Your payment to
      \u003cstrong\u003e%1$@\u003c/strong\u003e has
      expired.","transaction_from_PERSON_has_expired_html":"Your payment from
      \u003cstrong\u003e%1$@\u003c/strong\u003e has
      expired.","canceled_payment_to_PERSON_html":"You canceled a payment from
      you to
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","PERSON_canceled_payment_from_PERSON_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      canceled a payment from \u003cstrong\u003e%2$@\u003c/strong\u003e to
      you.","PERSON_canceled_AMOUNT_payment":"%1$@ canceled their %2$@ payment
      to you","transaction_to_PERSON_has_failed_html":"Your payment to
      \u003cstrong\u003e%1$@\u003c/strong\u003e has
      failed.","transaction_of_AMOUNT_to_PERSON_has_failed":"Your %1$@ payment
      to %2$@ has failed","transaction_of_AMOUNT_from_PERSON_reminder":"Accept
      your %1$@ payment from
      %2$@","transaction_disconnected_funding_source":"Your funding source is
      disconnected","transaction_from_PERSON_is_ready_html":"Enable Splitwise
      Pay to accept your payment from
      \u003cstrong\u003e%1$@\u003c/strong\u003e.","transaction_of_AMOUNT_from_PERSON_has_expired":"Your
      %1$@ payment from %2$@ has
      expired","transaction_of_AMOUNT_to_PERSON_has_expired":"Your %1$@ payment
      to %2$@ has expired","transaction_of_AMOUNT_from_PERSON_has_failed":"Your
      %1$@ payment from %2$@ has
      failed","transaction_from_PERSON_has_failed_html":"Your payment from
      \u003cstrong\u003e%1$@\u003c/strong\u003e has
      failed.","transaction_to_PERSON_via_SERVICE_in_progress_html":"You paid
      \u003cstrong\u003e%1$@\u003c/strong\u003e via
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","transaction_from_PERSON_via_SERVICE_in_progress_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      paid you via
      \u003cstrong\u003e%2$@\u003c/strong\u003e.","transaction_from_PERSON_of_AMOUNT_via_SERVICE_in_progress":"%1$@
      paid you %2$@ via
      %3$@","transaction_from_PERSON_of_AMOUNT_kyc_pending":"%1$@ started a %2$@
      payment to
      you","transaction_from_PERSON_of_AMOUNT_kyc_pending_activity_html":"\u003cstrong\u003e%1$@\u003c/strong\u003e
      started a \u003cstrong\u003e%2$@\u003c/strong\u003e payment to you via
      Splitwise Pay.","funding_source_removed":"You removed a funding source
      from Splitwise.","funding_source_added":"You added a funding source to
      Splitwise.","approved_for_splitwise_pay":"You have been approved for
      Splitwise
      Pay!","splitwise_pay_transaction_of_AMOUNT_from_PERSON_reminder":"Splitwise
      Pay: Accept your %1$@ payment from
      %2$@","status_details_venmo_canceled_for_sender":"Venmo confirmed that
      this payment was canceled. Please check your Venmo account for more
      details.","status_details_venmo_canceled_for_recipient":"Venmo confirmed
      that this payment was canceled. Check Venmo for more
      details.","update_app_to_verify_funding_source_and_receive_funds":"Please
      update your app to the latest version to verify your funding source and
      accept these
      funds.","confirm_your_deposits_to_connect_your_bank_account":"Confirm your
      two deposits to connect your bank
      account","verify_funding_source_confirm_two_deposits":"Verify funding
      source: please check your bank account and confirm the two
      deposits.","payment_canceled":"Payment canceled","payment_failed":"Payment
      failed","welcome_to_splitwise_pay":"Welcome to Splitwise
      Pay!","payment_expired_your_AMOUNT_payment_to_PERSON_has_expired":"Payment
      expired: Your %1$@ payment to %2$@ has
      expired","payment_expired_your_AMOUNT_payment_from_PERSON_has_expired":"Payment
      expired: Your %1$@ payment from %2$@ has
      expired","your_AMOUNT_payment_to_PERSON_has_been_canceled":"Your %1$@
      payment to %2$@ has been
      canceled","your_AMOUNT_payment_from_PERSON_has_been_canceled":"Your %1$@
      payment from %2$@ has been
      canceled","expiring_soon_your_AMOUNT_payment_to_PERSON_is_still_pending":"Expiring
      soon: Your %1$@ payment to %2$@ is still
      pending","payment_failed_your_AMOUNT_payment_to_PERSON_has_failed":"Payment
      failed: Your %1$@ payment to %2$@ has
      failed","payment_failed_your_AMOUNT_payment_from_PERSON_has_failed":"Payment
      failed: Your %1$@ payment from %2$@ has
      failed","you_sent_AMOUNT_to_PERSON_via_splitwise_pay":"You sent %1$@ to
      %2$@ via Splitwise Pay","splitwise_pay_PERSON_sent_you_AMOUNT":"Splitwise
      Pay: %1$@ sent you
      %2$@","your_funding_source_has_a_connection_issue":"Your funding source
      has a connection issue!","you_connected_a_bank_account_to_splitwise":"You
      connected a bank account to
      Splitwise","splitwise_pay_is_now_activated_connect_a_bank_account_to_get_started":"Splitwise
      Pay is now activated! Connect a bank account to get
      started","status_details_splitwise_pay_preparing_needs_review_updates_to_EMAIL_before_DATE":"Your
      Splitwise Pay information is being reviewed. You will be contacted at %1$@
      with any updates.\nThis payment will expire
      %2$@.","your_funding_source_connection_has_failed":"Your funding source
      connection has failed","bank_account_connection_error":"Bank account
      connection error","connection_failed":"Connection
      failed","your_funding_source_connection_has_failed_please_fix":"Your
      funding source connection has failed. Please re-add the account or connect
      a new one.","reminder_verify_your_bank_account":"Reminder: verify your
      bank account","venmo_web_deprecated_title":"Venmo now
      mobile-only","venmo_web_deprecated_body":"Venmo payments on Splitwise are
      now only available from the Splitwise mobile apps. Unfortunately, this is
      because Venmo disabled their web integration. Please use the Splitwise
      mobile app or another payment
      method.","splitwise_card_approved_tap_to_set_up":"You’ve been approved for
      the Splitwise Card! Tap to set up your
      card.","splitwise_card_need_more_info_verify_your_identity":"Action
      required: We need more info to verify your identity for your Splitwise
      Card. Tap for
      details.","PERSON_invited_you_to_splitwise_pay_early_access":"%1$@ invited
      you to Splitwise Pay ✨early
      access✨","account_deleted_web_now_delete_mobile_app_instructions":"If you
      have the Splitwise app on your mobile device, it may still include any
      data that was previously synced to your device. You may delete the
      Splitwise app to finish removing all Splitwise data from your
      device.","account_deleted_mobile_now_delete_mobile_app_instructions":"You
      may delete the Splitwise app to finish removing all Splitwise data from
      your device.","you_invited_RECIPIENT_to_splitwise_pay_html":"You invited
      %1$@ to Splitwise Pay ✨early
      access✨","deselect_someone_to_select_another":"Please de-select someone
      to select another group member.","you_may_invite_up_to_NUMBER_people":"You
      may invite up to %1$@ people","phone_out_of_sync_try_again":"It looks like
      your phone is out of sync with our server. Please return to your Group
      page, pull to refresh, and then try
      again.","delete_your_account_confirmation_explanation":"You will no longer
      be able to log into your account or access your account history from your
      Splitwise app or from the Splitwise
      website.","splitwise_p2p_promotion_error_maintenance_mode":"Splitwise Pay
      is currently unavailable – please try again in a little while. Sorry for
      the inconvenience!","splitwise_p2p_promotion_error_expected_default":"Your
      transfer could not be processed. Please check the details and try
      again.","splitwise_p2p_promotion_error_unexpected_default":"An unknown
      error occurred when trying to execute your Splitwise Pay
      transfer.","introducing_splitwise_pay":"Introducing Splitwise Pay! Send
      money to friends on Splitwise with your bank
      account.","AMOUNT_in_payments_via_sw_pay_connect_before_expire":"You have
      %1$@ in payments to accept via Splitwise Pay!\n\nSplitwise Pay allows you
      to send money to friends on Splitwise. Enable it to receive these funds
      before they expire.","enable_and_accept_payments":"Enable and accept
      payments","PERSON_has_sent_you_AMOUNT_connect_by_DATE":"%1$@ has sent you
      %2$@ via Splitwise Pay!\n\nSplitwise Pay allows you to send money to
      friends on Splitwise. Enable it by %3$@ to receive these funds before they
      expire.","enable_splitwise_pay":"Enable Splitwise
      Pay","PERSON_has_invited_you_to_splitwise_pay":"%1$@ has invited you to
      Splitwise Pay! Send money to friends on Splitwise with your bank
      account.","error_payment_you_do_not_belong_to_group":"You cannot make a
      payment in a group that you are not a member
      of.","please_update_app_to_continue_using_this_feature":"Please update the
      Splitwise app to continue using this
      feature.","create_prepayment_unacquainted_error":"You must be acquainted
      with this user to send payments","splitwise_p2p_transfer_cost_no_fee":"No
      fee","splitwise_p2p_transfer_time_instant":"instant","transaction_not_found_contact_splitwise_support":"Transaction
      not found. Refresh your app and try again, or contact Splitwise Support
      for assistance","deposit_to_wallet_title":"You added to your
      balance","deposit_transfer_INITIATED_AT_with_EST_TIMELINE":"This transfer
      was initiated on %1$@ and should be added to your Splitwise Pay Wallet in
      %2$@.","deposit_transfer_CANCELED_AT":"This transfer was canceled on %1$@.
      No funds were transferred.","deposit_transfer_FAILED_AT":"This transfer
      failed on %1$@. No funds were
      moved.","deposit_transfer_COMPLETED_AT":"This transfer was completed on
      %1$@ and was added to your Splitwise Pay
      Wallet.","funded_by_details_label":"Funded
      by:","transfer_id_details_label":"Transfer
      ID:","ach_timeline_2_to_3_business_days":"2-3 business
      days","funds_flow_deposit_created":"You made a deposit to your Splitwise
      Pay Wallet.","funds_flow_deposit_failed_html":"Your deposit to your
      Splitwise Pay Wallet
      \u003cstrong\u003efailed\u003c/strong\u003e.","funds_flow_deposit_failed":"Your
      deposit to your Splitwise Pay Wallet
      failed","splitwise_p2p_transfer_time_2_to_3_biz_days":"2-3 business
      days","splitwise_p2p_transfer_time_3_to_5_biz_days":"3-5 business
      days","withdrawal_from_wallet_title":"You withdrew from your
      balance","funds_flow_withdrawal_created":"You made a withdrawal from your
      Splitwise Pay Wallet.","funds_flow_withdrawal_failed":"Your withdrawal
      from your Splitwise Pay Wallet
      failed","deposits_to_details_label":"Deposits
      to:","withdrawal_transfer_INITIATED_AT_with_EST_TIMELINE":"This transfer
      was initiated on %1$@ and should be transferred to your account in
      %2$@.","withdrawal_transfer_CANCELED_AT":"You canceled this withdrawal on
      %1$@. No funds were transferred.","withdrawal_transfer_FAILED_AT":"This
      withdrawal failed to transfer on %1$@. Please contact Splitwise support
      for details.","withdrawal_transfer_COMPLETED_AT":"This transfer was
      completed on %1$@.","funds_flow_withdrawal_failed_html":"Your withdrawal
      from your Splitwise Pay Wallet
      \u003cstrong\u003efailed\u003c/strong\u003e.","contact_support_if_phone_is_unknown":"If
      this number does not belong to you, please reply right away to contact
      Splitwise support.","splitwise_pay_wallet":"Splitwise Pay
      Wallet","funds_flow_status_in_progress":"In
      progress","funds_flow_status_preparing":"Pending","funds_flow_status_failed":"Failed","funds_flow_status_completed":"Completed","funds_flow_status_unknown":"Unknown","funds_flow_status_canceled":"Canceled","download_latest_app_for_splitwise_pay":"Please
      download the latest app to continue using Splitwise
      Pay.","update_splitwise":"Update Splitwise","review_changes":"Review
      changes","review_and_accept_tos":"Please review and accept new Terms of
      Service to continue using Splitwise Pay.","pending_acceptance":"Pending
      acceptance","payment_id_details_label":"Payment
      ID:","please_update_app_to_continue_using_swpay":"Please update your app
      to continue using Splitwise Pay.","enable_and_accept_payment":"Enable and
      accept
      payment","funds_flow_status_expired":"Expired","bank_account_NAME_and_LAST_FOUR":"%1$@
      ●●%2$@","NAME_paid_you":"%1$@ paid you","unknown_transaction_title":"New
      transaction","available_balance_title":"Available
      balance","pending_payments_title":"Money to
      accept","before_onboarding_explainer_content_title":"What's
      this?","before_onboarding_explainer_content_body":"Your friends have
      settled up with you via Splitwise Pay. Enroll in Splitwise Pay to claim
      these payments.\n\nThis amount may change if a payment is canceled or
      expires before you complete
      enrollment.","PENDING_PAYMENT_AMOUNT_for_caption":"+ %1$@
      pending","basic_explainer_content_title":"What is \"available
      balance\"?","basic_explainer_content_body":"Your available balance is
      money you have in Splitwise Pay, ready to use or withdraw.\nPending
      deposits and payments you receive will be added to your available balance
      after they have
      completed.","unknown_bank_account_name":"Unknown","returned_funds_to_bank":"Returned
      funds to bank","returned_funds_to_wallet":"Returned funds to
      Wallet","deposit_return_transfer_initiated_on_DATE_with_EST_TIMELINE":"This
      transfer was initiated per request of your bank on %1$@. It should be
      complete within
      %2$@.","return_transfer_initiated_on_DATE_failed_on_DATE":"This transfer
      was initiated per request of your bank on %1$@. It failed on
      %2$@.","deposit_return_transfer_completed":"Your bank requested that we
      return funds from a prior payment or deposit. Please contact Splitwise
      Support for further
      assistance.","withdrawal_return_transfer_success":"Your bank has returned
      funds from a prior withdrawal. Please contact Splitwise Support for
      further assistance.","before_accepting_tos_explainer_content_body":"You
      can now store funds for instant payments in your Splitwise Pay Wallet!
      Your friends have sent payments to your Wallet. Accept the new Terms of
      Service to claim these payments.\n\nThis amount may change if a payment is
      canceled or expires before accept the new
      terms.","promotion_id_details_label":"Promotion
      ID:","bank_to_wallet_CANCELED_AT_ach_in_progress_EST_TIMELINE_with_REFUND_EST_TIMELINE":"This
      payment was canceled on %1$@, when the transfer from your bank was in
      progress. This bank transfer should complete in %2$@. Once complete, the
      funds will be refunded to your bank account in
      %3$@.","bank_to_wallet_CANCELED_AT_with_ACH_COMPLETED_AT_with_REFUND_EST_TIMELINE":"This
      payment was canceled on %1$@, and your initial transfer completed on %2$@.
      Your funds are being returned to your bank account, and should arrive in
      %3$@.","bank_to_wallet_CANCELED_AT_funds_returned":"This payment was
      canceled on %1$@. Your funds were returned to your
      bank.","bank_to_wallet_CANCELED_AT_no_funds_transferred":"This payment was
      canceled on %1$@. No funds were
      transferred.","bank_to_wallet_COMPLETED_AT_to_RECIPIENT_with_FAILED_AT_with_EST_TIMELINE":"Your
      transfer from your bank completed on %1$@ but your payment failed to
      transfer to %2$@ on %3$@. Your funds are being returned to your bank and
      should arrive by %4$@. Please contact Splitwise support for
      details.","bank_to_wallet_COMPLETED_AT_to_RECIPIENT_with_FAILED_AT_with_REFUNDED_AT":"Your
      transfer from your bank completed on %1$@ but your payment failed to
      transfer to %2$@ on %3$@. Your funds were returned to your bank on %4$@.
      Please contact Splitwise support for
      details.","bank_to_wallet_FAILED_AT_no_funds_transfered":"This payment
      failed to transfer on %1$@ and no money was moved. Please contact
      Splitwise support for
      details.","bank_to_wallet_ach_returned_FAILED_AT":"This payment failed to
      process on %1$@. Please contact Splitwise support for
      details.","bank_to_wallet_failed_refund_ach_return_COMPLETED_AT_with_REFUNDED_AT":"Your
      transfer from your bank completed on %1$@. We were not able to return your
      funds to your bank so these funds were added to your Splitwise Pay Wallet
      on %2$@. Please contact Splitwise support for
      details.","bank_to_wallet_EXPIRED_AT_with_EST_TIMELINE":"This payment
      expired on %1$@. The funds are being returned to your bank account and
      should arrive in %2$@.","bank_to_wallet_EXPIRED_AT_funds_returned":"This
      payment expired on %1$@. The funds were returned to your bank
      account.","bank_to_wallet_EXPIRED_AT_no_funds_transferred":"This payment
      expired on %1$@. No funds were
      transferred.","bank_to_wallet_status_details_happy_path_fallback":"This
      payment is pending, and should update
      soon.","bank_to_wallet_status_details_canceled_fallback_CANCELED_AT":"This
      payment was canceled on
      %1$@.","bank_to_wallet_status_details_expired_fallback_EXPIRED_AT":"This
      payment expired on
      %1$@.","bank_to_wallet_status_details_failed_fallback_FAILED_AT":"This
      payment failed to transfer on %1$@. Please contact Splitwise support for
      details.","accept_terms_to_complete_payment_of_AMOUNT_from_PERSON":"Accept
      terms to complete your %1$@ payment from
      %2$@.","please_accept_terms_to_complete_payment_of_AMOUNT_from_PERSON":"Please
      accept the new terms to complete your %1$@ payment from
      %2$@.","action_required_accept_AMOUNT_from_PERSON":"Action required:
      Accept your %1$@ payment from %2$@","payment_pending":"Payment
      pending","expiring_soon_accept_AMOUNT_from_PERSON":"Expiring soon: Accept
      your %1$@ payment from
      %2$@","knowledge_base_category_getting_started":"Using Splitwise to share
      expenses and get paid back.","knowledge_base_category_groups":"How to
      create, delete, restore, join, and add people to
      groups.","knowledge_base_category_expenses":"Adding, updating, recurring,
      and splitting
      expenses.","knowledge_base_category_account_issues":"Passwords, log-ins
      and permissions
      questions.","knowledge_base_category_payments":"Information about
      3rd-party and in-app
      payments.","knowledge_base_category_balances":"Tracking how much people
      owe, and learning about simplify
      debts.","paytm_cannot_send_to_your_own_phone":"It looks like you’ve
      entered your own phone number instead of %@’s. Please tap your number to
      remove it and add the number where this payment should be
      sent.","paytm_must_include_recipient_phone":"You must enter the Paytm
      phone number for the
      recipient.","cancel_swpay_payment_confirmation_title":"Bank transfer in
      progress. Cancel anyway?","cancel_swpay_payment_confirmation_detail":"The
      bank transfer for this payment has already been initiated, so it may take
      up to %@ business days for these funds to be returned to your bank. Please
      confirm if you would still like to cancel this payment.","view_now":"View
      now","get_the_app":"Get the
      app","quicker_expenses_and_payments_youll_love_splitwise_app":"And for
      quicker on-the-go expense adding and seamless in-app payments, we know
      you’ll love the Splitwise
      app.","available_for_ios_and_android_parenthesized":"(available for iOS
      and Android)","authlogic":{"error_messages":{"email_invalid":"is not a
      valid email address"}}}, {}) });
    </component>

    <component v-bind:is="'script'">
      function showSecondaryFields(){ $('.secondary_fields').slideDown(); }
      function showEmailForm(){
      $('#signup_options').fadeOut(250).next().delay(250).fadeIn(250);
      setTimeout("$('#user_name').focus()", 300); return false; }
    </component>
    <component v-bind:is="'script'">$('#user_name').focus()</component>

    <component v-bind:is="'script'">
      var
      _gaq=[['_setAccount','UA-22826239-1'],['_trackPageview'],['_trackPageLoadTime']];
      _gaq.push(['_setCustomVar', 1, 'Signup Week', 'unregistered', 1]);
      _gaq.push(['_setCustomVar', 2, 'Signup Type', 'unregistered', 1]);
      _gaq.push(['_setCustomVar', 4, 'Ad source', '', 1]); (function(d,t){var
      g=d.createElement(t),s=d.getElementsByTagName(t)[0];
      g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
      s.parentNode.insertBefore(g,s)}(document,'component '));
    </component>
  </body>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      email: "",
      password: "",
      password_confirmation: "",
      tc: "true",
      error: "",
    };
  },
  methods: {
    validateEmail() {
      const emailRegex = /[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,}$/;
      if (!emailRegex.test(this.email)) {
        this.error = "Invalid email address";
      } else {
        this.error = "";
      }
    },
    validatePassword() {
      if (this.password.length < 8) {
        this.error = "Password must be at least 8 characters long";
      } else {
        this.error = "";
      }
    },
    Signup() {
        if(this.error===""){

            this.$store
              .dispatch("Signup", {
                username: this.username,
                email: this.email,
                password: this.password,
                password_confirmation: this.password,
                tc: this.tc,
              })
              .then((response) => {
                  if(response.status==="Failed"){
                      this.error = response.message
                  }else{
                      this.$router.push({name:'Dashboard'})
                  }
              })
             
        }
    },
  },
};
</script>

<style scoped>
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
nav,
section {
  display: block;
}

audio,
canvas,
video {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

audio:not([controls]) {
  display: none;
}

html {
  font-size: 100%;
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
}

a:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

a:hover,
a:active {
  outline: 0;
}

sub,
sup {
  position: relative;
  font-size: 75%;
  line-height: 0;
  vertical-align: baseline;
}

sup {
  top: -0.5em;
}

sub {
  bottom: -0.25em;
}

img {
  max-width: 100%;
  vertical-align: middle;
  border: 0;
  -ms-interpolation-mode: bicubic;
}

#map_canvas img {
  max-width: none;
}

button,
input,
select,
textarea {
  margin: 0;
  font-size: 100%;
  vertical-align: middle;
}

button,
input {
  *overflow: visible;
  line-height: normal;
}

button::-moz-focus-inner,
input::-moz-focus-inner {
  padding: 0;
  border: 0;
}

button,
input[type="button"],
input[type="reset"],
input[type="submit"] {
  cursor: pointer;
  -webkit-appearance: button;
}

input[type="search"] {
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
  -webkit-appearance: textfield;
}

input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button {
  -webkit-appearance: none;
}

textarea {
  overflow: auto;
  vertical-align: top;
}

.clearfix {
  *zoom: 1;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.hide-text {
  font: 0/0 a;
  color: transparent;
  text-shadow: none;
  background-color: transparent;
  border: 0;
}

.input-block-level {
  display: block;
  width: 100%;
  min-height: 28px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  line-height: 18px;
  color: #333333;
  background-color: #ffffff;
}

a {
  color: #0088cc;
  text-decoration: none;
}

a:hover {
  color: #005580;
  text-decoration: underline;
}

.row {
  margin-left: -20px;
  *zoom: 1;
}

.row:before,
.row:after {
  display: table;
  content: "";
}

.row:after {
  clear: both;
}

[class*="span"] {
  float: left;
  margin-left: 20px;
}

.container,
.navbar-fixed-top .container,
.navbar-fixed-bottom .container {
  width: 940px;
}

.span12 {
  width: 940px;
}

.span11 {
  width: 860px;
}

.span10 {
  width: 780px;
}

.span9 {
  width: 700px;
}

.span8 {
  width: 620px;
}

.span7 {
  width: 540px;
}

.span6 {
  width: 460px;
}

.span5 {
  width: 380px;
}

.span4 {
  width: 300px;
}

.span3 {
  width: 220px;
}

.span2 {
  width: 140px;
}

.span1 {
  width: 60px;
}

.offset12 {
  margin-left: 980px;
}

.offset11 {
  margin-left: 900px;
}

.offset10 {
  margin-left: 820px;
}

.offset9 {
  margin-left: 740px;
}

.offset8 {
  margin-left: 660px;
}

.offset7 {
  margin-left: 580px;
}

.offset6 {
  margin-left: 500px;
}

.offset5 {
  margin-left: 420px;
}

.offset4 {
  margin-left: 340px;
}

.offset3 {
  margin-left: 260px;
}

.offset2 {
  margin-left: 180px;
}

.offset1 {
  margin-left: 100px;
}

.row-fluid {
  width: 100%;
  *zoom: 1;
}

.row-fluid:before,
.row-fluid:after {
  display: table;
  content: "";
}

.row-fluid:after {
  clear: both;
}

.row-fluid [class*="span"] {
  display: block;
  width: 100%;
  min-height: 28px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  float: left;
  margin-left: 2.12765957%;
  *margin-left: 2.07446808%;
}

.row-fluid [class*="span"]:first-child {
  margin-left: 0;
}

.row-fluid .span12 {
  width: 99.99999999%;
  *width: 99.9468085%;
}

.row-fluid .span11 {
  width: 91.48936169%;
  *width: 91.4361702%;
}

.row-fluid .span10 {
  width: 82.9787234%;
  *width: 82.92553191%;
}

.row-fluid .span9 {
  width: 74.4680851%;
  *width: 74.41489361%;
}

.row-fluid .span8 {
  width: 65.9574468%;
  *width: 65.90425531%;
}

.row-fluid .span7 {
  width: 57.44680851%;
  *width: 57.39361702%;
}

.row-fluid .span6 {
  width: 48.93617021%;
  *width: 48.88297872%;
}

.row-fluid .span5 {
  width: 40.42553191%;
  *width: 40.37234042%;
}

.row-fluid .span4 {
  width: 31.91489361%;
  *width: 31.86170212%;
}

.row-fluid .span3 {
  width: 23.40425532%;
  *width: 23.35106383%;
}

.row-fluid .span2 {
  width: 14.89361702%;
  *width: 14.84042553%;
}

.row-fluid .span1 {
  width: 6.38297872%;
  *width: 6.32978723%;
}

.container {
  margin-right: auto;
  margin-left: auto;
  *zoom: 1;
}

.container:before,
.container:after {
  display: table;
  content: "";
}

.container:after {
  clear: both;
}

.container-fluid {
  padding-right: 20px;
  padding-left: 20px;
  *zoom: 1;
}

.container-fluid:before,
.container-fluid:after {
  display: table;
  content: "";
}

.container-fluid:after {
  clear: both;
}

p {
  margin: 0 0 9px;
}

p small {
  font-size: 11px;
  color: #999999;
}

.lead {
  margin-bottom: 18px;
  font-size: 20px;
  font-weight: 200;
  line-height: 27px;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  margin: 0;
  font-family: inherit;
  font-weight: bold;
  color: inherit;
  text-rendering: optimizelegibility;
}

h1 small,
h2 small,
h3 small,
h4 small,
h5 small,
h6 small {
  font-weight: normal;
  color: #999999;
}

h1 {
  font-size: 30px;
  line-height: 36px;
}

h1 small {
  font-size: 18px;
}

h2 {
  font-size: 24px;
  line-height: 36px;
}

h2 small {
  font-size: 18px;
}

h3 {
  font-size: 18px;
  line-height: 27px;
}

h3 small {
  font-size: 14px;
}

h4,
h5,
h6 {
  line-height: 18px;
}

h4 {
  font-size: 14px;
}

h4 small {
  font-size: 12px;
}

h5 {
  font-size: 12px;
}

h6 {
  font-size: 11px;
  color: #999999;
  text-transform: uppercase;
}

.page-header {
  padding-bottom: 17px;
  margin: 18px 0;
  border-bottom: 1px solid #eeeeee;
}

.page-header h1 {
  line-height: 1;
}

ul,
ol {
  padding: 0;
  margin: 0 0 9px 25px;
}

ul ul,
ul ol,
ol ol,
ol ul {
  margin-bottom: 0;
}

ul {
  list-style: disc;
}

ol {
  list-style: decimal;
}

li {
  line-height: 18px;
}

ul.unstyled,
ol.unstyled {
  margin-left: 0;
  list-style: none;
}

dl {
  margin-bottom: 18px;
}

dt,
dd {
  line-height: 18px;
}

dt {
  font-weight: bold;
  line-height: 17px;
}

dd {
  margin-left: 9px;
}

.dl-horizontal dt {
  float: left;
  width: 120px;
  clear: left;
  text-align: right;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.dl-horizontal dd {
  margin-left: 130px;
}

hr {
  margin: 18px 0;
  border: 0;
  border-top: 1px solid #eeeeee;
  border-bottom: 1px solid #ffffff;
}

strong {
  font-weight: bold;
}

em {
  font-style: italic;
}

.muted {
  color: #999999;
}

abbr[title] {
  cursor: help;
  border-bottom: 1px dotted #999999;
}

abbr.initialism {
  font-size: 90%;
  text-transform: uppercase;
}

blockquote {
  padding: 0 0 0 15px;
  margin: 0 0 18px;
  border-left: 5px solid #eeeeee;
}

blockquote p {
  margin-bottom: 0;
  font-size: 16px;
  font-weight: 300;
  line-height: 22.5px;
}

blockquote small {
  display: block;
  line-height: 18px;
  color: #999999;
}

blockquote small:before {
  content: "\2014 \00A0";
}

blockquote.pull-right {
  float: right;
  padding-right: 15px;
  padding-left: 0;
  border-right: 5px solid #eeeeee;
  border-left: 0;
}

blockquote.pull-right p,
blockquote.pull-right small {
  text-align: right;
}

q:before,
q:after,
blockquote:before,
blockquote:after {
  content: "";
}

address {
  display: block;
  margin-bottom: 18px;
  font-style: normal;
  line-height: 18px;
}

small {
  font-size: 100%;
}

cite {
  font-style: normal;
}

code,
pre {
  padding: 0 3px 2px;
  font-family: Menlo, Monaco, Consolas, "Courier New", monospace;
  font-size: 12px;
  color: #333333;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

code {
  padding: 2px 4px;
  color: #d14;
  background-color: #f7f7f9;
  border: 1px solid #e1e1e8;
}

pre {
  display: block;
  padding: 8.5px;
  margin: 0 0 9px;
  font-size: 12.025px;
  line-height: 18px;
  word-break: break-all;
  word-wrap: break-word;
  white-space: pre;
  white-space: pre-wrap;
  background-color: #f5f5f5;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.15);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

pre.prettyprint {
  margin-bottom: 18px;
}

pre code {
  padding: 0;
  color: inherit;
  background-color: transparent;
  border: 0;
}

.pre-scrollable {
  max-height: 340px;
  overflow-y: scroll;
}

form {
  margin: 0 0 18px;
}

fieldset {
  padding: 0;
  margin: 0;
  border: 0;
}

legend {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 27px;
  font-size: 19.5px;
  line-height: 36px;
  color: #333333;
  border: 0;
  border-bottom: 1px solid #e5e5e5;
}

legend small {
  font-size: 13.5px;
  color: #999999;
}

label,
input,
button,
select,
textarea {
  font-size: 13px;
  font-weight: normal;
  line-height: 18px;
}

input,
button,
select,
textarea {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

label {
  display: block;
  margin-bottom: 5px;
}

select,
textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
  display: inline-block;
  height: 18px;
  padding: 4px;
  margin-bottom: 9px;
  font-size: 13px;
  line-height: 18px;
  color: #555555;
}

input,
textarea {
  width: 210px;
}

textarea {
  height: auto;
}

textarea,
input[type="text"],
input[type="password"],
input[type="datetime"],
input[type="datetime-local"],
input[type="date"],
input[type="month"],
input[type="time"],
input[type="week"],
input[type="number"],
input[type="email"],
input[type="url"],
input[type="search"],
input[type="tel"],
input[type="color"],
.uneditable-input {
  background-color: #ffffff;
  border: 1px solid #cccccc;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border linear 0.2s, box-shadow linear 0.2s;
  -moz-transition: border linear 0.2s, box-shadow linear 0.2s;
  -ms-transition: border linear 0.2s, box-shadow linear 0.2s;
  -o-transition: border linear 0.2s, box-shadow linear 0.2s;
  transition: border linear 0.2s, box-shadow linear 0.2s;
}

textarea:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="datetime"]:focus,
input[type="datetime-local"]:focus,
input[type="date"]:focus,
input[type="month"]:focus,
input[type="time"]:focus,
input[type="week"]:focus,
input[type="number"]:focus,
input[type="email"]:focus,
input[type="url"]:focus,
input[type="search"]:focus,
input[type="tel"]:focus,
input[type="color"]:focus,
.uneditable-input:focus {
  border-color: rgba(82, 168, 236, 0.8);
  outline: 0;
  outline: thin dotted \9;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
    0 0 8px rgba(82, 168, 236, 0.6);
}

input[type="radio"],
input[type="checkbox"] {
  margin: 3px 0;
  *margin-top: 0;
  line-height: normal;
  cursor: pointer;
}

input[type="submit"],
input[type="reset"],
input[type="button"],
input[type="radio"],
input[type="checkbox"] {
  width: auto;
}

.uneditable-textarea {
  width: auto;
  height: auto;
}

select,
input[type="file"] {
  height: 28px;
  *margin-top: 4px;
  line-height: 28px;
}

select {
  width: 220px;
  border: 1px solid #bbb;
}

select[multiple],
select[size] {
  height: auto;
}

select:focus,
input[type="file"]:focus,
input[type="radio"]:focus,
input[type="checkbox"]:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.radio,
.checkbox {
  min-height: 18px;
  padding-left: 18px;
}

.radio input[type="radio"],
.checkbox input[type="checkbox"] {
  float: left;
  margin-left: -18px;
}

.controls > .radio:first-child,
.controls > .checkbox:first-child {
  padding-top: 5px;
}

.radio.inline,
.checkbox.inline {
  display: inline-block;
  padding-top: 5px;
  margin-bottom: 0;
  vertical-align: middle;
}

.radio.inline + .radio.inline,
.checkbox.inline + .checkbox.inline {
  margin-left: 10px;
}

.input-mini {
  width: 60px;
}

.input-small {
  width: 90px;
}

.input-medium {
  width: 150px;
}

.input-large {
  width: 210px;
}

.input-xlarge {
  width: 270px;
}

.input-xxlarge {
  width: 530px;
}

input[class*="span"],
select[class*="span"],
textarea[class*="span"],
.uneditable-input[class*="span"],
.row-fluid input[class*="span"],
.row-fluid select[class*="span"],
.row-fluid textarea[class*="span"],
.row-fluid .uneditable-input[class*="span"] {
  float: none;
  margin-left: 0;
}

.input-append input[class*="span"],
.input-append .uneditable-input[class*="span"],
.input-prepend input[class*="span"],
.input-prepend .uneditable-input[class*="span"],
.row-fluid .input-prepend [class*="span"],
.row-fluid .input-append [class*="span"] {
  display: inline-block;
}

input,
textarea,
.uneditable-input {
  margin-left: 0;
}

input.span12,
textarea.span12,
.uneditable-input.span12 {
  width: 930px;
}

input.span11,
textarea.span11,
.uneditable-input.span11 {
  width: 850px;
}

input.span10,
textarea.span10,
.uneditable-input.span10 {
  width: 770px;
}

input.span9,
textarea.span9,
.uneditable-input.span9 {
  width: 690px;
}

input.span8,
textarea.span8,
.uneditable-input.span8 {
  width: 610px;
}

input.span7,
textarea.span7,
.uneditable-input.span7 {
  width: 530px;
}

input.span6,
textarea.span6,
.uneditable-input.span6 {
  width: 450px;
}

input.span5,
textarea.span5,
.uneditable-input.span5 {
  width: 370px;
}

input.span4,
textarea.span4,
.uneditable-input.span4 {
  width: 290px;
}

input.span3,
textarea.span3,
.uneditable-input.span3 {
  width: 210px;
}

input.span2,
textarea.span2,
.uneditable-input.span2 {
  width: 130px;
}

input.span1,
textarea.span1,
.uneditable-input.span1 {
  width: 50px;
}

input[disabled],
select[disabled],
textarea[disabled],
input[readonly],
select[readonly],
textarea[readonly] {
  cursor: not-allowed;
  background-color: #eeeeee;
  border-color: #ddd;
}

input[type="radio"][disabled],
input[type="checkbox"][disabled],
input[type="radio"][readonly],
input[type="checkbox"][readonly] {
  background-color: transparent;
}

.control-group.warning > label,
.control-group.warning .help-block,
.control-group.warning .help-inline {
  color: #c09853;
}

.control-group.warning .checkbox,
.control-group.warning .radio,
.control-group.warning input,
.control-group.warning select,
.control-group.warning textarea {
  color: #c09853;
  border-color: #c09853;
}

.control-group.warning .checkbox:focus,
.control-group.warning .radio:focus,
.control-group.warning input:focus,
.control-group.warning select:focus,
.control-group.warning textarea:focus {
  border-color: #a47e3c;
  -webkit-box-shadow: 0 0 6px #dbc59e;
  -moz-box-shadow: 0 0 6px #dbc59e;
  box-shadow: 0 0 6px #dbc59e;
}

.control-group.warning .input-prepend .add-on,
.control-group.warning .input-append .add-on {
  color: #c09853;
  background-color: #fcf8e3;
  border-color: #c09853;
}

.control-group.error > label,
.control-group.error .help-block,
.control-group.error .help-inline {
  color: #b94a48;
}

.control-group.error .checkbox,
.control-group.error .radio,
.control-group.error input,
.control-group.error select,
.control-group.error textarea {
  color: #b94a48;
  border-color: #b94a48;
}

.control-group.error .checkbox:focus,
.control-group.error .radio:focus,
.control-group.error input:focus,
.control-group.error select:focus,
.control-group.error textarea:focus {
  border-color: #953b39;
  -webkit-box-shadow: 0 0 6px #d59392;
  -moz-box-shadow: 0 0 6px #d59392;
  box-shadow: 0 0 6px #d59392;
}

.control-group.error .input-prepend .add-on,
.control-group.error .input-append .add-on {
  color: #b94a48;
  background-color: #f2dede;
  border-color: #b94a48;
}

.control-group.success > label,
.control-group.success .help-block,
.control-group.success .help-inline {
  color: #468847;
}

.control-group.success .checkbox,
.control-group.success .radio,
.control-group.success input,
.control-group.success select,
.control-group.success textarea {
  color: #468847;
  border-color: #468847;
}

.control-group.success .checkbox:focus,
.control-group.success .radio:focus,
.control-group.success input:focus,
.control-group.success select:focus,
.control-group.success textarea:focus {
  border-color: #356635;
  -webkit-box-shadow: 0 0 6px #7aba7b;
  -moz-box-shadow: 0 0 6px #7aba7b;
  box-shadow: 0 0 6px #7aba7b;
}

.control-group.success .input-prepend .add-on,
.control-group.success .input-append .add-on {
  color: #468847;
  background-color: #dff0d8;
  border-color: #468847;
}

input:focus:required:invalid,
textarea:focus:required:invalid,
select:focus:required:invalid {
  color: #b94a48;
  border-color: #ee5f5b;
}

input:focus:required:invalid:focus,
textarea:focus:required:invalid:focus,
select:focus:required:invalid:focus {
  border-color: #e9322d;
  -webkit-box-shadow: 0 0 6px #f8b9b7;
  -moz-box-shadow: 0 0 6px #f8b9b7;
  box-shadow: 0 0 6px #f8b9b7;
}

.form-actions {
  padding: 17px 20px 18px;
  margin-top: 18px;
  margin-bottom: 18px;
  background-color: #f5f5f5;
  border-top: 1px solid #e5e5e5;
  *zoom: 1;
}

.form-actions:before,
.form-actions:after {
  display: table;
  content: "";
}

.form-actions:after {
  clear: both;
}

.uneditable-input {
  overflow: hidden;
  white-space: nowrap;
  cursor: not-allowed;
  background-color: #ffffff;
  border-color: #eee;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.025);
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.025);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.025);
}

:-moz-placeholder {
  color: #999999;
}

:-ms-input-placeholder {
  color: #999999;
}

::-webkit-input-placeholder {
  color: #999999;
}

.help-block,
.help-inline {
  color: #555555;
}

.help-block {
  display: block;
  margin-bottom: 9px;
}

.help-inline {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  vertical-align: middle;
  padding-left: 5px;
}

.input-prepend,
.input-append {
  margin-bottom: 5px;
}

.input-prepend input,
.input-append input,
.input-prepend select,
.input-append select,
.input-prepend .uneditable-input,
.input-append .uneditable-input {
  position: relative;
  margin-bottom: 0;
  *margin-left: 0;
  vertical-align: middle;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.input-prepend input:focus,
.input-append input:focus,
.input-prepend select:focus,
.input-append select:focus,
.input-prepend .uneditable-input:focus,
.input-append .uneditable-input:focus {
  z-index: 2;
}

.input-prepend .uneditable-input,
.input-append .uneditable-input {
  border-left-color: #ccc;
}

.input-prepend .add-on,
.input-append .add-on {
  display: inline-block;
  width: auto;
  height: 18px;
  min-width: 16px;
  padding: 4px 5px;
  font-weight: normal;
  line-height: 18px;
  text-align: center;
  text-shadow: 0 1px 0 #ffffff;
  vertical-align: middle;
  background-color: #eeeeee;
  border: 1px solid #ccc;
}

.input-prepend .add-on,
.input-append .add-on,
.input-prepend .btn,
.input-append .btn {
  margin-left: -1px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.input-prepend .active,
.input-append .active {
  background-color: #a9dba9;
  border-color: #46a546;
}

.input-prepend .add-on,
.input-prepend .btn {
  margin-right: -1px;
}

.input-prepend .add-on:first-child,
.input-prepend .btn:first-child {
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.input-append input,
.input-append select,
.input-append .uneditable-input {
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.input-append .uneditable-input {
  border-right-color: #ccc;
  border-left-color: #eee;
}

.input-append .add-on:last-child,
.input-append .btn:last-child {
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.input-prepend.input-append input,
.input-prepend.input-append select,
.input-prepend.input-append .uneditable-input {
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.input-prepend.input-append .add-on:first-child,
.input-prepend.input-append .btn:first-child {
  margin-right: -1px;
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.input-prepend.input-append .add-on:last-child,
.input-prepend.input-append .btn:last-child {
  margin-left: -1px;
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.search-query {
  padding-right: 14px;
  padding-right: 4px \9;
  padding-left: 14px;
  padding-left: 4px \9;
  margin-bottom: 0;
  -webkit-border-radius: 14px;
  -moz-border-radius: 14px;
  border-radius: 14px;
}

.form-search input,
.form-inline input,
.form-horizontal input,
.form-search textarea,
.form-inline textarea,
.form-horizontal textarea,
.form-search select,
.form-inline select,
.form-horizontal select,
.form-search .help-inline,
.form-inline .help-inline,
.form-horizontal .help-inline,
.form-search .uneditable-input,
.form-inline .uneditable-input,
.form-horizontal .uneditable-input,
.form-search .input-prepend,
.form-inline .input-prepend,
.form-horizontal .input-prepend,
.form-search .input-append,
.form-inline .input-append,
.form-horizontal .input-append {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  margin-bottom: 0;
}

.form-search .hide,
.form-inline .hide,
.form-horizontal .hide {
  display: none;
}

.form-search label,
.form-inline label {
  display: inline-block;
}

.form-search .input-append,
.form-inline .input-append,
.form-search .input-prepend,
.form-inline .input-prepend {
  margin-bottom: 0;
}

.form-search .radio,
.form-search .checkbox,
.form-inline .radio,
.form-inline .checkbox {
  padding-left: 0;
  margin-bottom: 0;
  vertical-align: middle;
}

.form-search .radio input[type="radio"],
.form-search .checkbox input[type="checkbox"],
.form-inline .radio input[type="radio"],
.form-inline .checkbox input[type="checkbox"] {
  float: left;
  margin-right: 3px;
  margin-left: 0;
}

.control-group {
  margin-bottom: 9px;
}

legend + .control-group {
  margin-top: 18px;
  -webkit-margin-top-collapse: separate;
}

.form-horizontal .control-group {
  margin-bottom: 18px;
  *zoom: 1;
}

.form-horizontal .control-group:before,
.form-horizontal .control-group:after {
  display: table;
  content: "";
}

.form-horizontal .control-group:after {
  clear: both;
}

.form-horizontal .control-label {
  float: left;
  width: 140px;
  padding-top: 5px;
  text-align: right;
}

.form-horizontal .controls {
  *display: inline-block;
  *padding-left: 20px;
  margin-left: 160px;
  *margin-left: 0;
}

.form-horizontal .controls:first-child {
  *padding-left: 160px;
}

.form-horizontal .help-block {
  margin-top: 9px;
  margin-bottom: 0;
}

.form-horizontal .form-actions {
  padding-left: 160px;
}

table {
  max-width: 100%;
  background-color: transparent;
  border-collapse: collapse;
  border-spacing: 0;
}

.table {
  width: 100%;
  margin-bottom: 18px;
}

.table th,
.table td {
  padding: 8px;
  line-height: 18px;
  text-align: left;
  vertical-align: top;
  border-top: 1px solid #dddddd;
}

.table th {
  font-weight: bold;
}

.table thead th {
  vertical-align: bottom;
}

.table caption + thead tr:first-child th,
.table caption + thead tr:first-child td,
.table colgroup + thead tr:first-child th,
.table colgroup + thead tr:first-child td,
.table thead:first-child tr:first-child th,
.table thead:first-child tr:first-child td {
  border-top: 0;
}

.table tbody + tbody {
  border-top: 2px solid #dddddd;
}

.table-condensed th,
.table-condensed td {
  padding: 4px 5px;
}

.table-bordered {
  border: 1px solid #dddddd;
  border-collapse: separate;
  *border-collapse: collapsed;
  border-left: 0;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.table-bordered th,
.table-bordered td {
  border-left: 1px solid #dddddd;
}

.table-bordered caption + thead tr:first-child th,
.table-bordered caption + tbody tr:first-child th,
.table-bordered caption + tbody tr:first-child td,
.table-bordered colgroup + thead tr:first-child th,
.table-bordered colgroup + tbody tr:first-child th,
.table-bordered colgroup + tbody tr:first-child td,
.table-bordered thead:first-child tr:first-child th,
.table-bordered tbody:first-child tr:first-child th,
.table-bordered tbody:first-child tr:first-child td {
  border-top: 0;
}

.table-bordered thead:first-child tr:first-child th:first-child,
.table-bordered tbody:first-child tr:first-child td:first-child {
  -webkit-border-top-left-radius: 4px;
  border-top-left-radius: 4px;
  -moz-border-radius-topleft: 4px;
}

.table-bordered thead:first-child tr:first-child th:last-child,
.table-bordered tbody:first-child tr:first-child td:last-child {
  -webkit-border-top-right-radius: 4px;
  border-top-right-radius: 4px;
  -moz-border-radius-topright: 4px;
}

.table-bordered thead:last-child tr:last-child th:first-child,
.table-bordered tbody:last-child tr:last-child td:first-child {
  -webkit-border-radius: 0 0 0 4px;
  -moz-border-radius: 0 0 0 4px;
  border-radius: 0 0 0 4px;
  -webkit-border-bottom-left-radius: 4px;
  border-bottom-left-radius: 4px;
  -moz-border-radius-bottomleft: 4px;
}

.table-bordered thead:last-child tr:last-child th:last-child,
.table-bordered tbody:last-child tr:last-child td:last-child {
  -webkit-border-bottom-right-radius: 4px;
  border-bottom-right-radius: 4px;
  -moz-border-radius-bottomright: 4px;
}

.table-striped tbody tr:nth-child(odd) td,
.table-striped tbody tr:nth-child(odd) th {
  background-color: #f9f9f9;
}

.table tbody tr:hover td,
.table tbody tr:hover th {
  background-color: #f5f5f5;
}

table .span1 {
  float: none;
  width: 44px;
  margin-left: 0;
}

table .span2 {
  float: none;
  width: 124px;
  margin-left: 0;
}

table .span3 {
  float: none;
  width: 204px;
  margin-left: 0;
}

table .span4 {
  float: none;
  width: 284px;
  margin-left: 0;
}

table .span5 {
  float: none;
  width: 364px;
  margin-left: 0;
}

table .span6 {
  float: none;
  width: 444px;
  margin-left: 0;
}

table .span7 {
  float: none;
  width: 524px;
  margin-left: 0;
}

table .span8 {
  float: none;
  width: 604px;
  margin-left: 0;
}

table .span9 {
  float: none;
  width: 684px;
  margin-left: 0;
}

table .span10 {
  float: none;
  width: 764px;
  margin-left: 0;
}

table .span11 {
  float: none;
  width: 844px;
  margin-left: 0;
}

table .span12 {
  float: none;
  width: 924px;
  margin-left: 0;
}

table .span13 {
  float: none;
  width: 1004px;
  margin-left: 0;
}

table .span14 {
  float: none;
  width: 1084px;
  margin-left: 0;
}

table .span15 {
  float: none;
  width: 1164px;
  margin-left: 0;
}

table .span16 {
  float: none;
  width: 1244px;
  margin-left: 0;
}

table .span17 {
  float: none;
  width: 1324px;
  margin-left: 0;
}

table .span18 {
  float: none;
  width: 1404px;
  margin-left: 0;
}

table .span19 {
  float: none;
  width: 1484px;
  margin-left: 0;
}

table .span20 {
  float: none;
  width: 1564px;
  margin-left: 0;
}

table .span21 {
  float: none;
  width: 1644px;
  margin-left: 0;
}

table .span22 {
  float: none;
  width: 1724px;
  margin-left: 0;
}

table .span23 {
  float: none;
  width: 1804px;
  margin-left: 0;
}

table .span24 {
  float: none;
  width: 1884px;
  margin-left: 0;
}

[class^="icon-"],
[class*=" icon-"] {
  display: inline-block;
  width: 14px;
  height: 14px;
  *margin-right: 0.3em;
  line-height: 14px;
  vertical-align: text-top;
  /* background-image: url("bootstrap-2.0.4/twitter/bootstrap/glyphicons-halflings.png"); */
  background-position: 14px 14px;
  background-repeat: no-repeat;
}

[class^="icon-"]:last-child,
[class*=" icon-"]:last-child {
  *margin-left: 0;
}

/* .icon-white {
    background-image: url("bootstrap-2.0.4/twitter/bootstrap/glyphicons-halflings-white.png")
} */

.icon-glass {
  background-position: 0 0;
}

.icon-music {
  background-position: -24px 0;
}

.icon-search {
  background-position: -48px 0;
}

.icon-envelope {
  background-position: -72px 0;
}

.icon-heart {
  background-position: -96px 0;
}

.icon-star {
  background-position: -120px 0;
}

.icon-star-empty {
  background-position: -144px 0;
}

.icon-user {
  background-position: -168px 0;
}

.icon-film {
  background-position: -192px 0;
}

.icon-th-large {
  background-position: -216px 0;
}

.icon-th {
  background-position: -240px 0;
}

.icon-th-list {
  background-position: -264px 0;
}

.icon-ok {
  background-position: -288px 0;
}

.icon-remove {
  background-position: -312px 0;
}

.icon-zoom-in {
  background-position: -336px 0;
}

.icon-zoom-out {
  background-position: -360px 0;
}

.icon-off {
  background-position: -384px 0;
}

.icon-signal {
  background-position: -408px 0;
}

.icon-cog {
  background-position: -432px 0;
}

.icon-trash {
  background-position: -456px 0;
}

.icon-home {
  background-position: 0 -24px;
}

.icon-file {
  background-position: -24px -24px;
}

.icon-time {
  background-position: -48px -24px;
}

.icon-road {
  background-position: -72px -24px;
}

.icon-download-alt {
  background-position: -96px -24px;
}

.icon-download {
  background-position: -120px -24px;
}

.icon-upload {
  background-position: -144px -24px;
}

.icon-inbox {
  background-position: -168px -24px;
}

.icon-play-circle {
  background-position: -192px -24px;
}

.icon-repeat {
  background-position: -216px -24px;
}

.icon-refresh {
  background-position: -240px -24px;
}

.icon-list-alt {
  background-position: -264px -24px;
}

.icon-lock {
  background-position: -287px -24px;
}

.icon-flag {
  background-position: -312px -24px;
}

.icon-headphones {
  background-position: -336px -24px;
}

.icon-volume-off {
  background-position: -360px -24px;
}

.icon-volume-down {
  background-position: -384px -24px;
}

.icon-volume-up {
  background-position: -408px -24px;
}

.icon-qrcode {
  background-position: -432px -24px;
}

.icon-barcode {
  background-position: -456px -24px;
}

.icon-tag {
  background-position: 0 -48px;
}

.icon-tags {
  background-position: -25px -48px;
}

.icon-book {
  background-position: -48px -48px;
}

.icon-bookmark {
  background-position: -72px -48px;
}

.icon-print {
  background-position: -96px -48px;
}

.icon-camera {
  background-position: -120px -48px;
}

.icon-font {
  background-position: -144px -48px;
}

.icon-bold {
  background-position: -167px -48px;
}

.icon-italic {
  background-position: -192px -48px;
}

.icon-text-height {
  background-position: -216px -48px;
}

.icon-text-width {
  background-position: -240px -48px;
}

.icon-align-left {
  background-position: -264px -48px;
}

.icon-align-center {
  background-position: -288px -48px;
}

.icon-align-right {
  background-position: -312px -48px;
}

.icon-align-justify {
  background-position: -336px -48px;
}

.icon-list {
  background-position: -360px -48px;
}

.icon-indent-left {
  background-position: -384px -48px;
}

.icon-indent-right {
  background-position: -408px -48px;
}

.icon-facetime-video {
  background-position: -432px -48px;
}

.icon-picture {
  background-position: -456px -48px;
}

.icon-pencil {
  background-position: 0 -72px;
}

.icon-map-marker {
  background-position: -24px -72px;
}

.icon-adjust {
  background-position: -48px -72px;
}

.icon-tint {
  background-position: -72px -72px;
}

.icon-edit {
  background-position: -96px -72px;
}

.icon-share {
  background-position: -120px -72px;
}

.icon-check {
  background-position: -144px -72px;
}

.icon-move {
  background-position: -168px -72px;
}

.icon-step-backward {
  background-position: -192px -72px;
}

.icon-fast-backward {
  background-position: -216px -72px;
}

.icon-backward {
  background-position: -240px -72px;
}

.icon-play {
  background-position: -264px -72px;
}

.icon-pause {
  background-position: -288px -72px;
}

.icon-stop {
  background-position: -312px -72px;
}

.icon-forward {
  background-position: -336px -72px;
}

.icon-fast-forward {
  background-position: -360px -72px;
}

.icon-step-forward {
  background-position: -384px -72px;
}

.icon-eject {
  background-position: -408px -72px;
}

.icon-chevron-left {
  background-position: -432px -72px;
}

.icon-chevron-right {
  background-position: -456px -72px;
}

.icon-plus-sign {
  background-position: 0 -96px;
}

.icon-minus-sign {
  background-position: -24px -96px;
}

.icon-remove-sign {
  background-position: -48px -96px;
}

.icon-ok-sign {
  background-position: -72px -96px;
}

.icon-question-sign {
  background-position: -96px -96px;
}

.icon-info-sign {
  background-position: -120px -96px;
}

.icon-screenshot {
  background-position: -144px -96px;
}

.icon-remove-circle {
  background-position: -168px -96px;
}

.icon-ok-circle {
  background-position: -192px -96px;
}

.icon-ban-circle {
  background-position: -216px -96px;
}

.icon-arrow-left {
  background-position: -240px -96px;
}

.icon-arrow-right {
  background-position: -264px -96px;
}

.icon-arrow-up {
  background-position: -289px -96px;
}

.icon-arrow-down {
  background-position: -312px -96px;
}

.icon-share-alt {
  background-position: -336px -96px;
}

.icon-resize-full {
  background-position: -360px -96px;
}

.icon-resize-small {
  background-position: -384px -96px;
}

.icon-plus {
  background-position: -408px -96px;
}

.icon-minus {
  background-position: -433px -96px;
}

.icon-asterisk {
  background-position: -456px -96px;
}

.icon-exclamation-sign {
  background-position: 0 -120px;
}

.icon-gift {
  background-position: -24px -120px;
}

.icon-leaf {
  background-position: -48px -120px;
}

.icon-fire {
  background-position: -72px -120px;
}

.icon-eye-open {
  background-position: -96px -120px;
}

.icon-eye-close {
  background-position: -120px -120px;
}

.icon-warning-sign {
  background-position: -144px -120px;
}

.icon-plane {
  background-position: -168px -120px;
}

.icon-calendar {
  background-position: -192px -120px;
}

.icon-random {
  background-position: -216px -120px;
}

.icon-comment {
  background-position: -240px -120px;
}

.icon-magnet {
  background-position: -264px -120px;
}

.icon-chevron-up {
  background-position: -288px -120px;
}

.icon-chevron-down {
  background-position: -313px -119px;
}

.icon-retweet {
  background-position: -336px -120px;
}

.icon-shopping-cart {
  background-position: -360px -120px;
}

.icon-folder-close {
  background-position: -384px -120px;
}

.icon-folder-open {
  background-position: -408px -120px;
}

.icon-resize-vertical {
  background-position: -432px -119px;
}

.icon-resize-horizontal {
  background-position: -456px -118px;
}

.icon-hdd {
  background-position: 0 -144px;
}

.icon-bullhorn {
  background-position: -24px -144px;
}

.icon-bell {
  background-position: -48px -144px;
}

.icon-certificate {
  background-position: -72px -144px;
}

.icon-thumbs-up {
  background-position: -96px -144px;
}

.icon-thumbs-down {
  background-position: -120px -144px;
}

.icon-hand-right {
  background-position: -144px -144px;
}

.icon-hand-left {
  background-position: -168px -144px;
}

.icon-hand-up {
  background-position: -192px -144px;
}

.icon-hand-down {
  background-position: -216px -144px;
}

.icon-circle-arrow-right {
  background-position: -240px -144px;
}

.icon-circle-arrow-left {
  background-position: -264px -144px;
}

.icon-circle-arrow-up {
  background-position: -288px -144px;
}

.icon-circle-arrow-down {
  background-position: -312px -144px;
}

.icon-globe {
  background-position: -336px -144px;
}

.icon-wrench {
  background-position: -360px -144px;
}

.icon-tasks {
  background-position: -384px -144px;
}

.icon-filter {
  background-position: -408px -144px;
}

.icon-briefcase {
  background-position: -432px -144px;
}

.icon-fullscreen {
  background-position: -456px -144px;
}

.dropup,
.dropdown {
  position: relative;
}

.dropdown-toggle {
  *margin-bottom: -3px;
}

.dropdown-toggle:active,
.open .dropdown-toggle {
  outline: 0;
}

.caret {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: top;
  border-top: 4px solid #000000;
  border-right: 4px solid transparent;
  border-left: 4px solid transparent;
  content: "";
  opacity: 0.3;
  filter: alpha(opacity=30);
}

.dropdown .caret {
  margin-top: 8px;
  margin-left: 2px;
}

.dropdown:hover .caret,
.open .caret {
  opacity: 1;
  filter: alpha(opacity=100);
}

.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  display: none;
  float: left;
  min-width: 160px;
  padding: 4px 0;
  margin: 1px 0 0;
  list-style: none;
  background-color: #ffffff;
  border: 1px solid #ccc;
  border: 1px solid rgba(0, 0, 0, 0.2);
  *border-right-width: 2px;
  *border-bottom-width: 2px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding;
  background-clip: padding-box;
}

.dropdown-menu.pull-right {
  right: 0;
  left: auto;
}

.dropdown-menu .divider {
  *width: 100%;
  height: 1px;
  margin: 8px 1px;
  *margin: -5px 0 5px;
  overflow: hidden;
  background-color: #e5e5e5;
  border-bottom: 1px solid #ffffff;
}

.dropdown-menu a {
  display: block;
  padding: 3px 15px;
  clear: both;
  font-weight: normal;
  line-height: 18px;
  color: #333333;
  white-space: nowrap;
}

.dropdown-menu li > a:hover,
.dropdown-menu .active > a,
.dropdown-menu .active > a:hover {
  color: #ffffff;
  text-decoration: none;
  background-color: #0088cc;
}

.open {
  *z-index: 1000;
}

.open > .dropdown-menu {
  display: block;
}

.pull-right > .dropdown-menu {
  right: 0;
  left: auto;
}

.dropup .caret,
.navbar-fixed-bottom .dropdown .caret {
  border-top: 0;
  border-bottom: 4px solid #000000;
  content: "\2191";
}

.dropup .dropdown-menu,
.navbar-fixed-bottom .dropdown .dropdown-menu {
  top: auto;
  bottom: 100%;
  margin-bottom: 1px;
}

.typeahead {
  margin-top: 2px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.well {
  min-height: 20px;
  padding: 19px;
  margin-bottom: 20px;
  background-color: #f5f5f5;
  border: 1px solid #eee;
  border: 1px solid rgba(0, 0, 0, 0.05);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.05);
}

.well blockquote {
  border-color: #ddd;
  border-color: rgba(0, 0, 0, 0.15);
}

.well-large {
  padding: 24px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.well-small {
  padding: 9px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.fade {
  opacity: 0;
  -webkit-transition: opacity 0.15s linear;
  -moz-transition: opacity 0.15s linear;
  -ms-transition: opacity 0.15s linear;
  -o-transition: opacity 0.15s linear;
  transition: opacity 0.15s linear;
}

.fade.in {
  opacity: 1;
}

.collapse {
  position: relative;
  height: 0;
  overflow: hidden;
  -webkit-transition: height 0.35s ease;
  -moz-transition: height 0.35s ease;
  -ms-transition: height 0.35s ease;
  -o-transition: height 0.35s ease;
  transition: height 0.35s ease;
}

.collapse.in {
  height: auto;
}

.close {
  float: right;
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  color: #000000;
  text-shadow: 0 1px 0 #ffffff;
  opacity: 0.2;
  filter: alpha(opacity=20);
}

.close:hover {
  color: #000000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.4;
  filter: alpha(opacity=40);
}

button.close {
  padding: 0;
  cursor: pointer;
  background: transparent;
  border: 0;
  -webkit-appearance: none;
}

.btn {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  padding: 4px 10px 4px;
  margin-bottom: 0;
  font-size: 13px;
  line-height: 18px;
  *line-height: 20px;
  color: #333333;
  text-align: center;
  text-shadow: 0 1px 1px rgba(255, 255, 255, 0.75);
  vertical-align: middle;
  cursor: pointer;
  background-color: #f5f5f5;
  background-image: -moz-linear-gradient(to top, #fff, #e6e6e6);
  background-image: -ms-linear-gradient(to top, #fff, #e6e6e6);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#fff),
    to(#e6e6e6)
  );
  background-image: -webkit-linear-gradient(to top, #fff, #e6e6e6);
  background-image: -o-linear-gradient(to top, #fff, #e6e6e6);
  background-image: linear-gradient(to top, #fff, #e6e6e6);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#e6e6e6', GradientType=0);
  border-color: #e6e6e6 #e6e6e6 #bfbfbf;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #e6e6e6;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  border: 1px solid #cccccc;
  *border: 0;
  border-bottom-color: #b3b3b3;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  *margin-left: 0.3em;
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2),
    0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn:hover,
.btn:active,
.btn.active,
.btn.disabled,
.btn[disabled] {
  background-color: #e6e6e6;
  *background-color: #d9d9d9;
}

.btn:active,
.btn.active {
  background-color: #cccccc \9;
}

.btn:first-child {
  *margin-left: 0;
}

.btn:hover {
  color: #333333;
  text-decoration: none;
  background-color: #e6e6e6;
  *background-color: #d9d9d9;
  background-position: 0 -15px;
  -webkit-transition: background-position 0.1s linear;
  -moz-transition: background-position 0.1s linear;
  -ms-transition: background-position 0.1s linear;
  -o-transition: background-position 0.1s linear;
  transition: background-position 0.1s linear;
}

.btn:focus {
  outline: thin dotted #333;
  outline: 5px auto -webkit-focus-ring-color;
  outline-offset: -2px;
}

.btn.active,
.btn:active {
  background-color: #e6e6e6;
  background-color: #d9d9d9 \9;
  background-image: none;
  outline: 0;
  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn.disabled,
.btn[disabled] {
  cursor: default;
  background-color: #e6e6e6;
  background-image: none;
  opacity: 0.65;
  filter: alpha(opacity=65);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.btn-large {
  padding: 9px 14px;
  font-size: 15px;
  line-height: normal;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.btn-large [class^="icon-"] {
  margin-top: 1px;
}

.btn-small {
  padding: 5px 9px;
  font-size: 11px;
  line-height: 16px;
}

.btn-small [class^="icon-"] {
  margin-top: -1px;
}

.btn-mini {
  padding: 2px 6px;
  font-size: 11px;
  line-height: 14px;
}

.btn-primary,
.btn-primary:hover,
.btn-warning,
.btn-warning:hover,
.btn-danger,
.btn-danger:hover,
.btn-success,
.btn-success:hover,
.btn-info,
.btn-info:hover,
.btn-inverse,
.btn-inverse:hover {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}

.btn-primary.active,
.btn-warning.active,
.btn-danger.active,
.btn-success.active,
.btn-info.active,
.btn-inverse.active {
  color: rgba(255, 255, 255, 0.75);
}

.btn {
  border-color: #ccc;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
}

.btn-primary {
  background-color: #0074cc;
  background-image: -moz-linear-gradient(to top, #08c, #05c);
  background-image: -ms-linear-gradient(to top, #08c, #05c);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#05c));
  background-image: -webkit-linear-gradient(to top, #08c, #05c);
  background-image: -o-linear-gradient(to top, #08c, #05c);
  background-image: linear-gradient(to top, #08c, #05c);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0055cc', GradientType=0);
  border-color: #0055cc #0055cc #003580;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #0055cc;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-primary:hover,
.btn-primary:active,
.btn-primary.active,
.btn-primary.disabled,
.btn-primary[disabled] {
  background-color: #0055cc;
  *background-color: #004ab3;
}

.btn-primary:active,
.btn-primary.active {
  background-color: #004099 \9;
}

.btn-warning {
  background-color: #ff875d;
  background-image: -moz-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -ms-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ff9e7c),
    to(#ff652f)
  );
  background-image: -webkit-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -o-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: linear-gradient(to top, #ff9e7c, #ff652f);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff9e7c', endColorstr='#ff652f', GradientType=0);
  border-color: #ff652f #ff652f #e23b00;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #ff652f;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-warning:hover,
.btn-warning:active,
.btn-warning.active,
.btn-warning.disabled,
.btn-warning[disabled] {
  background-color: #ff652f;
  *background-color: #ff5216;
}

.btn-warning:active,
.btn-warning.active {
  background-color: #fb4100 \9;
}

.btn-danger {
  background-color: #da4f49;
  background-image: -moz-linear-gradient(to top, #ee5f5b, #bd362f);
  background-image: -ms-linear-gradient(to top, #ee5f5b, #bd362f);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ee5f5b),
    to(#bd362f)
  );
  background-image: -webkit-linear-gradient(to top, #ee5f5b, #bd362f);
  background-image: -o-linear-gradient(to top, #ee5f5b, #bd362f);
  background-image: linear-gradient(to top, #ee5f5b, #bd362f);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#bd362f', GradientType=0);
  border-color: #bd362f #bd362f #802420;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #bd362f;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-danger:hover,
.btn-danger:active,
.btn-danger.active,
.btn-danger.disabled,
.btn-danger[disabled] {
  background-color: #bd362f;
  *background-color: #a9302a;
}

.btn-danger:active,
.btn-danger.active {
  background-color: #942a25 \9;
}

.btn-success {
  background-color: #5bb75b;
  background-image: -moz-linear-gradient(to top, #62c462, #51a351);
  background-image: -ms-linear-gradient(to top, #62c462, #51a351);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#62c462),
    to(#51a351)
  );
  background-image: -webkit-linear-gradient(to top, #62c462, #51a351);
  background-image: -o-linear-gradient(to top, #62c462, #51a351);
  background-image: linear-gradient(to top, #62c462, #51a351);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#62c462', endColorstr='#51a351', GradientType=0);
  border-color: #51a351 #51a351 #387038;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #51a351;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-success:hover,
.btn-success:active,
.btn-success.active,
.btn-success.disabled,
.btn-success[disabled] {
  background-color: #51a351;
  *background-color: #499249;
}

.btn-success:active,
.btn-success.active {
  background-color: #408140 \9;
}

.btn-info {
  background-color: #49afcd;
  background-image: -moz-linear-gradient(to top, #5bc0de, #2f96b4);
  background-image: -ms-linear-gradient(to top, #5bc0de, #2f96b4);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#5bc0de),
    to(#2f96b4)
  );
  background-image: -webkit-linear-gradient(to top, #5bc0de, #2f96b4);
  background-image: -o-linear-gradient(to top, #5bc0de, #2f96b4);
  background-image: linear-gradient(to top, #5bc0de, #2f96b4);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5bc0de', endColorstr='#2f96b4', GradientType=0);
  border-color: #2f96b4 #2f96b4 #1f6377;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #2f96b4;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-info:hover,
.btn-info:active,
.btn-info.active,
.btn-info.disabled,
.btn-info[disabled] {
  background-color: #2f96b4;
  *background-color: #2a85a0;
}

.btn-info:active,
.btn-info.active {
  background-color: #24748c \9;
}

.btn-inverse {
  background-color: #414141;
  background-image: -moz-linear-gradient(to top, #555, #222);
  background-image: -ms-linear-gradient(to top, #555, #222);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#555), to(#222));
  background-image: -webkit-linear-gradient(to top, #555, #222);
  background-image: -o-linear-gradient(to top, #555, #222);
  background-image: linear-gradient(to top, #555, #222);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#555555', endColorstr='#222222', GradientType=0);
  border-color: #222222 #222222 #000000;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #222222;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
}

.btn-inverse:hover,
.btn-inverse:active,
.btn-inverse.active,
.btn-inverse.disabled,
.btn-inverse[disabled] {
  background-color: #222222;
  *background-color: #151515;
}

.btn-inverse:active,
.btn-inverse.active {
  background-color: #080808 \9;
}

button.btn,
input.btn[type="submit"] {
  *padding-top: 2px;
  *padding-bottom: 2px;
}

button.btn::-moz-focus-inner,
input.btn[type="submit"]::-moz-focus-inner {
  padding: 0;
  border: 0;
}

button.btn.btn-large,
input.btn.btn-large[type="submit"] {
  *padding-top: 7px;
  *padding-bottom: 7px;
}

button.btn.btn-small,
input.btn.btn-small[type="submit"] {
  *padding-top: 3px;
  *padding-bottom: 3px;
}

button.btn.btn-mini,
input.btn.btn-mini[type="submit"] {
  *padding-top: 1px;
  *padding-bottom: 1px;
}

.btn-group {
  position: relative;
  *zoom: 1;
  *margin-left: 0.3em;
}

.btn-group:before,
.btn-group:after {
  display: table;
  content: "";
}

.btn-group:after {
  clear: both;
}

.btn-group:first-child {
  *margin-left: 0;
}

.btn-group + .btn-group {
  margin-left: 5px;
}

.btn-toolbar {
  margin-top: 9px;
  margin-bottom: 9px;
}

.btn-toolbar .btn-group {
  display: inline-block;
  *display: inline;
  *zoom: 1;
}

.btn-group > .btn {
  position: relative;
  float: left;
  margin-left: -1px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.btn-group > .btn:first-child {
  margin-left: 0;
  -webkit-border-top-left-radius: 4px;
  -moz-border-radius-topleft: 4px;
  border-top-left-radius: 4px;
  -webkit-border-bottom-left-radius: 4px;
  -moz-border-radius-bottomleft: 4px;
  border-bottom-left-radius: 4px;
}

.btn-group > .btn:last-child,
.btn-group > .dropdown-toggle {
  -webkit-border-top-right-radius: 4px;
  -moz-border-radius-topright: 4px;
  border-top-right-radius: 4px;
  -webkit-border-bottom-right-radius: 4px;
  -moz-border-radius-bottomright: 4px;
  border-bottom-right-radius: 4px;
}

.btn-group > .btn.large:first-child {
  margin-left: 0;
  -webkit-border-top-left-radius: 6px;
  -moz-border-radius-topleft: 6px;
  border-top-left-radius: 6px;
  -webkit-border-bottom-left-radius: 6px;
  -moz-border-radius-bottomleft: 6px;
  border-bottom-left-radius: 6px;
}

.btn-group > .btn.large:last-child,
.btn-group > .large.dropdown-toggle {
  -webkit-border-top-right-radius: 6px;
  -moz-border-radius-topright: 6px;
  border-top-right-radius: 6px;
  -webkit-border-bottom-right-radius: 6px;
  -moz-border-radius-bottomright: 6px;
  border-bottom-right-radius: 6px;
}

.btn-group > .btn:hover,
.btn-group > .btn:focus,
.btn-group > .btn:active,
.btn-group > .btn.active {
  z-index: 2;
}

.btn-group .dropdown-toggle:active,
.btn-group.open .dropdown-toggle {
  outline: 0;
}

.btn-group > .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
  -webkit-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125),
    inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125),
    inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 1px 0 0 rgba(255, 255, 255, 0.125),
    inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  *padding-top: 4px;
  *padding-bottom: 4px;
}

.btn-group > .btn-mini.dropdown-toggle {
  padding-left: 5px;
  padding-right: 5px;
}

.btn-group > .btn-small.dropdown-toggle {
  *padding-top: 4px;
  *padding-bottom: 4px;
}

.btn-group > .btn-large.dropdown-toggle {
  padding-left: 12px;
  padding-right: 12px;
}

.btn-group.open .dropdown-toggle {
  background-image: none;
  -webkit-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15),
    0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.15), 0 1px 2px rgba(0, 0, 0, 0.05);
}

.btn-group.open .btn.dropdown-toggle {
  background-color: #e6e6e6;
}

.btn-group.open .btn-primary.dropdown-toggle {
  background-color: #0055cc;
}

.btn-group.open .btn-warning.dropdown-toggle {
  background-color: #ff652f;
}

.btn-group.open .btn-danger.dropdown-toggle {
  background-color: #bd362f;
}

.btn-group.open .btn-success.dropdown-toggle {
  background-color: #51a351;
}

.btn-group.open .btn-info.dropdown-toggle {
  background-color: #2f96b4;
}

.btn-group.open .btn-inverse.dropdown-toggle {
  background-color: #222222;
}

.btn .caret {
  margin-top: 7px;
  margin-left: 0;
}

.btn:hover .caret,
.open.btn-group .caret {
  opacity: 1;
  filter: alpha(opacity=100);
}

.btn-mini .caret {
  margin-top: 5px;
}

.btn-small .caret {
  margin-top: 6px;
}

.btn-large .caret {
  margin-top: 6px;
  border-left-width: 5px;
  border-right-width: 5px;
  border-top-width: 5px;
}

.dropup .btn-large .caret {
  border-bottom: 5px solid #000000;
  border-top: 0;
}

.btn-primary .caret,
.btn-warning .caret,
.btn-danger .caret,
.btn-info .caret,
.btn-success .caret,
.btn-inverse .caret {
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
  opacity: 0.75;
  filter: alpha(opacity=75);
}

.alert {
  padding: 8px 35px 8px 14px;
  margin-bottom: 18px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  background-color: #fcf8e3;
  border: 1px solid #fbeed5;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #c09853;
}

.alert-heading {
  color: inherit;
}

.alert .close {
  position: relative;
  top: -2px;
  right: -21px;
  line-height: 18px;
}

.alert-success {
  background-color: #dff0d8;
  border-color: #d6e9c6;
  color: #468847;
}

.alert-danger,
.alert-error {
  background-color: #f2dede;
  border-color: #eed3d7;
  color: #b94a48;
}

.alert-info {
  background-color: #d9edf7;
  border-color: #bce8f1;
  color: #3a87ad;
}

.alert-block {
  padding-top: 14px;
  padding-bottom: 14px;
}

.alert-block > p,
.alert-block > ul {
  margin-bottom: 0;
}

.alert-block p + p {
  margin-top: 5px;
}

.nav {
  margin-left: 0;
  margin-bottom: 18px;
  list-style: none;
}

.nav > li > a {
  display: block;
}

.nav > li > a:hover {
  text-decoration: none;
  background-color: #eeeeee;
}

.nav > .pull-right {
  float: right;
}

.nav .nav-header {
  display: block;
  padding: 3px 15px;
  font-size: 11px;
  font-weight: bold;
  line-height: 18px;
  color: #999999;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
  text-transform: uppercase;
}

.nav li + .nav-header {
  margin-top: 9px;
}

.nav-list {
  padding-left: 15px;
  padding-right: 15px;
  margin-bottom: 0;
}

.nav-list > li > a,
.nav-list .nav-header {
  margin-left: -15px;
  margin-right: -15px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}

.nav-list > li > a {
  padding: 3px 15px;
}

.nav-list > .active > a,
.nav-list > .active > a:hover {
  color: #ffffff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.2);
  background-color: #0088cc;
}

.nav-list [class^="icon-"] {
  margin-right: 2px;
}

.nav-list .divider {
  *width: 100%;
  height: 1px;
  margin: 8px 1px;
  *margin: -5px 0 5px;
  overflow: hidden;
  background-color: #e5e5e5;
  border-bottom: 1px solid #ffffff;
}

.nav-tabs,
.nav-pills {
  *zoom: 1;
}

.nav-tabs:before,
.nav-pills:before,
.nav-tabs:after,
.nav-pills:after {
  display: table;
  content: "";
}

.nav-tabs:after,
.nav-pills:after {
  clear: both;
}

.nav-tabs > li,
.nav-pills > li {
  float: left;
}

.nav-tabs > li > a,
.nav-pills > li > a {
  padding-right: 12px;
  padding-left: 12px;
  margin-right: 2px;
  line-height: 14px;
}

.nav-tabs {
  border-bottom: 1px solid #ddd;
}

.nav-tabs > li {
  margin-bottom: -1px;
}

.nav-tabs > li > a {
  padding-top: 8px;
  padding-bottom: 8px;
  line-height: 18px;
  border: 1px solid transparent;
  -webkit-border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
}

.nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #dddddd;
}

.nav-tabs > .active > a,
.nav-tabs > .active > a:hover {
  color: #555555;
  background-color: #ffffff;
  border: 1px solid #ddd;
  border-bottom-color: transparent;
  cursor: default;
}

.nav-pills > li > a {
  padding-top: 8px;
  padding-bottom: 8px;
  margin-top: 2px;
  margin-bottom: 2px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

.nav-pills > .active > a,
.nav-pills > .active > a:hover {
  color: #ffffff;
  background-color: #0088cc;
}

.nav-stacked > li {
  float: none;
}

.nav-stacked > li > a {
  margin-right: 0;
}

.nav-tabs.nav-stacked {
  border-bottom: 0;
}

.nav-tabs.nav-stacked > li > a {
  border: 1px solid #ddd;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.nav-tabs.nav-stacked > li:first-child > a {
  -webkit-border-radius: 4px 4px 0 0;
  -moz-border-radius: 4px 4px 0 0;
  border-radius: 4px 4px 0 0;
}

.nav-tabs.nav-stacked > li:last-child > a {
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}

.nav-tabs.nav-stacked > li > a:hover {
  border-color: #ddd;
  z-index: 2;
}

.nav-pills.nav-stacked > li > a {
  margin-bottom: 3px;
}

.nav-pills.nav-stacked > li:last-child > a {
  margin-bottom: 1px;
}

.nav-tabs .dropdown-menu {
  -webkit-border-radius: 0 0 5px 5px;
  -moz-border-radius: 0 0 5px 5px;
  border-radius: 0 0 5px 5px;
}

.nav-pills .dropdown-menu {
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.nav-tabs .dropdown-toggle .caret,
.nav-pills .dropdown-toggle .caret {
  border-top-color: #0088cc;
  border-bottom-color: #0088cc;
  margin-top: 6px;
}

.nav-tabs .dropdown-toggle:hover .caret,
.nav-pills .dropdown-toggle:hover .caret {
  border-top-color: #005580;
  border-bottom-color: #005580;
}

.nav-tabs .active .dropdown-toggle .caret,
.nav-pills .active .dropdown-toggle .caret {
  border-top-color: #333333;
  border-bottom-color: #333333;
}

.nav > .dropdown.active > a:hover {
  color: #000000;
  cursor: pointer;
}

.nav-tabs .open .dropdown-toggle,
.nav-pills .open .dropdown-toggle,
.nav > li.dropdown.open.active > a:hover {
  color: #ffffff;
  background-color: #999999;
  border-color: #999999;
}

.nav li.dropdown.open .caret,
.nav li.dropdown.open.active .caret,
.nav li.dropdown.open a:hover .caret {
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
  opacity: 1;
  filter: alpha(opacity=100);
}

.tabs-stacked .open > a:hover {
  border-color: #999999;
}

.tabbable {
  *zoom: 1;
}

.tabbable:before,
.tabbable:after {
  display: table;
  content: "";
}

.tabbable:after {
  clear: both;
}

.tab-content {
  overflow: auto;
}

.tabs-below > .nav-tabs,
.tabs-right > .nav-tabs,
.tabs-left > .nav-tabs {
  border-bottom: 0;
}

.tab-content > .tab-pane,
.pill-content > .pill-pane {
  display: none;
}

.tab-content > .active,
.pill-content > .active {
  display: block;
}

.tabs-below > .nav-tabs {
  border-top: 1px solid #ddd;
}

.tabs-below > .nav-tabs > li {
  margin-top: -1px;
  margin-bottom: 0;
}

.tabs-below > .nav-tabs > li > a {
  -webkit-border-radius: 0 0 4px 4px;
  -moz-border-radius: 0 0 4px 4px;
  border-radius: 0 0 4px 4px;
}

.tabs-below > .nav-tabs > li > a:hover {
  border-bottom-color: transparent;
  border-top-color: #ddd;
}

.tabs-below > .nav-tabs > .active > a,
.tabs-below > .nav-tabs > .active > a:hover {
  border-color: transparent #ddd #ddd #ddd;
}

.tabs-left > .nav-tabs > li,
.tabs-right > .nav-tabs > li {
  float: none;
}

.tabs-left > .nav-tabs > li > a,
.tabs-right > .nav-tabs > li > a {
  min-width: 74px;
  margin-right: 0;
  margin-bottom: 3px;
}

.tabs-left > .nav-tabs {
  float: left;
  margin-right: 19px;
  border-right: 1px solid #ddd;
}

.tabs-left > .nav-tabs > li > a {
  margin-right: -1px;
  -webkit-border-radius: 4px 0 0 4px;
  -moz-border-radius: 4px 0 0 4px;
  border-radius: 4px 0 0 4px;
}

.tabs-left > .nav-tabs > li > a:hover {
  border-color: #eeeeee #dddddd #eeeeee #eeeeee;
}

.tabs-left > .nav-tabs .active > a,
.tabs-left > .nav-tabs .active > a:hover {
  border-color: #ddd transparent #ddd #ddd;
  *border-right-color: #ffffff;
}

.tabs-right > .nav-tabs {
  float: right;
  margin-left: 19px;
  border-left: 1px solid #ddd;
}

.tabs-right > .nav-tabs > li > a {
  margin-left: -1px;
  -webkit-border-radius: 0 4px 4px 0;
  -moz-border-radius: 0 4px 4px 0;
  border-radius: 0 4px 4px 0;
}

.tabs-right > .nav-tabs > li > a:hover {
  border-color: #eeeeee #eeeeee #eeeeee #dddddd;
}

.tabs-right > .nav-tabs .active > a,
.tabs-right > .nav-tabs .active > a:hover {
  border-color: #ddd #ddd #ddd transparent;
  *border-left-color: #ffffff;
}

.navbar {
  *position: relative;
  *z-index: 2;
  overflow: visible;
  margin-bottom: 18px;
}

.navbar-inner {
  min-height: 33px;
  padding-left: 20px;
  padding-right: 20px;
  background-color: #5bc5a7;
  background-image: -moz-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -ms-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#5bc5a7),
    to(#5bc5a7)
  );
  background-image: -webkit-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -o-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5bc5a7', endColorstr='#5bc5a7', GradientType=0);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25),
    inset 0 -1px 0 rgba(0, 0, 0, 0.1);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.25), inset 0 -1px 0 rgba(0, 0, 0, 0.1);
}

.navbar .container {
  width: auto;
}

.nav-collapse.collapse {
  height: auto;
}

.navbar {
  color: #ffffff;
}

.navbar .brand:hover {
  text-decoration: none;
}

.navbar .brand {
  float: left;
  display: block;
  padding: 4.5px 20px 8.5px;
  margin-left: -20px;
  font-size: 20px;
  font-weight: 200;
  line-height: 1;
  color: #ffffff;
}

.navbar .navbar-text {
  margin-bottom: 0;
  line-height: 33px;
}

.navbar .navbar-link {
  color: #ffffff;
}

.navbar .navbar-link:hover {
  color: #ffffff;
}

.navbar .btn,
.navbar .btn-group {
  margin-top: 1.5px;
}

.navbar .btn-group .btn {
  margin: 0;
}

.navbar-form {
  margin-bottom: 0;
  *zoom: 1;
}

.navbar-form:before,
.navbar-form:after {
  display: table;
  content: "";
}

.navbar-form:after {
  clear: both;
}

.navbar-form input,
.navbar-form select,
.navbar-form .radio,
.navbar-form .checkbox {
  margin-top: 1.5px;
}

.navbar-form input,
.navbar-form select {
  display: inline-block;
  margin-bottom: 0;
}

.navbar-form input[type="image"],
.navbar-form input[type="checkbox"],
.navbar-form input[type="radio"] {
  margin-top: 3px;
}

.navbar-form .input-append,
.navbar-form .input-prepend {
  margin-top: 6px;
  white-space: nowrap;
}

.navbar-form .input-append input,
.navbar-form .input-prepend input {
  margin-top: 0;
}

.navbar-search {
  position: relative;
  float: left;
  margin-top: 2.5px;
  margin-bottom: 0;
}

.navbar-search .search-query {
  padding: 4px 9px;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: normal;
  line-height: 1;
  color: #ffffff;
  background-color: #b9e6da;
  border: 1px solid #48be9d;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.15);
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.15);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.15);
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}

.navbar-search .search-query:-moz-placeholder {
  color: #cccccc;
}

.navbar-search .search-query:-ms-input-placeholder {
  color: #cccccc;
}

.navbar-search .search-query::-webkit-input-placeholder {
  color: #cccccc;
}

.navbar-search .search-query:focus,
.navbar-search .search-query.focused {
  padding: 5px 10px;
  color: #333333;
  text-shadow: 0 1px 0 #ffffff;
  background-color: #ffffff;
  border: 0;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.15);
  outline: 0;
}

.navbar-fixed-top,
.navbar-fixed-bottom {
  position: fixed;
  right: 0;
  left: 0;
  z-index: 1030;
  margin-bottom: 0;
}

.navbar-fixed-top .navbar-inner,
.navbar-fixed-bottom .navbar-inner {
  padding-left: 0;
  padding-right: 0;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
}

.navbar-fixed-top .container,
.navbar-fixed-bottom .container {
  width: 940px;
}

.navbar-fixed-top {
  top: 0;
}

.navbar-fixed-bottom {
  bottom: 0;
}

.navbar .nav {
  position: relative;
  left: 0;
  display: block;
  float: left;
  margin: 0 10px 0 0;
}

.navbar .nav.pull-right {
  float: right;
}

.navbar .nav > li {
  display: block;
  float: left;
}

.navbar .nav > li > a {
  float: none;
  padding: 5.5px 10px 7.5px;
  line-height: 19px;
  color: #ffffff;
  text-decoration: none;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}

.navbar .btn {
  display: inline-block;
  padding: 4px 10px 4px;
  margin: 1.5px 5px 2.5px;
  line-height: 18px;
}

.navbar .btn-group {
  margin: 0;
  padding: 1.5px 5px 2.5px;
}

.navbar .nav > li > a:hover {
  background-color: #48be9d;
  color: #ffffff;
  text-decoration: none;
}

.navbar .nav .active > a,
.navbar .nav .active > a:hover {
  color: #ffffff;
  text-decoration: none;
  background-color: #3eaf8f;
}

.navbar .divider-vertical {
  height: 33px;
  width: 1px;
  margin: 0 9px;
  overflow: hidden;
  background-color: #5bc5a7;
  border-right: 1px solid #5bc5a7;
}

.navbar .nav.pull-right {
  margin-left: 10px;
  margin-right: 0;
}

.navbar .btn-navbar {
  display: none;
  float: right;
  padding: 7px 10px;
  margin-left: 5px;
  margin-right: 5px;
  background-color: #5bc5a7;
  background-image: -moz-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -ms-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#5bc5a7),
    to(#5bc5a7)
  );
  background-image: -webkit-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: -o-linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-image: linear-gradient(to top, #5bc5a7, #5bc5a7);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5bc5a7', endColorstr='#5bc5a7', GradientType=0);
  border-color: #5bc5a7 #5bc5a7 #379c80;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #5bc5a7;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  -webkit-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.075);
  -moz-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.075);
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.1),
    0 1px 0 rgba(255, 255, 255, 0.075);
}

.navbar .btn-navbar:hover,
.navbar .btn-navbar:active,
.navbar .btn-navbar.active,
.navbar .btn-navbar.disabled,
.navbar .btn-navbar[disabled] {
  background-color: #5bc5a7;
  *background-color: #48be9d;
}

.navbar .btn-navbar:active,
.navbar .btn-navbar.active {
  background-color: #3eaf8f \9;
}

.navbar .btn-navbar .icon-bar {
  display: block;
  width: 18px;
  height: 2px;
  background-color: #f5f5f5;
  -webkit-border-radius: 1px;
  -moz-border-radius: 1px;
  border-radius: 1px;
  -webkit-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  box-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
}

.btn-navbar .icon-bar + .icon-bar {
  margin-top: 3px;
}

.navbar .dropdown-menu:before {
  content: "";
  display: inline-block;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -7px;
  left: 9px;
}

.navbar .dropdown-menu:after {
  content: "";
  display: inline-block;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  position: absolute;
  top: -6px;
  left: 10px;
}

.navbar-fixed-bottom .dropdown-menu:before {
  border-top: 7px solid #ccc;
  border-top-color: rgba(0, 0, 0, 0.2);
  border-bottom: 0;
  bottom: -7px;
  top: auto;
}

.navbar-fixed-bottom .dropdown-menu:after {
  border-top: 6px solid #ffffff;
  border-bottom: 0;
  bottom: -6px;
  top: auto;
}

.navbar .nav li.dropdown .dropdown-toggle .caret,
.navbar .nav li.dropdown.open .caret {
  border-top-color: #ffffff;
  border-bottom-color: #ffffff;
}

.navbar .nav li.dropdown.active .caret {
  opacity: 1;
  filter: alpha(opacity=100);
}

.navbar .nav li.dropdown.open > .dropdown-toggle,
.navbar .nav li.dropdown.active > .dropdown-toggle,
.navbar .nav li.dropdown.open.active > .dropdown-toggle {
  background-color: transparent;
}

.navbar .nav li.dropdown.active > .dropdown-toggle:hover {
  color: #ffffff;
}

.navbar .pull-right .dropdown-menu,
.navbar .dropdown-menu.pull-right {
  left: auto;
  right: 0;
}

.navbar .pull-right .dropdown-menu:before,
.navbar .dropdown-menu.pull-right:before {
  left: auto;
  right: 12px;
}

.navbar .pull-right .dropdown-menu:after,
.navbar .dropdown-menu.pull-right:after {
  left: auto;
  right: 13px;
}

.breadcrumb {
  padding: 7px 14px;
  margin: 0 0 18px;
  list-style: none;
  background-color: #fbfbfb;
  background-image: -moz-linear-gradient(to top, #fff, #f5f5f5);
  background-image: -ms-linear-gradient(to top, #fff, #f5f5f5);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#fff),
    to(#f5f5f5)
  );
  background-image: -webkit-linear-gradient(to top, #fff, #f5f5f5);
  background-image: -o-linear-gradient(to top, #fff, #f5f5f5);
  background-image: linear-gradient(to top, #fff, #f5f5f5);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ffffff', endColorstr='#f5f5f5', GradientType=0);
  border: 1px solid #ddd;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: inset 0 1px 0 #ffffff;
  -moz-box-shadow: inset 0 1px 0 #ffffff;
  box-shadow: inset 0 1px 0 #ffffff;
}

.breadcrumb li {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  text-shadow: 0 1px 0 #ffffff;
}

.breadcrumb .divider {
  padding: 0 5px;
  color: #999999;
}

.breadcrumb .active a {
  color: #333333;
}

.pagination {
  height: 36px;
  margin: 18px 0;
}

.pagination ul {
  display: inline-block;
  *display: inline;
  *zoom: 1;
  margin-left: 0;
  margin-bottom: 0;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.pagination li {
  display: inline;
}

.pagination a {
  float: left;
  padding: 0 14px;
  line-height: 34px;
  text-decoration: none;
  border: 1px solid #ddd;
  border-left-width: 0;
}

.pagination a:hover,
.pagination .active a {
  background-color: #f5f5f5;
}

.pagination .active a {
  color: #999999;
  cursor: default;
}

.pagination .disabled span,
.pagination .disabled a,
.pagination .disabled a:hover {
  color: #999999;
  background-color: transparent;
  cursor: default;
}

.pagination li:first-child a {
  border-left-width: 1px;
  -webkit-border-radius: 3px 0 0 3px;
  -moz-border-radius: 3px 0 0 3px;
  border-radius: 3px 0 0 3px;
}

.pagination li:last-child a {
  -webkit-border-radius: 0 3px 3px 0;
  -moz-border-radius: 0 3px 3px 0;
  border-radius: 0 3px 3px 0;
}

.pagination-centered {
  text-align: center;
}

.pagination-right {
  text-align: right;
}

.pager {
  margin-left: 0;
  margin-bottom: 18px;
  list-style: none;
  text-align: center;
  *zoom: 1;
}

.pager:before,
.pager:after {
  display: table;
  content: "";
}

.pager:after {
  clear: both;
}

.pager li {
  display: inline;
}

.pager a {
  display: inline-block;
  padding: 5px 14px;
  background-color: #fff;
  border: 1px solid #ddd;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}

.pager a:hover {
  text-decoration: none;
  background-color: #f5f5f5;
}

.pager .next a {
  float: right;
}

.pager .previous a {
  float: left;
}

.pager .disabled a,
.pager .disabled a:hover {
  color: #999999;
  background-color: #fff;
  cursor: default;
}

.modal-open .dropdown-menu {
  z-index: 2050;
}

.modal-open .dropdown.open {
  *z-index: 2050;
}

.modal-open .popover {
  z-index: 2060;
}

.modal-open .tooltip {
  z-index: 2070;
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000000;
}

.modal-backdrop.fade {
  opacity: 0;
}

.modal-backdrop,
.modal-backdrop.fade.in {
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.modal {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1050;
  overflow: auto;
  width: 560px;
  margin: -250px 0 0 -280px;
  background-color: #ffffff;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, 0.3);
  *border: 1px solid #999;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
}

.modal.fade {
  -webkit-transition: opacity 0.3s linear, top 0.3s ease-out;
  -moz-transition: opacity 0.3s linear, top 0.3s ease-out;
  -ms-transition: opacity 0.3s linear, top 0.3s ease-out;
  -o-transition: opacity 0.3s linear, top 0.3s ease-out;
  transition: opacity 0.3s linear, top 0.3s ease-out;
  top: -25%;
}

.modal.fade.in {
  top: 50%;
}

.modal-header {
  padding: 9px 15px;
  border-bottom: 1px solid #eee;
}

.modal-header .close {
  margin-top: 2px;
}

.modal-body {
  overflow-y: auto;
  max-height: 400px;
  padding: 15px;
}

.modal-form {
  margin-bottom: 0;
}

.modal-footer {
  padding: 14px 15px 15px;
  margin-bottom: 0;
  text-align: right;
  background-color: #f5f5f5;
  border-top: 1px solid #ddd;
  -webkit-border-radius: 0 0 6px 6px;
  -moz-border-radius: 0 0 6px 6px;
  border-radius: 0 0 6px 6px;
  -webkit-box-shadow: inset 0 1px 0 #ffffff;
  -moz-box-shadow: inset 0 1px 0 #ffffff;
  box-shadow: inset 0 1px 0 #ffffff;
  *zoom: 1;
}

.modal-footer:before,
.modal-footer:after {
  display: table;
  content: "";
}

.modal-footer:after {
  clear: both;
}

.modal-footer .btn + .btn {
  margin-left: 5px;
  margin-bottom: 0;
}

.modal-footer .btn-group .btn + .btn {
  margin-left: -1px;
}

.tooltip {
  position: absolute;
  z-index: 1020;
  display: block;
  visibility: visible;
  padding: 5px;
  font-size: 11px;
  opacity: 0;
  filter: alpha(opacity=0);
}

.tooltip.in {
  opacity: 0.8;
  filter: alpha(opacity=80);
}

.tooltip.top {
  margin-top: -2px;
}

.tooltip.right {
  margin-left: 2px;
}

.tooltip.bottom {
  margin-top: 2px;
}

.tooltip.left {
  margin-left: -2px;
}

.tooltip.top .tooltip-arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000000;
}

.tooltip.left .tooltip-arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #000000;
}

.tooltip.bottom .tooltip-arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #000000;
}

.tooltip.right .tooltip-arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #000000;
}

.tooltip-inner {
  max-width: 200px;
  padding: 3px 8px;
  color: #ffffff;
  text-align: center;
  text-decoration: none;
  background-color: #000000;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.tooltip-arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.popover {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1010;
  display: none;
  padding: 5px;
}

.popover.top {
  margin-top: -5px;
}

.popover.right {
  margin-left: 5px;
}

.popover.bottom {
  margin-top: 5px;
}

.popover.left {
  margin-left: -5px;
}

.popover.top .arrow {
  bottom: 0;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-top: 5px solid #000000;
}

.popover.right .arrow {
  top: 50%;
  left: 0;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-right: 5px solid #000000;
}

.popover.bottom .arrow {
  top: 0;
  left: 50%;
  margin-left: -5px;
  border-left: 5px solid transparent;
  border-right: 5px solid transparent;
  border-bottom: 5px solid #000000;
}

.popover.left .arrow {
  top: 50%;
  right: 0;
  margin-top: -5px;
  border-top: 5px solid transparent;
  border-bottom: 5px solid transparent;
  border-left: 5px solid #000000;
}

.popover .arrow {
  position: absolute;
  width: 0;
  height: 0;
}

.popover-inner {
  padding: 3px;
  width: 280px;
  overflow: hidden;
  background: #000000;
  background: rgba(0, 0, 0, 0.8);
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
  box-shadow: 0 3px 7px rgba(0, 0, 0, 0.3);
}

.popover-title {
  padding: 9px 15px;
  line-height: 1;
  background-color: #f5f5f5;
  border-bottom: 1px solid #eee;
  -webkit-border-radius: 3px 3px 0 0;
  -moz-border-radius: 3px 3px 0 0;
  border-radius: 3px 3px 0 0;
}

.popover-content {
  padding: 14px;
  background-color: #ffffff;
  -webkit-border-radius: 0 0 3px 3px;
  -moz-border-radius: 0 0 3px 3px;
  border-radius: 0 0 3px 3px;
  -webkit-background-clip: padding-box;
  -moz-background-clip: padding-box;
  background-clip: padding-box;
}

.popover-content p,
.popover-content ul,
.popover-content ol {
  margin-bottom: 0;
}

.thumbnails {
  margin-left: -20px;
  list-style: none;
  *zoom: 1;
}

.thumbnails:before,
.thumbnails:after {
  display: table;
  content: "";
}

.thumbnails:after {
  clear: both;
}

.row-fluid .thumbnails {
  margin-left: 0;
}

.thumbnails > li {
  float: left;
  margin-bottom: 18px;
  margin-left: 20px;
}

.thumbnail {
  display: block;
  padding: 4px;
  line-height: 1;
  border: 1px solid #ddd;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  -webkit-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  -moz-box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.075);
}

a.thumbnail:hover {
  border-color: #0088cc;
  -webkit-box-shadow: 0 1px 4px rgba(0, 105, 214, 0.25);
  -moz-box-shadow: 0 1px 4px rgba(0, 105, 214, 0.25);
  box-shadow: 0 1px 4px rgba(0, 105, 214, 0.25);
}

.thumbnail > img {
  display: block;
  max-width: 100%;
  margin-left: auto;
  margin-right: auto;
}

.thumbnail .caption {
  padding: 9px;
}

.label,
.badge {
  font-size: 10.998px;
  font-weight: bold;
  line-height: 14px;
  color: #ffffff;
  vertical-align: baseline;
  white-space: nowrap;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #999999;
}

.label {
  padding: 1px 4px 2px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.badge {
  padding: 1px 9px 2px;
  -webkit-border-radius: 9px;
  -moz-border-radius: 9px;
  border-radius: 9px;
}

a.label:hover,
a.badge:hover {
  color: #ffffff;
  text-decoration: none;
  cursor: pointer;
}

.label-important,
.badge-important {
  background-color: #b94a48;
}

.label-important[href],
.badge-important[href] {
  background-color: #953b39;
}

.label-warning,
.badge-warning {
  background-color: #ff652f;
}

.label-warning[href],
.badge-warning[href] {
  background-color: #fb4100;
}

.label-success,
.badge-success {
  background-color: #468847;
}

.label-success[href],
.badge-success[href] {
  background-color: #356635;
}

.label-info,
.badge-info {
  background-color: #3a87ad;
}

.label-info[href],
.badge-info[href] {
  background-color: #2d6987;
}

.label-inverse,
.badge-inverse {
  background-color: #333333;
}

.label-inverse[href],
.badge-inverse[href] {
  background-color: #1a1a1a;
}

@-webkit-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

@-moz-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

@-ms-keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

@-o-keyframes progress-bar-stripes {
  from {
    background-position: 0 0;
  }

  to {
    background-position: 40px 0;
  }
}

@keyframes progress-bar-stripes {
  from {
    background-position: 40px 0;
  }

  to {
    background-position: 0 0;
  }
}

.progress {
  overflow: hidden;
  height: 18px;
  margin-bottom: 18px;
  background-color: #f7f7f7;
  background-image: -moz-linear-gradient(to top, #f5f5f5, #f9f9f9);
  background-image: -ms-linear-gradient(to top, #f5f5f5, #f9f9f9);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#f5f5f5),
    to(#f9f9f9)
  );
  background-image: -webkit-linear-gradient(to top, #f5f5f5, #f9f9f9);
  background-image: -o-linear-gradient(to top, #f5f5f5, #f9f9f9);
  background-image: linear-gradient(to top, #f5f5f5, #f9f9f9);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#f5f5f5', endColorstr='#f9f9f9', GradientType=0);
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.progress .bar {
  width: 0%;
  height: 18px;
  color: #ffffff;
  font-size: 12px;
  text-align: center;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
  background-color: #0e90d2;
  background-image: -moz-linear-gradient(to top, #149bdf, #0480be);
  background-image: -ms-linear-gradient(to top, #149bdf, #0480be);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#149bdf),
    to(#0480be)
  );
  background-image: -webkit-linear-gradient(to top, #149bdf, #0480be);
  background-image: -o-linear-gradient(to top, #149bdf, #0480be);
  background-image: linear-gradient(to top, #149bdf, #0480be);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#149bdf', endColorstr='#0480be', GradientType=0);
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -moz-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: width 0.6s ease;
  -moz-transition: width 0.6s ease;
  -ms-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
}

.progress-striped .bar {
  background-color: #149bdf;
  background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, rgba(255, 255, 255, 0.15)),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  -moz-background-size: 40px 40px;
  -o-background-size: 40px 40px;
  background-size: 40px 40px;
}

.progress.active .bar {
  -webkit-animation: progress-bar-stripes 2s linear infinite;
  -moz-animation: progress-bar-stripes 2s linear infinite;
  -ms-animation: progress-bar-stripes 2s linear infinite;
  -o-animation: progress-bar-stripes 2s linear infinite;
  animation: progress-bar-stripes 2s linear infinite;
}

.progress-danger .bar {
  background-color: #dd514c;
  background-image: -moz-linear-gradient(to top, #ee5f5b, #c43c35);
  background-image: -ms-linear-gradient(to top, #ee5f5b, #c43c35);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ee5f5b),
    to(#c43c35)
  );
  background-image: -webkit-linear-gradient(to top, #ee5f5b, #c43c35);
  background-image: -o-linear-gradient(to top, #ee5f5b, #c43c35);
  background-image: linear-gradient(to top, #ee5f5b, #c43c35);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ee5f5b', endColorstr='#c43c35', GradientType=0);
}

.progress-danger.progress-striped .bar {
  background-color: #ee5f5b;
  background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, rgba(255, 255, 255, 0.15)),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-success .bar {
  background-color: #5eb95e;
  background-image: -moz-linear-gradient(to top, #62c462, #57a957);
  background-image: -ms-linear-gradient(to top, #62c462, #57a957);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#62c462),
    to(#57a957)
  );
  background-image: -webkit-linear-gradient(to top, #62c462, #57a957);
  background-image: -o-linear-gradient(to top, #62c462, #57a957);
  background-image: linear-gradient(to top, #62c462, #57a957);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#62c462', endColorstr='#57a957', GradientType=0);
}

.progress-success.progress-striped .bar {
  background-color: #62c462;
  background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, rgba(255, 255, 255, 0.15)),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-info .bar {
  background-color: #4bb1cf;
  background-image: -moz-linear-gradient(to top, #5bc0de, #339bb9);
  background-image: -ms-linear-gradient(to top, #5bc0de, #339bb9);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#5bc0de),
    to(#339bb9)
  );
  background-image: -webkit-linear-gradient(to top, #5bc0de, #339bb9);
  background-image: -o-linear-gradient(to top, #5bc0de, #339bb9);
  background-image: linear-gradient(to top, #5bc0de, #339bb9);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#5bc0de', endColorstr='#339bb9', GradientType=0);
}

.progress-info.progress-striped .bar {
  background-color: #5bc0de;
  background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, rgba(255, 255, 255, 0.15)),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.progress-warning .bar {
  background-color: #ff875d;
  background-image: -moz-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -ms-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -webkit-gradient(
    linear,
    0 0,
    0 100%,
    from(#ff9e7c),
    to(#ff652f)
  );
  background-image: -webkit-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: -o-linear-gradient(to top, #ff9e7c, #ff652f);
  background-image: linear-gradient(to top, #ff9e7c, #ff652f);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#ff9e7c', endColorstr='#ff652f', GradientType=0);
}

.progress-warning.progress-striped .bar {
  background-color: #ff9e7c;
  background-image: -webkit-gradient(
    linear,
    0 100%,
    100% 0,
    color-stop(0.25, rgba(255, 255, 255, 0.15)),
    color-stop(0.25, transparent),
    color-stop(0.5, transparent),
    color-stop(0.5, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, rgba(255, 255, 255, 0.15)),
    color-stop(0.75, transparent),
    to(transparent)
  );
  background-image: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -ms-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    -45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
}

.accordion {
  margin-bottom: 18px;
}

.accordion-group {
  margin-bottom: 2px;
  border: 1px solid #e5e5e5;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.accordion-heading {
  border-bottom: 0;
}

.accordion-heading .accordion-toggle {
  display: block;
  padding: 8px 15px;
}

.accordion-toggle {
  cursor: pointer;
}

.accordion-inner {
  padding: 9px 15px;
  border-top: 1px solid #e5e5e5;
}

.carousel {
  position: relative;
  margin-bottom: 18px;
  line-height: 1;
}

.carousel-inner {
  overflow: hidden;
  width: 100%;
  position: relative;
}

.carousel .item {
  display: none;
  position: relative;
  -webkit-transition: 0.6s ease-in-out left;
  -moz-transition: 0.6s ease-in-out left;
  -ms-transition: 0.6s ease-in-out left;
  -o-transition: 0.6s ease-in-out left;
  transition: 0.6s ease-in-out left;
}

.carousel .item > img {
  display: block;
  line-height: 1;
}

.carousel .active,
.carousel .next,
.carousel .prev {
  display: block;
}

.carousel .active {
  left: 0;
}

.carousel .next,
.carousel .prev {
  position: absolute;
  top: 0;
  width: 100%;
}

.carousel .next {
  left: 100%;
}

.carousel .prev {
  left: -100%;
}

.carousel .next.left,
.carousel .prev.right {
  left: 0;
}

.carousel .active.left {
  left: -100%;
}

.carousel .active.right {
  left: 100%;
}

.carousel-control {
  position: absolute;
  top: 40%;
  left: 15px;
  width: 40px;
  height: 40px;
  margin-top: -20px;
  font-size: 60px;
  font-weight: 100;
  line-height: 30px;
  color: #ffffff;
  text-align: center;
  background: #222222;
  border: 3px solid #ffffff;
  -webkit-border-radius: 23px;
  -moz-border-radius: 23px;
  border-radius: 23px;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.carousel-control.right {
  left: auto;
  right: 15px;
}

.carousel-control:hover {
  color: #ffffff;
  text-decoration: none;
  opacity: 0.9;
  filter: alpha(opacity=90);
}

.carousel-caption {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 10px 15px 5px;
  background: #333333;
  background: rgba(0, 0, 0, 0.75);
}

.carousel-caption h4,
.carousel-caption p {
  color: #ffffff;
}

.hero-unit {
  padding: 60px;
  margin-bottom: 30px;
  background-color: #eeeeee;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
}

.hero-unit h1 {
  margin-bottom: 0;
  font-size: 60px;
  line-height: 1;
  color: inherit;
  letter-spacing: -1px;
}

.hero-unit p {
  font-size: 18px;
  font-weight: 200;
  line-height: 27px;
  color: inherit;
}

.pull-right {
  float: right;
}

.pull-left {
  float: left;
}

.hide {
  display: none;
}

.show {
  display: block;
}

.invisible {
  visibility: hidden;
}

/*!
 * Datepicker for Bootstrap
 *
 * Copyright 2012 Stefan Petre
 * Licensed under the Apache License v2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 */
.datepicker {
  top: 0;
  left: 0;
  padding: 4px;
  margin-top: 1px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  z-index: 999999;
}

.datepicker:before {
  content: "";
  display: inline-block;
  border-left: 7px solid transparent;
  border-right: 7px solid transparent;
  border-bottom: 7px solid #ccc;
  border-bottom-color: rgba(0, 0, 0, 0.2);
  position: absolute;
  top: -7px;
  left: 6px;
}

.datepicker:after {
  content: "";
  display: inline-block;
  border-left: 6px solid transparent;
  border-right: 6px solid transparent;
  border-bottom: 6px solid #ffffff;
  position: absolute;
  top: -6px;
  left: 7px;
}

.datepicker > div {
  display: none;
}

.datepicker.days div.datepicker-days {
  display: block;
}

.datepicker.months div.datepicker-months {
  display: block;
}

.datepicker.years div.datepicker-years {
  display: block;
}

.datepicker table {
  width: 100%;
  margin: 0;
}

.datepicker td,
.datepicker th {
  text-align: center;
  width: 20px;
  height: 20px;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.datepicker td.day:hover {
  background: #eeeeee;
  cursor: pointer;
}

.datepicker td.old,
.datepicker td.new {
  color: #999999;
}

.datepicker td.active,
.datepicker td.active:hover {
  background-color: #006dcc;
  background-image: -moz-linear-gradient(to top, #08c, #04c);
  background-image: -ms-linear-gradient(to top, #08c, #04c);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#04c));
  background-image: -webkit-linear-gradient(to top, #08c, #04c);
  background-image: -o-linear-gradient(to top, #08c, #04c);
  background-image: linear-gradient(to top, #08c, #04c);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);
  border-color: #0044cc #0044cc #002a80;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #0044cc;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}

.datepicker td.active:hover,
.datepicker td.active:hover:hover,
.datepicker td.active:active,
.datepicker td.active:hover:active,
.datepicker td.active.active,
.datepicker td.active.active:hover,
.datepicker td.active.disabled,
.datepicker td.active.disabled:hover,
.datepicker td.active[disabled],
.datepicker td.active[disabled]:hover {
  background-color: #0044cc;
  *background-color: #003bb3;
}

.datepicker td.active:active,
.datepicker td.active:hover:active,
.datepicker td.active.active,
.datepicker td.active.active:hover {
  background-color: #003399 \9;
}

.datepicker td span {
  display: block;
  width: 47px;
  height: 54px;
  line-height: 54px;
  float: left;
  margin: 2px;
  cursor: pointer;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
}

.datepicker td span:hover {
  background: #eeeeee;
}

.datepicker td span.active {
  background-color: #006dcc;
  background-image: -moz-linear-gradient(to top, #08c, #04c);
  background-image: -ms-linear-gradient(to top, #08c, #04c);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#08c), to(#04c));
  background-image: -webkit-linear-gradient(to top, #08c, #04c);
  background-image: -o-linear-gradient(to top, #08c, #04c);
  background-image: linear-gradient(to top, #08c, #04c);
  background-repeat: repeat-x;
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#0088cc', endColorstr='#0044cc', GradientType=0);
  border-color: #0044cc #0044cc #002a80;
  border-color: rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.1) rgba(0, 0, 0, 0.25);
  *background-color: #0044cc;
  filter: progid:DXImageTransform.Microsoft.gradient(enabled=false);
  color: #fff;
  text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);
}

.datepicker td span.active:hover,
.datepicker td span.active:active,
.datepicker td span.active.active,
.datepicker td span.active.disabled,
.datepicker td span.active[disabled] {
  background-color: #0044cc;
  *background-color: #003bb3;
}

.datepicker td span.active:active,
.datepicker td span.active.active {
  background-color: #003399 \9;
}

.datepicker td span.old {
  color: #999999;
}

.datepicker th.switch {
  width: 145px;
}

.datepicker thead tr:first-child th {
  cursor: pointer;
}

.datepicker thead tr:first-child th:hover {
  background: #eeeeee;
}

.input-append.date .add-on i,
.input-prepend.date .add-on i {
  display: block;
  cursor: pointer;
  width: 16px;
  height: 16px;
}

fieldset.token-input-mac {
  position: relative;
  padding: 0;
  margin: 5px 0;
  background: #fef;
  width: 400px;
  border: 1px solid #a4bdec;
  border-radius: 10px;
  -moz-border-radius: 10px;
  -webkit-border-radius: 10px;
}

fieldset.token-input-mac.token-input-dropdown-mac {
  border-radius: 10px 10px 0 0;
  -moz-border-radius: 10px 10px 0 0;
  -webkit-border-radius: 10px 10px 0 0;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  -moz-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
  -webkit-box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.25);
}

ul.token-input-list-mac {
  overflow: hidden;
  height: auto !important;
  height: 1%;
  cursor: text;
  font-size: 12px;
  min-height: 1px;
  z-index: 999999;
  margin: 0;
  padding: 3px;
  background: transparent;
}

ul.token-input-list-mac.error {
  border: 1px solid #c52020;
}

ul.token-input-list-mac li {
  list-style-type: none;
  white-space: nowrap;
  overflow: visible;
  padding-right: 6px;
}

li.token-input-token-mac p {
  display: inline;
  display: inline-block;
  padding: 0;
  margin: 0;
}

li.token-input-token-mac img {
  height: 18px;
  width: 18px;
  margin-right: 4px;
  margin-left: -9px;
  margin-top: -1px;
  border: 1px solid #999;
  float: left;
  background: #fff;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
}

li.token-input-token-mac span {
  color: #aaa;
  margin-left: 5px;
  font-weight: bold;
  cursor: pointer;
}

li.token-input-token-mac {
  font-size: 14px;
  line-height: 18px;
  overflow: hidden;
  height: 18px;
  margin: 3px;
  padding: 0 8px;
  background: none;
  background-color: #f6f6f6;
  color: #000;
  cursor: default;
  border: 1px solid #bbb;
  border-radius: 15px;
  -moz-border-radius: 15px;
  -webkit-border-radius: 15px;
  float: left;
}

li.token-input-highlighted-token-mac {
  background-color: #eee;
  border: 1px solid #aaa;
  color: #000;
}

li.token-input-selected-token-mac {
  background-color: #555;
  border: 1px solid transparent;
  color: #fff;
}

li.token-input-token-mac span.token-input-delete-token-mac {
  padding-right: 3px;
}

li.token-input-highlighted-token-mac span.token-input-delete-token-mac {
  color: #000;
}

li.token-input-selected-token-mac span.token-input-delete-token-mac {
  color: #fff;
}

li.token-input-input-token-mac {
  border: none;
  background: transparent;
  float: left;
  padding: 0;
  margin: 0;
}

li.token-input-input-token-mac input {
  border: 0;
  min-width: 10px;
  font-size: 14px;
  width: 100px;
  padding: 5px 3px 3px;
  background-color: transparent;
  margin: 0;
  outline: none !important;
  box-shadow: none !important;
  -webkit-box-shadow: none !important;
  border: none !important;
}

div.token-input-dropdown-mac {
  position: fixed;
  border: none;
  left: -1px;
  right: -1px;
  background: #fff;
  background: rgba(255, 255, 255, 0.93);
  border: 1px solid #999;
  border-top-color: #bbb;
  border-bottom-color: #bbb;
  overflow: hidden;
  cursor: default;
  font-size: 10pt;
  padding: 0px;
  clip: rect(0px, 1000px, 1000px, -10px);
  z-index: 9991;
}

div.token-input-dropdown-mac p {
  font-size: 13px;
  margin: 0;
  padding: 5px 10px;
  color: #999;
}

div.token-input-dropdown-mac h3.token-input-dropdown-category-mac {
  font-size: 10pt;
  font-weight: bold;
  border: none;
  padding: 0 5px;
  margin: 0;
}

div.token-input-dropdown-mac ul {
  margin: 0;
  padding: 0;
}

div.token-input-dropdown-mac ul li {
  list-style-type: none;
  cursor: pointer;
  background: #fff;
  margin: 0;
  padding: 0 0 0 0;
}

div.token-input-dropdown-mac ul li p {
  color: #000;
}

div.token-input-dropdown-mac ul li img {
  width: 26px;
  height: 26px;
  border: 1px solid #ccc;
  margin-right: 5px;
  -webkit-border-radius: 14px;
  -moz-border-radius: 14px;
  border-radius: 14px;
}

div.token-input-dropdown-mac
  ul
  li.token-input-dropdown-item-mac
  span.token-input-dropdown-item-description-mac {
  float: right;
  font-size: 14pt;
  padding: 0 10px 0 0;
  color: #000;
}

div.token-input-dropdown-mac ul li strong {
  font-weight: bold;
  text-decoration: underline;
  font-style: none;
}

div.token-input-dropdown-mac ul li.token-input-selected-dropdown-item-mac,
div.token-input-dropdown-mac ul li.token-input-selected-dropdown-item-mac.odd {
  background-color: #eee;
  color: #000;
}

div.token-input-dropdown-mac
  ul
  li.token-input-selected-dropdown-item-mac
  span.token-input-dropdown-item-description-mac,
div.token-input-dropdown-mac
  ul
  li.token-input-selected-dropdown-item-mac.odd
  span.token-input-dropdown-item-description-mac {
  color: #fff;
}

.switchery {
  background-color: #fff;
  border: 1px solid #dfdfdf;
  border-radius: 20px;
  cursor: pointer;
  display: inline-block;
  height: 30px;
  position: relative;
  vertical-align: middle;
  width: 50px;
}

.switchery > small {
  background: #fff;
  border-radius: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.4);
  height: 30px;
  position: absolute;
  top: 0;
  width: 30px;
}

.ui-helper-hidden {
  display: none;
}

.ui-helper-hidden-accessible {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.ui-helper-reset {
  margin: 0;
  padding: 0;
  border: 0;
  outline: 0;
  line-height: 1.3;
  text-decoration: none;
  font-size: 100%;
  list-style: none;
}

.ui-helper-clearfix:before,
.ui-helper-clearfix:after {
  content: "";
  display: table;
  border-collapse: collapse;
}

.ui-helper-clearfix:after {
  clear: both;
}

.ui-helper-clearfix {
  min-height: 0;
}

.ui-helper-zfix {
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  opacity: 0;
  filter: alpha(opacity=0);
}

.ui-front {
  z-index: 100;
}

.ui-state-disabled {
  cursor: default !important;
}

.ui-icon {
  display: block;
  text-indent: -99999px;
  overflow: hidden;
  background-repeat: no-repeat;
}

.ui-widget-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.ui-autocomplete {
  position: absolute;
  top: 0;
  left: 0;
  cursor: default;
}

.ui-menu {
  list-style: none;
  padding: 2px;
  margin: 0;
  display: block;
  outline: none;
}

.ui-menu .ui-menu {
  margin-top: -3px;
  position: absolute;
}

.ui-menu .ui-menu-item {
  margin: 0;
  padding: 0;
  width: 100%;
}

.ui-menu .ui-menu-divider {
  margin: 5px -2px 5px -2px;
  height: 0;
  font-size: 0;
  line-height: 0;
  border-width: 1px 0 0 0;
}

.ui-menu .ui-menu-item a {
  text-decoration: none;
  display: block;
  padding: 2px 0.4em;
  line-height: 1.5;
  min-height: 0;
  font-weight: normal;
}

.ui-menu .ui-menu-item a.ui-state-focus,
.ui-menu .ui-menu-item a.ui-state-active {
  font-weight: normal;
  margin: -1px;
}

.ui-menu .ui-state-disabled {
  font-weight: normal;
  margin: 0.4em 0 0.2em;
  line-height: 1.5;
}

.ui-menu .ui-state-disabled a {
  cursor: default;
}

.ui-menu-icons {
  position: relative;
}

.ui-menu-icons .ui-menu-item a {
  position: relative;
  padding-left: 2em;
}

.ui-menu .ui-icon {
  position: absolute;
  top: 0.2em;
  left: 0.2em;
}

.ui-menu .ui-menu-icon {
  position: static;
  float: right;
}

.ui-widget {
  font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif;
  font-size: 1.1em;
}

.ui-widget .ui-widget {
  font-size: 1em;
}

.ui-widget input,
.ui-widget select,
.ui-widget textarea,
.ui-widget button {
  font-family: Trebuchet MS, Tahoma, Verdana, Arial, sans-serif;
  font-size: 1em;
}

.ui-widget-content {
  border: 1px solid #dddddd;
  background: #eeeeee 50% top repeat-x;
  color: #333333;
}

.ui-widget-content a {
  color: #333333;
}

.ui-widget-header {
  border: 1px solid #e78f08;
  background: #f6a828 50% 50% repeat-x;
  color: #ffffff;
  font-weight: bold;
}

.ui-widget-header a {
  color: #ffffff;
}

.ui-state-default,
.ui-widget-content .ui-state-default,
.ui-widget-header .ui-state-default {
  border: 1px solid #cccccc;
  background: #f6f6f6 50% 50% repeat-x;
  font-weight: bold;
  color: #1c94c4;
}

.ui-state-default a,
.ui-state-default a:link,
.ui-state-default a:visited {
  color: #1c94c4;
  text-decoration: none;
}

.ui-state-hover,
.ui-widget-content .ui-state-hover,
.ui-widget-header .ui-state-hover,
.ui-state-focus,
.ui-widget-content .ui-state-focus,
.ui-widget-header .ui-state-focus {
  border: 1px solid #fbcb09;
  background: #fdf5ce 50% 50% repeat-x;
  font-weight: bold;
  color: #c77405;
}

.ui-state-hover a,
.ui-state-hover a:hover,
.ui-state-hover a:link,
.ui-state-hover a:visited {
  color: #c77405;
  text-decoration: none;
}

.ui-state-active,
.ui-widget-content .ui-state-active,
.ui-widget-header .ui-state-active {
  border: 1px solid #fbd850;
  background: #ffffff 50% 50% repeat-x;
  font-weight: bold;
  color: #eb8f00;
}

.ui-state-active a,
.ui-state-active a:link,
.ui-state-active a:visited {
  color: #eb8f00;
  text-decoration: none;
}

.ui-state-highlight,
.ui-widget-content .ui-state-highlight,
.ui-widget-header .ui-state-highlight {
  border: 1px solid #fed22f;
  background: #ffe45c 50% top repeat-x;
  color: #363636;
}

.ui-state-highlight a,
.ui-widget-content .ui-state-highlight a,
.ui-widget-header .ui-state-highlight a {
  color: #363636;
}

.ui-state-error,
.ui-widget-content .ui-state-error,
.ui-widget-header .ui-state-error {
  border: 1px solid #cd0a0a;
  background: #b81900 50% 50% repeat;
  color: #ffffff;
}

.ui-state-error a,
.ui-widget-content .ui-state-error a,
.ui-widget-header .ui-state-error a {
  color: #ffffff;
}

.ui-state-error-text,
.ui-widget-content .ui-state-error-text,
.ui-widget-header .ui-state-error-text {
  color: #ffffff;
}

.ui-priority-primary,
.ui-widget-content .ui-priority-primary,
.ui-widget-header .ui-priority-primary {
  font-weight: bold;
}

.ui-priority-secondary,
.ui-widget-content .ui-priority-secondary,
.ui-widget-header .ui-priority-secondary {
  opacity: 0.7;
  filter: alpha(opacity=70);
  font-weight: normal;
}

.ui-state-disabled,
.ui-widget-content .ui-state-disabled,
.ui-widget-header .ui-state-disabled {
  opacity: 0.35;
  filter: alpha(opacity=35);
  background-image: none;
}

.ui-state-disabled .ui-icon {
  filter: alpha(opacity=35);
}

.ui-icon {
  width: 16px;
  height: 16px;
}

.ui-icon-blank {
  background-position: 16px 16px;
}

.ui-icon-carat-1-n {
  background-position: 0 0;
}

.ui-icon-carat-1-ne {
  background-position: -16px 0;
}

.ui-icon-carat-1-e {
  background-position: -32px 0;
}

.ui-icon-carat-1-se {
  background-position: -48px 0;
}

.ui-icon-carat-1-s {
  background-position: -64px 0;
}

.ui-icon-carat-1-sw {
  background-position: -80px 0;
}

.ui-icon-carat-1-w {
  background-position: -96px 0;
}

.ui-icon-carat-1-nw {
  background-position: -112px 0;
}

.ui-icon-carat-2-n-s {
  background-position: -128px 0;
}

.ui-icon-carat-2-e-w {
  background-position: -144px 0;
}

.ui-icon-triangle-1-n {
  background-position: 0 -16px;
}

.ui-icon-triangle-1-ne {
  background-position: -16px -16px;
}

.ui-icon-triangle-1-e {
  background-position: -32px -16px;
}

.ui-icon-triangle-1-se {
  background-position: -48px -16px;
}

.ui-icon-triangle-1-s {
  background-position: -64px -16px;
}

.ui-icon-triangle-1-sw {
  background-position: -80px -16px;
}

.ui-icon-triangle-1-w {
  background-position: -96px -16px;
}

.ui-icon-triangle-1-nw {
  background-position: -112px -16px;
}

.ui-icon-triangle-2-n-s {
  background-position: -128px -16px;
}

.ui-icon-triangle-2-e-w {
  background-position: -144px -16px;
}

.ui-icon-arrow-1-n {
  background-position: 0 -32px;
}

.ui-icon-arrow-1-ne {
  background-position: -16px -32px;
}

.ui-icon-arrow-1-e {
  background-position: -32px -32px;
}

.ui-icon-arrow-1-se {
  background-position: -48px -32px;
}

.ui-icon-arrow-1-s {
  background-position: -64px -32px;
}

.ui-icon-arrow-1-sw {
  background-position: -80px -32px;
}

.ui-icon-arrow-1-w {
  background-position: -96px -32px;
}

.ui-icon-arrow-1-nw {
  background-position: -112px -32px;
}

.ui-icon-arrow-2-n-s {
  background-position: -128px -32px;
}

.ui-icon-arrow-2-ne-sw {
  background-position: -144px -32px;
}

.ui-icon-arrow-2-e-w {
  background-position: -160px -32px;
}

.ui-icon-arrow-2-se-nw {
  background-position: -176px -32px;
}

.ui-icon-arrowstop-1-n {
  background-position: -192px -32px;
}

.ui-icon-arrowstop-1-e {
  background-position: -208px -32px;
}

.ui-icon-arrowstop-1-s {
  background-position: -224px -32px;
}

.ui-icon-arrowstop-1-w {
  background-position: -240px -32px;
}

.ui-icon-arrowthick-1-n {
  background-position: 0 -48px;
}

.ui-icon-arrowthick-1-ne {
  background-position: -16px -48px;
}

.ui-icon-arrowthick-1-e {
  background-position: -32px -48px;
}

.ui-icon-arrowthick-1-se {
  background-position: -48px -48px;
}

.ui-icon-arrowthick-1-s {
  background-position: -64px -48px;
}

.ui-icon-arrowthick-1-sw {
  background-position: -80px -48px;
}

.ui-icon-arrowthick-1-w {
  background-position: -96px -48px;
}

.ui-icon-arrowthick-1-nw {
  background-position: -112px -48px;
}

.ui-icon-arrowthick-2-n-s {
  background-position: -128px -48px;
}

.ui-icon-arrowthick-2-ne-sw {
  background-position: -144px -48px;
}

.ui-icon-arrowthick-2-e-w {
  background-position: -160px -48px;
}

.ui-icon-arrowthick-2-se-nw {
  background-position: -176px -48px;
}

.ui-icon-arrowthickstop-1-n {
  background-position: -192px -48px;
}

.ui-icon-arrowthickstop-1-e {
  background-position: -208px -48px;
}

.ui-icon-arrowthickstop-1-s {
  background-position: -224px -48px;
}

.ui-icon-arrowthickstop-1-w {
  background-position: -240px -48px;
}

.ui-icon-arrowreturnthick-1-w {
  background-position: 0 -64px;
}

.ui-icon-arrowreturnthick-1-n {
  background-position: -16px -64px;
}

.ui-icon-arrowreturnthick-1-e {
  background-position: -32px -64px;
}

.ui-icon-arrowreturnthick-1-s {
  background-position: -48px -64px;
}

.ui-icon-arrowreturn-1-w {
  background-position: -64px -64px;
}

.ui-icon-arrowreturn-1-n {
  background-position: -80px -64px;
}

.ui-icon-arrowreturn-1-e {
  background-position: -96px -64px;
}

.ui-icon-arrowreturn-1-s {
  background-position: -112px -64px;
}

.ui-icon-arrowrefresh-1-w {
  background-position: -128px -64px;
}

.ui-icon-arrowrefresh-1-n {
  background-position: -144px -64px;
}

.ui-icon-arrowrefresh-1-e {
  background-position: -160px -64px;
}

.ui-icon-arrowrefresh-1-s {
  background-position: -176px -64px;
}

.ui-icon-arrow-4 {
  background-position: 0 -80px;
}

.ui-icon-arrow-4-diag {
  background-position: -16px -80px;
}

.ui-icon-extlink {
  background-position: -32px -80px;
}

.ui-icon-newwin {
  background-position: -48px -80px;
}

.ui-icon-refresh {
  background-position: -64px -80px;
}

.ui-icon-shuffle {
  background-position: -80px -80px;
}

.ui-icon-transfer-e-w {
  background-position: -96px -80px;
}

.ui-icon-transferthick-e-w {
  background-position: -112px -80px;
}

.ui-icon-folder-collapsed {
  background-position: 0 -96px;
}

.ui-icon-folder-open {
  background-position: -16px -96px;
}

.ui-icon-document {
  background-position: -32px -96px;
}

.ui-icon-document-b {
  background-position: -48px -96px;
}

.ui-icon-note {
  background-position: -64px -96px;
}

.ui-icon-mail-closed {
  background-position: -80px -96px;
}

.ui-icon-mail-open {
  background-position: -96px -96px;
}

.ui-icon-suitcase {
  background-position: -112px -96px;
}

.ui-icon-comment {
  background-position: -128px -96px;
}

.ui-icon-person {
  background-position: -144px -96px;
}

.ui-icon-print {
  background-position: -160px -96px;
}

.ui-icon-trash {
  background-position: -176px -96px;
}

.ui-icon-locked {
  background-position: -192px -96px;
}

.ui-icon-unlocked {
  background-position: -208px -96px;
}

.ui-icon-bookmark {
  background-position: -224px -96px;
}

.ui-icon-tag {
  background-position: -240px -96px;
}

.ui-icon-home {
  background-position: 0 -112px;
}

.ui-icon-flag {
  background-position: -16px -112px;
}

.ui-icon-calendar {
  background-position: -32px -112px;
}

.ui-icon-cart {
  background-position: -48px -112px;
}

.ui-icon-pencil {
  background-position: -64px -112px;
}

.ui-icon-clock {
  background-position: -80px -112px;
}

.ui-icon-disk {
  background-position: -96px -112px;
}

.ui-icon-calculator {
  background-position: -112px -112px;
}

.ui-icon-zoomin {
  background-position: -128px -112px;
}

.ui-icon-zoomout {
  background-position: -144px -112px;
}

.ui-icon-search {
  background-position: -160px -112px;
}

.ui-icon-wrench {
  background-position: -176px -112px;
}

.ui-icon-gear {
  background-position: -192px -112px;
}

.ui-icon-heart {
  background-position: -208px -112px;
}

.ui-icon-star {
  background-position: -224px -112px;
}

.ui-icon-link {
  background-position: -240px -112px;
}

.ui-icon-cancel {
  background-position: 0 -128px;
}

.ui-icon-plus {
  background-position: -16px -128px;
}

.ui-icon-plusthick {
  background-position: -32px -128px;
}

.ui-icon-minus {
  background-position: -48px -128px;
}

.ui-icon-minusthick {
  background-position: -64px -128px;
}

.ui-icon-close {
  background-position: -80px -128px;
}

.ui-icon-closethick {
  background-position: -96px -128px;
}

.ui-icon-key {
  background-position: -112px -128px;
}

.ui-icon-lightbulb {
  background-position: -128px -128px;
}

.ui-icon-scissors {
  background-position: -144px -128px;
}

.ui-icon-clipboard {
  background-position: -160px -128px;
}

.ui-icon-copy {
  background-position: -176px -128px;
}

.ui-icon-contact {
  background-position: -192px -128px;
}

.ui-icon-image {
  background-position: -208px -128px;
}

.ui-icon-video {
  background-position: -224px -128px;
}

.ui-icon-script {
  background-position: -240px -128px;
}

.ui-icon-alert {
  background-position: 0 -144px;
}

.ui-icon-info {
  background-position: -16px -144px;
}

.ui-icon-notice {
  background-position: -32px -144px;
}

.ui-icon-help {
  background-position: -48px -144px;
}

.ui-icon-check {
  background-position: -64px -144px;
}

.ui-icon-bullet {
  background-position: -80px -144px;
}

.ui-icon-radio-on {
  background-position: -96px -144px;
}

.ui-icon-radio-off {
  background-position: -112px -144px;
}

.ui-icon-pin-w {
  background-position: -128px -144px;
}

.ui-icon-pin-s {
  background-position: -144px -144px;
}

.ui-icon-play {
  background-position: 0 -160px;
}

.ui-icon-pause {
  background-position: -16px -160px;
}

.ui-icon-seek-next {
  background-position: -32px -160px;
}

.ui-icon-seek-prev {
  background-position: -48px -160px;
}

.ui-icon-seek-end {
  background-position: -64px -160px;
}

.ui-icon-seek-start {
  background-position: -80px -160px;
}

.ui-icon-seek-first {
  background-position: -80px -160px;
}

.ui-icon-stop {
  background-position: -96px -160px;
}

.ui-icon-eject {
  background-position: -112px -160px;
}

.ui-icon-volume-off {
  background-position: -128px -160px;
}

.ui-icon-volume-on {
  background-position: -144px -160px;
}

.ui-icon-power {
  background-position: 0 -176px;
}

.ui-icon-signal-diag {
  background-position: -16px -176px;
}

.ui-icon-signal {
  background-position: -32px -176px;
}

.ui-icon-battery-0 {
  background-position: -48px -176px;
}

.ui-icon-battery-1 {
  background-position: -64px -176px;
}

.ui-icon-battery-2 {
  background-position: -80px -176px;
}

.ui-icon-battery-3 {
  background-position: -96px -176px;
}

.ui-icon-circle-plus {
  background-position: 0 -192px;
}

.ui-icon-circle-minus {
  background-position: -16px -192px;
}

.ui-icon-circle-close {
  background-position: -32px -192px;
}

.ui-icon-circle-triangle-e {
  background-position: -48px -192px;
}

.ui-icon-circle-triangle-s {
  background-position: -64px -192px;
}

.ui-icon-circle-triangle-w {
  background-position: -80px -192px;
}

.ui-icon-circle-triangle-n {
  background-position: -96px -192px;
}

.ui-icon-circle-arrow-e {
  background-position: -112px -192px;
}

.ui-icon-circle-arrow-s {
  background-position: -128px -192px;
}

.ui-icon-circle-arrow-w {
  background-position: -144px -192px;
}

.ui-icon-circle-arrow-n {
  background-position: -160px -192px;
}

.ui-icon-circle-zoomin {
  background-position: -176px -192px;
}

.ui-icon-circle-zoomout {
  background-position: -192px -192px;
}

.ui-icon-circle-check {
  background-position: -208px -192px;
}

.ui-icon-circlesmall-plus {
  background-position: 0 -208px;
}

.ui-icon-circlesmall-minus {
  background-position: -16px -208px;
}

.ui-icon-circlesmall-close {
  background-position: -32px -208px;
}

.ui-icon-squaresmall-plus {
  background-position: -48px -208px;
}

.ui-icon-squaresmall-minus {
  background-position: -64px -208px;
}

.ui-icon-squaresmall-close {
  background-position: -80px -208px;
}

.ui-icon-grip-dotted-vertical {
  background-position: 0 -224px;
}

.ui-icon-grip-dotted-horizontal {
  background-position: -16px -224px;
}

.ui-icon-grip-solid-vertical {
  background-position: -32px -224px;
}

.ui-icon-grip-solid-horizontal {
  background-position: -48px -224px;
}

.ui-icon-gripsmall-diagonal-se {
  background-position: -64px -224px;
}

.ui-icon-grip-diagonal-se {
  background-position: -80px -224px;
}

.ui-corner-all,
.ui-corner-top,
.ui-corner-left,
.ui-corner-tl {
  border-top-left-radius: 4px;
}

.ui-corner-all,
.ui-corner-top,
.ui-corner-right,
.ui-corner-tr {
  border-top-right-radius: 4px;
}

.ui-corner-all,
.ui-corner-bottom,
.ui-corner-left,
.ui-corner-bl {
  border-bottom-left-radius: 4px;
}

.ui-corner-all,
.ui-corner-bottom,
.ui-corner-right,
.ui-corner-br {
  border-bottom-right-radius: 4px;
}

.ui-widget-overlay {
  background: #666666 50% 50% repeat;
  opacity: 0.5;
  filter: alpha(opacity=50);
}

.ui-widget-shadow {
  margin: -5px 0 0 -5px;
  padding: 5px;
  background: #000000 50% 50% repeat-x;
  opacity: 0.2;
  filter: alpha(opacity=20);
  border-radius: 5px;
}

@font-face {
  font-family: "FontAwesome";
  src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/2.0/fontawesome-webfont.eot");
  src: url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/2.0/fontawesome-webfont.eot?#iefix")
      format("embedded-opentype"),
    url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/2.0/fontawesome-webfont.woff")
      format("woff"),
    url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/2.0/fontawesome-webfont.ttf")
      format("truetype"),
    url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/2.0/fontawesome-webfont.eot#FontAwesome")
      format("svg");
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"],
[class*=" icon-"] {
  display: inline;
  width: auto;
  height: auto;
  line-height: inherit;
  vertical-align: baseline;
  background-image: none;
  background-position: 0% 0%;
  background-repeat: repeat;
}

li[class^="icon-"],
li[class*=" icon-"] {
  display: block;
}

[class^="icon-"]:before,
[class*=" icon-"]:before {
  font-family: FontAwesome;
  font-weight: normal;
  font-style: normal;
  display: inline-block;
  text-decoration: inherit;
}

a [class^="icon-"],
a [class*=" icon-"] {
  display: inline-block;
  text-decoration: inherit;
}

.icon-large:before {
  vertical-align: middle;
  font-size: 1.3333333333333333em;
}

.btn [class^="icon-"],
.nav-tabs [class^="icon-"],
.btn [class*=" icon-"],
.nav-tabs [class*=" icon-"] {
  line-height: 0.9em;
}

li [class^="icon-"],
li [class*=" icon-"] {
  display: inline-block;
  width: 1.25em;
  text-align: center;
}

li .icon-large:before,
li .icon-large:before {
  width: 1.875em;
}

ul.icons {
  list-style-type: none;
  margin-left: 2em;
  text-indent: -0.8em;
}

ul.icons li [class^="icon-"],
ul.icons li [class*=" icon-"] {
  width: 0.8em;
}

ul.icons li .icon-large:before,
ul.icons li .icon-large:before {
  vertical-align: initial;
}

.icon-glass:before {
  content: "\f000";
}

.icon-music:before {
  content: "\f001";
}

.icon-search:before {
  content: "\f002";
}

.icon-envelope:before {
  content: "\f003";
}

.icon-heart:before {
  content: "\f004";
}

.icon-star:before {
  content: "\f005";
}

.icon-star-empty:before {
  content: "\f006";
}

.icon-user:before {
  content: "\f007";
}

.icon-film:before {
  content: "\f008";
}

.icon-th-large:before {
  content: "\f009";
}

.icon-th:before {
  content: "\f00a";
}

.icon-th-list:before {
  content: "\f00b";
}

.icon-ok:before {
  content: "\f00c";
}

.icon-remove:before {
  content: "\f00d";
}

.icon-zoom-in:before {
  content: "\f00e";
}

.icon-zoom-out:before {
  content: "\f010";
}

.icon-off:before {
  content: "\f011";
}

.icon-signal:before {
  content: "\f012";
}

.icon-cog:before {
  content: "\f013";
}

.icon-trash:before {
  content: "\f014";
}

.icon-home:before {
  content: "\f015";
}

.icon-file:before {
  content: "\f016";
}

.icon-time:before {
  content: "\f017";
}

.icon-road:before {
  content: "\f018";
}

.icon-download-alt:before {
  content: "\f019";
}

.icon-download:before {
  content: "\f01a";
}

.icon-upload:before {
  content: "\f01b";
}

.icon-inbox:before {
  content: "\f01c";
}

.icon-play-circle:before {
  content: "\f01d";
}

.icon-repeat:before {
  content: "\f01e";
}

.icon-refresh:before {
  content: "\f021";
}

.icon-list-alt:before {
  content: "\f022";
}

.icon-lock:before {
  content: "\f023";
}

.icon-flag:before {
  content: "\f024";
}

.icon-headphones:before {
  content: "\f025";
}

.icon-volume-off:before {
  content: "\f026";
}

.icon-volume-down:before {
  content: "\f027";
}

.icon-volume-up:before {
  content: "\f028";
}

.icon-qrcode:before {
  content: "\f029";
}

.icon-barcode:before {
  content: "\f02a";
}

.icon-tag:before {
  content: "\f02b";
}

.icon-tags:before {
  content: "\f02c";
}

.icon-book:before {
  content: "\f02d";
}

.icon-bookmark:before {
  content: "\f02e";
}

.icon-print:before {
  content: "\f02f";
}

.icon-camera:before {
  content: "\f030";
}

.icon-font:before {
  content: "\f031";
}

.icon-bold:before {
  content: "\f032";
}

.icon-italic:before {
  content: "\f033";
}

.icon-text-height:before {
  content: "\f034";
}

.icon-text-width:before {
  content: "\f035";
}

.icon-align-left:before {
  content: "\f036";
}

.icon-align-center:before {
  content: "\f037";
}

.icon-align-right:before {
  content: "\f038";
}

.icon-align-justify:before {
  content: "\f039";
}

.icon-list:before {
  content: "\f03a";
}

.icon-indent-left:before {
  content: "\f03b";
}

.icon-indent-right:before {
  content: "\f03c";
}

.icon-facetime-video:before {
  content: "\f03d";
}

.icon-picture:before {
  content: "\f03e";
}

.icon-pencil:before {
  content: "\f040";
}

.icon-map-marker:before {
  content: "\f041";
}

.icon-adjust:before {
  content: "\f042";
}

.icon-tint:before {
  content: "\f043";
}

.icon-edit:before {
  content: "\f044";
}

.icon-share:before {
  content: "\f045";
}

.icon-check:before {
  content: "\f046";
}

.icon-move:before {
  content: "\f047";
}

.icon-step-backward:before {
  content: "\f048";
}

.icon-fast-backward:before {
  content: "\f049";
}

.icon-backward:before {
  content: "\f04a";
}

.icon-play:before {
  content: "\f04b";
}

.icon-pause:before {
  content: "\f04c";
}

.icon-stop:before {
  content: "\f04d";
}

.icon-forward:before {
  content: "\f04e";
}

.icon-fast-forward:before {
  content: "\f050";
}

.icon-step-forward:before {
  content: "\f051";
}

.icon-eject:before {
  content: "\f052";
}

.icon-chevron-left:before {
  content: "\f053";
}

.icon-chevron-right:before {
  content: "\f054";
}

.icon-plus-sign:before {
  content: "\f055";
}

.icon-minus-sign:before {
  content: "\f056";
}

.icon-remove-sign:before {
  content: "\f057";
}

.icon-ok-sign:before {
  content: "\f058";
}

.icon-question-sign:before {
  content: "\f059";
}

.icon-info-sign:before {
  content: "\f05a";
}

.icon-screenshot:before {
  content: "\f05b";
}

.icon-remove-circle:before {
  content: "\f05c";
}

.icon-ok-circle:before {
  content: "\f05d";
}

.icon-ban-circle:before {
  content: "\f05e";
}

.icon-arrow-left:before {
  content: "\f060";
}

.icon-arrow-right:before {
  content: "\f061";
}

.icon-arrow-up:before {
  content: "\f062";
}

.icon-arrow-down:before {
  content: "\f063";
}

.icon-share-alt:before {
  content: "\f064";
}

.icon-resize-full:before {
  content: "\f065";
}

.icon-resize-small:before {
  content: "\f066";
}

.icon-plus:before {
  content: "\f067";
}

.icon-minus:before {
  content: "\f068";
}

.icon-asterisk:before {
  content: "\f069";
}

.icon-exclamation-sign:before {
  content: "\f06a";
}

.icon-gift:before {
  content: "\f06b";
}

.icon-leaf:before {
  content: "\f06c";
}

.icon-fire:before {
  content: "\f06d";
}

.icon-eye-open:before {
  content: "\f06e";
}

.icon-eye-close:before {
  content: "\f070";
}

.icon-warning-sign:before {
  content: "\f071";
}

.icon-plane:before {
  content: "\f072";
}

.icon-calendar:before {
  content: "\f073";
}

.icon-random:before {
  content: "\f074";
}

.icon-comment:before {
  content: "\f075";
}

.icon-magnet:before {
  content: "\f076";
}

.icon-chevron-up:before {
  content: "\f077";
}

.icon-chevron-down:before {
  content: "\f078";
}

.icon-retweet:before {
  content: "\f079";
}

.icon-shopping-cart:before {
  content: "\f07a";
}

.icon-folder-close:before {
  content: "\f07b";
}

.icon-folder-open:before {
  content: "\f07c";
}

.icon-resize-vertical:before {
  content: "\f07d";
}

.icon-resize-horizontal:before {
  content: "\f07e";
}

.icon-bar-chart:before {
  content: "\f080";
}

.icon-twitter-sign:before {
  content: "\f081";
}

.icon-facebook-sign:before {
  content: "\f082";
}

.icon-camera-retro:before {
  content: "\f083";
}

.icon-key:before {
  content: "\f084";
}

.icon-cogs:before {
  content: "\f085";
}

.icon-comments:before {
  content: "\f086";
}

.icon-thumbs-up:before {
  content: "\f087";
}

.icon-thumbs-down:before {
  content: "\f088";
}

.icon-star-half:before {
  content: "\f089";
}

.icon-heart-empty:before {
  content: "\f08a";
}

.icon-signout:before {
  content: "\f08b";
}

.icon-linkedin-sign:before {
  content: "\f08c";
}

.icon-pushpin:before {
  content: "\f08d";
}

.icon-external-link:before {
  content: "\f08e";
}

.icon-signin:before {
  content: "\f090";
}

.icon-trophy:before {
  content: "\f091";
}

.icon-github-sign:before {
  content: "\f092";
}

.icon-upload-alt:before {
  content: "\f093";
}

.icon-lemon:before {
  content: "\f094";
}

.icon-phone:before {
  content: "\f095";
}

.icon-check-empty:before {
  content: "\f096";
}

.icon-bookmark-empty:before {
  content: "\f097";
}

.icon-phone-sign:before {
  content: "\f098";
}

.icon-twitter:before {
  content: "\f099";
}

.icon-facebook:before {
  content: "\f09a";
}

.icon-github:before {
  content: "\f09b";
}

.icon-unlock:before {
  content: "\f09c";
}

.icon-credit-card:before {
  content: "\f09d";
}

.icon-rss:before {
  content: "\f09e";
}

.icon-hdd:before {
  content: "\f0a0";
}

.icon-bullhorn:before {
  content: "\f0a1";
}

.icon-bell:before {
  content: "\f0a2";
}

.icon-certificate:before {
  content: "\f0a3";
}

.icon-hand-right:before {
  content: "\f0a4";
}

.icon-hand-left:before {
  content: "\f0a5";
}

.icon-hand-up:before {
  content: "\f0a6";
}

.icon-hand-down:before {
  content: "\f0a7";
}

.icon-circle-arrow-left:before {
  content: "\f0a8";
}

.icon-circle-arrow-right:before {
  content: "\f0a9";
}

.icon-circle-arrow-up:before {
  content: "\f0aa";
}

.icon-circle-arrow-down:before {
  content: "\f0ab";
}

.icon-globe:before {
  content: "\f0ac";
}

.icon-wrench:before {
  content: "\f0ad";
}

.icon-tasks:before {
  content: "\f0ae";
}

.icon-filter:before {
  content: "\f0b0";
}

.icon-briefcase:before {
  content: "\f0b1";
}

.icon-fullscreen:before {
  content: "\f0b2";
}

.icon-group:before {
  content: "\f0c0";
}

.icon-link:before {
  content: "\f0c1";
}

.icon-cloud:before {
  content: "\f0c2";
}

.icon-beaker:before {
  content: "\f0c3";
}

.icon-cut:before {
  content: "\f0c4";
}

.icon-copy:before {
  content: "\f0c5";
}

.icon-paper-clip:before {
  content: "\f0c6";
}

.icon-save:before {
  content: "\f0c7";
}

.icon-sign-blank:before {
  content: "\f0c8";
}

.icon-reorder:before {
  content: "\f0c9";
}

.icon-list-ul:before {
  content: "\f0ca";
}

.icon-list-ol:before {
  content: "\f0cb";
}

.icon-strikethrough:before {
  content: "\f0cc";
}

.icon-underline:before {
  content: "\f0cd";
}

.icon-table:before {
  content: "\f0ce";
}

.icon-magic:before {
  content: "\f0d0";
}

.icon-truck:before {
  content: "\f0d1";
}

.icon-pinterest:before {
  content: "\f0d2";
}

.icon-pinterest-sign:before {
  content: "\f0d3";
}

.icon-google-plus-sign:before {
  content: "\f0d4";
}

.icon-google-plus:before {
  content: "\f0d5";
}

.icon-money:before {
  content: "\f0d6";
}

.icon-caret-down:before {
  content: "\f0d7";
}

.icon-caret-up:before {
  content: "\f0d8";
}

.icon-caret-left:before {
  content: "\f0d9";
}

.icon-caret-right:before {
  content: "\f0da";
}

.icon-columns:before {
  content: "\f0db";
}

.icon-sort:before {
  content: "\f0dc";
}

.icon-sort-down:before {
  content: "\f0dd";
}

.icon-sort-up:before {
  content: "\f0de";
}

.icon-envelope-alt:before {
  content: "\f0e0";
}

.icon-linkedin:before {
  content: "\f0e1";
}

.icon-undo:before {
  content: "\f0e2";
}

.icon-legal:before {
  content: "\f0e3";
}

.icon-dashboard:before {
  content: "\f0e4";
}

.icon-comment-alt:before {
  content: "\f0e5";
}

.icon-comments-alt:before {
  content: "\f0e6";
}

.icon-bolt:before {
  content: "\f0e7";
}

.icon-sitemap:before {
  content: "\f0e8";
}

.icon-umbrella:before {
  content: "\f0e9";
}

.icon-paste:before {
  content: "\f0ea";
}

.icon-user-md:before {
  content: "\f200";
}

.template {
  display: none;
}

:root {
  color-scheme: light only;
}

body {
  padding-top: 33px;
  text-rendering: optimizeLegibility;
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

input,
button,
select,
textarea {
  font-family: "Lato", "Helvetica Neue", Helvetica, Arial, sans-serif !important;
}

a:active,
a:focus,
button,
button:active {
  outline: 0;
  outline-style: none;
}

div#body-min-width {
  min-width: 980px;
  height: 33px;
  position: relative;
}

.navbar {
  font-size: 14px;
}

@media (max-width: 980px) {
  .navbar.navbar-fixed-top {
    position: absolute;
  }
}

.navbar-inner {
  border-bottom: 1px solid #48be9d;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

.navbar-admin {
  background-color: #48be9d;
  margin-bottom: 0;
}

.navbar-admin .active a {
  background-color: #379c80 !important;
}

.navbar-admin .admin-indicator {
  color: #f00;
  text-shadow: none;
}

.navbar .container {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 960px;
  margin: 0 auto;
  padding: 0 10px;
  min-width: 980px;
}

.navbar #logo {
  width: 108px;
  height: 22px;
  margin-left: 10px;
}

.navbar .nav {
  height: 33px;
}

.nav.pull-right {
  white-space: nowrap;
  margin-bottom: 0;
}

.nav.pull-right > li {
  display: inline-block;
  margin-left: 10px;
}

.nav.pull-right ul.dropdown-menu li a {
  line-height: 22px;
  padding-left: 10px;
  padding-right: 10px;
  text-shadow: none;
}

.nav.pull-right ul.dropdown-menu li a:hover {
  background: #48be9d;
}

.nav.pull-right ul.dropdown-menu li:first-child a {
  border-radius: 3px 3px 0 0;
}

.nav.pull-right ul.dropdown-menu li:last-child a {
  border-radius: 0 0 3px 3px;
}

.nav.pull-right ul.dropdown-menu li.li-header {
  padding: 4px 10px 1px;
  font-size: 12px;
  text-shadow: none;
  color: #999;
  text-transform: uppercase;
}

.nav.pull-right ul.dropdown-menu span.beta {
  font-size: 10px;
  text-transform: uppercase;
  color: #999;
}

.nav.pull-right ul.dropdown-menu a:hover span.beta {
  color: inherit;
}

#new-pro-features {
  display: none;
  position: absolute;
  z-index: 99999;
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  top: 38px;
  right: 50%;
  margin-right: -480px;
  background: rgba(0, 0, 0, 0.8);
  padding: 8px 10px;
  color: #fff;
}

#new-pro-features:after {
  bottom: 100%;
  right: 10%;
  border: solid transparent;
  content: " ";
  height: 0;
  width: 0;
  position: absolute;
  pointer-events: none;
  border-color: rgba(51, 51, 51, 0);
  border-bottom-color: rgba(0, 0, 0, 0.8);
  border-width: 8px;
  margin-left: -8px;
}

.navbar .nav > li > a,
.header .nav > li > a {
  padding: 8px 5px 5px;
  color: #fff;
}

.navbar .nav > li > a:hover,
.header .nav > li > a:hover {
  background: #48be9d;
}

.header .nav > li > a {
  margin-top: 8px;
}

.navbar .nav img,
.header .nav img {
  width: 22px;
  height: 22px;
  border: 1px solid #3eaf8f;
  background: #3eaf8f;
  border-radius: 12px;
  margin-top: -5px;
  margin-right: 2px;
}

.navbar .brand {
  padding: 4px 20px 2px;
  width: 165px;
}

.navbar .dropdown-menu,
.header .nav.pull-right .dropdown-menu {
  padding: 0;
  margin-top: -1px;
  margin-left: -135px;
}

.dropdown-menu {
  z-index: 99999;
  -ms-filter: "progid:DXImageTransform.Microsoft.Alpha(enabled=false)" !important;
  filter: "progid:DXImageTransform.Microsoft.Alpha(enabled=false)" !important;
}

.dropdown-menu .divider {
  margin: 0px 1px;
}

::-webkit-input-placeholder {
  color: #aaa;
}

:focus::-webkit-input-placeholder {
  color: #ddd;
}

a.notification {
  display: block;
  position: relative;
  text-decoration: none;
  color: inherit;
  padding: 5px;
}

a.notification:hover {
  background: #f8f8f8;
}

a.notification.unread {
  background: #ffe;
}

a.notification img {
  float: left;
  margin-left: 0px;
  margin-right: 5px;
  height: 50px;
  width: 30px;
}

a.notification img.stamp {
  float: none;
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  left: 5px;
}

a.notification span {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

a.notification span.btn-orange {
  display: inline-block;
  margin-top: 5px;
}

a.notification .undelete {
  float: right;
  white-space: normal;
  padding: 3px 10px;
  line-height: 16px;
  font-size: 12px;
  border-radius: 3px;
  margin-left: 20px;
}

a.notification .undelete.expense {
  margin-top: 17px;
}

a.notification .undelete.group {
  margin-top: 7px;
}

a.notification .net_balance {
  color: #aaa;
  font-size: 12px;
  margin-top: -1px;
}

a.notification .net_balance.negative {
  color: #ff652f;
}

a.notification .net_balance.positive {
  color: #5bc5a7;
}

a.notification .net_balance.deleted {
  color: #c45;
}

a.notification .net_balance.strikethrough {
  text-decoration: line-through;
}

a.notification .added_by {
  font-size: 10px;
  color: #aaa;
  margin-top: -3px;
}

a.notification .notification-content {
  overflow: hidden;
  text-overflow: ellipsis;
}

.clearfix,
#add_bill .main-window .body .main_fields,
#add_bill .subview .body .main_fields,
#settle_up_form .main-window .body .main_fields,
#settle_up_form .subview .body .main_fields,
#center_column #dashboard_balances li.relationship > a,
#center_column #dashboard_balances .summary .balances,
#center_column #dashboard_balances .summary {
  *zoom: 1;
}

.clearfix:before,
#add_bill .main-window .body .main_fields:before,
#add_bill .subview .body .main_fields:before,
#settle_up_form .main-window .body .main_fields:before,
#settle_up_form .subview .body .main_fields:before,
#center_column #dashboard_balances li.relationship > a:before,
#center_column #dashboard_balances .summary .balances:before,
#center_column #dashboard_balances .summary:before,
.clearfix:after,
#add_bill .main-window .body .main_fields:after,
#add_bill .subview .body .main_fields:after,
#settle_up_form .main-window .body .main_fields:after,
#settle_up_form .subview .body .main_fields:after,
#center_column #dashboard_balances li.relationship > a:after,
#center_column #dashboard_balances .summary .balances:after,
#center_column #dashboard_balances .summary:after {
  display: table;
  content: "";
}

.clearfix:after,
#add_bill .main-window .body .main_fields:after,
#add_bill .subview .body .main_fields:after,
#settle_up_form .main-window .body .main_fields:after,
#settle_up_form .subview .body .main_fields:after,
#center_column #dashboard_balances li.relationship > a:after,
#center_column #dashboard_balances .summary .balances:after,
#center_column #dashboard_balances .summary:after {
  clear: both;
}

.unselectable,
#add_bill #choose_split .split-details .split_method .person,
#settle_up_form #choose_split .split-details .split_method .person {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

html {
  height: 100%;
}

body {
  background: #fff;
  padding-top: 0;
  height: 100%;
}

#loading {
  position: absolute;
  top: 33px;
  bottom: 0;
  left: 0;
  right: 0;
  text-align: center;
  padding-top: 100px;
  background: #fff;
  background: rgba(255, 255, 255, 0.8);
  color: #ccc;
  font-size: 24px;
  font-weight: normal;
  z-index: 999;
}

.fixed-column {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  position: fixed;
  top: 33px;
  bottom: 0;
  z-index: 1;
  background: #fff;
}

#left_sidebar {
  position: relative;
  padding-top: 33px;
  margin-left: -201px;
  padding-right: 20px;
  width: 180px;
  z-index: 3;
  float: left;
}

#left_sidebar.fixed {
  position: fixed;
  float: none;
  left: 50%;
  margin-left: -480px;
}

#right_sidebar {
  position: relative;
  padding-top: 33px;
  margin-right: -201px;
  padding-left: 24px;
  width: 176px;
  z-index: 3;
  float: right;
}

#right_sidebar.fixed {
  position: fixed;
  float: none;
  right: 50%;
  margin-right: -480px;
}

#center_container {
  position: relative;
  min-height: 100%;
  height: 100%;
  overflow: visible;
  width: 960px;
  margin: -33px auto 0;
  padding: 0;
}

#center_bars {
  margin: 0 200px 0 200px;
  border-left: 1px solid #ccc;
  border-right: 1px solid #ccc;
  min-height: 100%;
  -webkit-box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.2);
}

#center_column {
  position: relative;
  margin: 0;
  padding-top: 33px;
  background: #fff;
  min-height: auto;
}

#topbar {
  position: absolute;
  top: 35px;
  left: 0;
  right: 0;
  background: #eee;
  z-index: 9;
  border-bottom: 1px solid #ddd;
}

#topbar .container {
  color: #999;
  font-size: 13px;
}

#topbar .container .summary-block {
  display: inline-block;
  width: 119px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid #ddd;
  text-align: center;
  padding: 5px;
}

#topbar .container .summary-block .amount {
  font-size: 14px;
  color: #ff652f;
}

#topbar .container .summary-block.get-back .amount {
  color: #5bc5a7;
}

#topbar .container .actions {
  float: right;
  padding: 10px;
}

#topbar .container .actions > a.btn,
#topbar .container .actions > .btn-group {
  display: inline-block;
  vertical-align: middle;
}

#topbar .container .actions .btn-group {
  margin: 0 10px;
}

#topbar .container .actions .btn-group .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}

.topbar {
  white-space: nowrap;
  text-overflow: ellipsis;
  height: 40px;
  width: 538px;
  position: relative;
  z-index: 9;
  background: #eee;
  border-bottom: none;
  padding: 13px 10px 10px;
  border-bottom: 1px solid #ddd;
}

.topbar img {
  width: 34px;
  height: 34px;
  border: 1px solid #bbb;
  -webkit-border-radius: 18px;
  -moz-border-radius: 18px;
  border-radius: 18px;
}

.topbar h1 {
  overflow: hidden;
  max-width: 315px;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 24px !important;
  line-height: 38px;
  height: 38px;
  display: inline-block;
  vertical-align: middle;
  color: #333;
  padding-left: 5px;
}

.topbar h1 .label {
  margin-left: 2px;
  vertical-align: middle;
}

.topbar .actions {
  position: absolute;
  top: 13px;
  right: 10px;
  display: inline-block;
}

.topbar .actions > a.btn,
.topbar .actions > .btn-group {
  display: inline-block;
  vertical-align: middle;
}

.topbar .actions .btn-mint {
  margin-left: 7px;
}

.topbar .actions .btn-group {
  margin-left: 0;
}

.topbar .actions .btn-group .dropdown-toggle {
  padding-left: 8px;
  padding-right: 8px;
}

.topbar .actions .btn-group .dropdown-menu.quick-add {
  position: absolute;
  top: 38px;
  right: 0;
  left: auto;
  float: none;
  padding: 10px;
}

.topbar .actions .btn-group .dropdown-menu.quick-add form {
  margin-bottom: 0;
}

.topbar .actions .btn-group .dropdown-menu.quick-add form input {
  box-shadow: none;
  border: 1px solid #ddd;
}

.topbar .actions .btn-group .dropdown-menu.quick-add button {
  background: #eee;
  color: #333;
  text-shadow: none;
}

.topbar .actions .btn-group .dropdown-menu.quick-add button:hover {
  background: #ddd;
}

.topbar.group h1 {
  padding-left: 0;
}

.topbar.friend h1 {
  max-width: 270px;
}

.topbar #quick_add input {
  width: 200px;
  font-size: 16px;
}

.topbar #quick_add div.sample {
  margin-top: 7px;
  margin-bottom: -2px;
  color: #666;
  font-size: 12px;
}

.topbar #quick_add div.status {
  margin-top: 10px;
  border-top: 1px solid #eee;
  padding-top: 4px;
  padding-left: 29px;
  font-size: 14px;
}

.topbar #quick_add div.status h3 {
  margin-left: -29px;
  font-size: 11px;
  text-transform: uppercase;
  color: #666;
}

.topbar #quick_add div.status img {
  float: left;
  height: 35px;
  width: 21px;
  margin-right: 5px;
  margin-left: -29px;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  border: none;
}

.topbar #quick_add div.status .more_info {
  font-size: 12px;
  color: #999;
}

.topbar #quick_add div.status .bill,
.topbar #quick_add div.status .content {
  white-space: normal;
}

.btn-mint {
  background: #5bc5a7;
  color: #fff;
  text-shadow: 0 -1px 0 #318970;
}

.btn-mint:hover,
.btn-mint:active {
  background: #48be9d;
}

.btn-mint.disabled,
.btn-mint[disabled] {
  background-color: #5bc5a7;
  border-color: #3eaf8f;
}

.btn-orange {
  background: #ff652f;
  color: #fff;
  text-shadow: 0 -1px 0 #c83400;
}

.btn-orange:hover,
.btn-orange:active {
  background: #ff5216;
}

.btn-orange.disabled,
.btn-orange[disabled] {
  background-color: #ff652f;
  border-color: #fb4100;
}

.btn-red {
  background: #c45;
  color: #fff;
  text-shadow: 0 -1px 0 #9a2a38;
}

.btn-red:hover,
.btn-red:active {
  background: #ae2f3f;
  color: #fff;
}

.btn-black {
  background: #444;
  color: #fff;
  text-shadow: 0 -1px 0 #222;
}

.btn-black:hover,
.btn-black:active {
  background: #222;
  color: #fff;
}

.btn-cancel {
  background: #eee;
}

.btn-cancel:hover,
.btn-cancel:active {
  background: #e6e6e6;
}

.btn-cancel.disabled,
.btn-cancel[disabled] {
  background-color: #ccc;
  color: #999;
}

.btn-gray {
  color: #666;
}

.btn-gray .caret {
  border-top-color: #666;
}

.btn-gray.btn-settings {
  padding: 6px 1px 2px 3px;
  font-size: 22px;
  line-height: 28px;
}

.btn-gray.btn-settings.dropdown-toggle {
  padding-left: 5px;
  padding-right: 5px;
}

.btn-gray.btn-settings .caret {
  margin-top: 9px;
}

.btn-mint .caret,
.btn-orange .caret {
  border-top-color: #fff;
  opacity: 0.6;
}

.btn-mint .caret:hover,
.btn-orange .caret:hover {
  opacity: 1;
}

.btn-mint:hover,
.btn-mint:active,
.btn-orange:hover,
.btn-orange:active {
  color: #fff;
}

.btn-mint:hover .caret,
.btn-mint:active .caret,
.btn-orange:hover .caret,
.btn-orange:active .caret {
  opacity: 1;
}

.btn-group.open .btn.dropdown-toggle.btn-orange {
  background: #ff5216;
}

.btn-signup {
  color: #333;
  text-shadow: none;
  text-align: left;
  margin: 5px 0 5px;
  background: #fff;
}

.btn-google-login {
  background: #fff;
  padding: 4px 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #777;
  font-size: 14px;
}

.btn-google-login:hover {
  background: #fff;
  color: #777;
}

.btn-google-login img {
  width: 16px;
  height: 16px;
  padding-right: 2px;
  vertical-align: -3px;
}

#fat_rabbit .flex_container.blank_page .btn-large.btn-google,
#fat_rabbit .flex_container.blank_page .btn-large.btn-facebook {
  padding: 4px 6px;
  margin: 0 0 3px 0;
  font-size: 13px;
  color: #777;
}

#fat_rabbit .flex_container.blank_page .btn-large.btn-google img,
#fat_rabbit .flex_container.blank_page .btn-large.btn-facebook img {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: top;
}

#fat_rabbit .flex_container.blank_page .btn-large.btn-google:hover,
#fat_rabbit .flex_container.blank_page .btn-large.btn-facebook:hover {
  background: #fff;
}

#left_sidebar {
  color: #999;
}

#left_sidebar #view_links {
  text-align: left;
  width: 172px;
  margin-left: 2px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

#left_sidebar #view_links .add-on.active {
  background: #ff652f;
  border-color: #ff5216;
}

#left_sidebar #view_links .add-on.active i {
  color: #fff;
  text-shadow: none;
}

#left_sidebar #view_links #dashboard_link,
#left_sidebar #view_links #notifications_link {
  margin: 11px 0 0;
  padding: 3px 8px 5px 5px;
  font-size: 16px;
  line-height: 21px;
}

#left_sidebar #view_links #dashboard_link span,
#left_sidebar #view_links #notifications_link span {
  display: inline-block;
  width: 16px;
  height: 16px;
  background: url("https://www.splitwise.com/assets/fat_rabbit/dashboard2.png");
  background-position: -16px 0;
  margin: 0 2px -1px 0;
}

#left_sidebar #view_links #dashboard_link.open span,
#left_sidebar #view_links #notifications_link.open span {
  background-position: 0 0;
}

#left_sidebar #view_links #notifications_link {
  margin: 0 0 10px;
}

#left_sidebar #view_links #notifications_link i {
  display: inline-block;
  width: 16px;
  height: 16px;
  margin: 0 1px;
}

#left_sidebar #view_links #notifications_link.unread {
  color: #ff652f;
}

#left_sidebar #view_links #notifications_link.unread.open {
  color: #5bc5a7;
}

#left_sidebar #view_links .sidebar_block {
  padding: 5px;
  margin: -4px 0 4px 5px;
}

#left_sidebar #view_links .header {
  position: relative;
  margin-left: 5px;
  background: #f6f6f6;
  color: #ccc;
  font-size: 11px;
  margin-top: 5px;
  border-top: 1px solid #f3f3f3;
  border-bottom: 1px solid #eee;
  text-transform: uppercase;
  padding: 0 5px;
}

#left_sidebar #view_links .header a {
  position: absolute;
  top: 0;
  right: 5px;
  display: inline;
  border: none;
  padding: 0;
  float: right;
  font-size: inherit;
  text-transform: lowercase;
}

#left_sidebar #view_links .header a:hover {
  background: none;
  color: #5bc5a7;
}

#left_sidebar #view_links .header:hover {
  background: #eee;
  color: #999;
  border-top-color: #e9e9e9;
  border-bottom-color: #e6e6e6;
}

#left_sidebar #view_links .header i.icon-question-sign {
  margin-left: 2px;
  vertical-align: -1px;
}

#left_sidebar #view_links .no-groups {
  padding: 5px 10px 2px;
  text-align: center;
  color: #ccc;
  font-size: 12px;
  white-space: normal;
}

#left_sidebar #view_links .no-groups i {
  cursor: pointer;
}

#left_sidebar #view_links a {
  color: inherit;
  display: block;
  height: 19px;
  font-size: 14px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  padding: 3px 8px 2px 8px;
  text-decoration: none;
  border-left: 6px solid #fff;
}

#left_sidebar #view_links a i {
  margin-right: 1px;
  vertical-align: 0px;
  font-weight: bold;
}

#left_sidebar #view_links a:hover {
  background: #eee;
  color: #666;
}

#left_sidebar #view_links a.open {
  border-left: 6px solid #5bc5a7;
  color: #5bc5a7;
  font-weight: bold;
}

#left_sidebar #view_links a.show_inactive_accounts {
  font-size: 11px;
  line-height: 15px;
  margin-top: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
  color: #ccc;
  text-align: center;
  height: auto;
  min-height: 30px;
  white-space: normal;
}

#left_sidebar #view_links .add_relationships {
  display: none;
  text-align: left;
}

#left_sidebar #view_links .add_relationships a {
  display: inline-block;
  width: 35px;
  margin-left: -1px;
  padding-bottom: 1px;
  border-left: 1px solid #ddd;
}

#left_sidebar #view_links .add_relationships a:last-child {
  float: right;
}

#left_sidebar #view_links hr {
  margin: 0 0 0 5px;
  border-bottom: none;
}

#left_sidebar #view_links div.input-prepend {
  margin: 0 0 8px 10px;
  font-size: 14px;
}

#left_sidebar #view_links div.input-prepend span {
  padding: 2px;
}

#left_sidebar #view_links div.input-prepend input {
  width: 127px;
  margin: 0 auto;
  padding: 2px 3px;
  font-size: 13px;
  border-color: #ccc;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#left_sidebar #view_links div.input-prepend input:focus,
#left_sidebar #view_links div.input-prepend input:active,
#left_sidebar #view_links div.input-prepend input:hover {
  border-color: #ccc;
}

#left_sidebar #view_links div.input-prepend input:focus {
  border-color: #ff652f;
}

#left_sidebar #view_links .social {
  text-align: center;
  padding: 0 0 5px 5px;
  white-space: normal;
}

#left_sidebar #view_links .social a.btn {
  color: #fff;
  text-shadow: none;
  display: inline-block;
  opacity: 0.9;
  height: auto;
  margin: 5px 0 0;
  padding: 2px 10px 2px 3px;
  font-size: 14px;
  border-left: none;
}

#left_sidebar #view_links .social a.btn :hover {
  color: #006699;
  background: none;
  opacity: 1;
}

#left_sidebar #view_links .social a.btn img {
  width: 24px;
  height: 24px;
  vertical-align: -7px;
}

#left_sidebar #view_links .social a.btn.btn-facebook {
  background: #3b5998;
}

#left_sidebar #view_links .social a.btn.btn-twitter {
  background: #4099ff;
}

#left_sidebar .btn-group {
  display: block;
  margin: 10px auto;
  width: 112px;
}

#left_sidebar .btn-group a {
  width: 45px;
  text-align: center;
  padding: 5px 5px 3px;
  font-size: 14px;
  color: #999;
  -webkit-transition: e("color 0.05s ease");
  -moz-transition: e("color 0.05s ease");
  -ms-transition: e("color 0.05s ease");
  -o-transition: e("color 0.05s ease");
  transition: e("color 0.05s ease");
}

#left_sidebar .btn-group a:hover {
  color: #666;
}

#left_sidebar .btn-group a:first-child {
  width: 44px;
}

@media (max-width: 980px) {
  #left_sidebar.fixed {
    left: 0%;
    margin-left: 0;
    position: absolute;
  }

  #right_sidebar.fixed {
    left: 760px;
    margin-left: 0;
    position: absolute;
  }
}

@media (-webkit-min-device-pixel-ratio: 1.5) {
  #left_sidebar #view_links #dashboard_link span {
    background: url("https://www.splitwise.com/assets/fat_rabbit/dashboard2@2x.png");
    background-size: 32px 16px;
    background-repeat: no-repeat;
    background-position: -16px 0;
  }
}

#right_sidebar {
  padding-bottom: 10px;
}

#right_sidebar .nav {
  padding-top: 13px;
  margin-bottom: 0;
}

#right_sidebar .nav i {
  font-size: 18px;
}

#right_sidebar .nav a {
  display: inline-block;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  height: 16px;
  width: 24px;
  padding: 5px 1px 4px;
  margin: 0;
  text-align: center;
  outline: none;
  border: 1px solid #ddd;
  border-color: rgba(0, 0, 0, 0.1);
  color: #999;
  background: #fff;
  text-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  opacity: 0.6;
}

#right_sidebar .nav a:hover {
  opacity: 1;
}

#right_sidebar .nav a.open {
  background: #eee;
  color: #333;
  opacity: 1;
  border: 1px solid #bbb;
  border-color: rgba(0, 0, 0, 0.1);
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

#right_sidebar h2 {
  margin-top: 12px;
  font-size: 13px;
  line-height: 24px;
  color: #999;
  text-transform: uppercase;
}

#right_sidebar .quick_actions {
  margin: 15px 0 0;
}

#right_sidebar .quick_actions a,
#right_sidebar .quick_actions button {
  display: block;
  text-align: left;
  margin: 10px 0;
  padding: 4px 6px;
  width: 145px;
  height: 35px;
  font-size: 13px;
  color: #333;
  line-height: 17px;
}

#right_sidebar .quick_actions a i,
#right_sidebar .quick_actions button i {
  float: left;
  text-align: center;
  display: block;
  font-size: 40px;
  width: 40px;
  height: 40px;
  margin-right: 5px;
}

#right_sidebar .quick_actions a:hover,
#right_sidebar .quick_actions button:hover {
  color: #000;
}

#right_sidebar div.balance_summary {
  color: #999;
  font-size: 16px;
  line-height: 24px;
  margin-top: 5px;
  margin-bottom: 10px;
}

#right_sidebar div.balance_summary .amount {
  display: block;
  font-size: 28px;
  line-height: 22px;
  font-weight: bold;
}

#right_sidebar div.balance_summary.negative {
  color: #ff652f;
}

#right_sidebar div.balance_summary.positive {
  color: #5bc5a7;
}

#right_sidebar hr {
  margin: 20px 0 12px;
}

#right_sidebar a.details {
  font-size: 14px;
  display: block;
  margin-top: 5px;
}

#right_sidebar #relationship_balances .toggle-balances-list {
  margin-bottom: 10px;
}

#right_sidebar #relationship_balances .toggle-balances-list .btn {
  padding: 2px 5px 1px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: #999;
  background: #fff;
  text-shadow: none;
  border-color: rgba(0, 0, 0, 0.1);
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  opacity: 0.6;
}

#right_sidebar #relationship_balances .toggle-balances-list .btn i {
  font-size: 14px;
  margin-right: 2px;
  vertical-align: -1px;
}

#right_sidebar #relationship_balances .toggle-balances-list .btn.active {
  background: #eee;
  color: #333;
  opacity: 1;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

#right_sidebar #relationship_balances .toggle-balances-list .btn:hover {
  opacity: 1;
}

#right_sidebar #relationship_balances .simplify_on {
  background: #eee;
  border: 1px solid #ddd;
  padding: 6px 7px 3px;
  margin-bottom: 8px;
  margin-top: 5px;
  font-size: 12px;
  display: inline-block;
}

#right_sidebar #relationship_balances .simplify_on i {
  font-size: 15px;
  margin-left: 3px;
  vertical-align: -2px;
  cursor: pointer;
  opacity: 0.4;
}

#right_sidebar #relationship_balances .simplify_on i:hover {
  opacity: 0.75;
}

#right_sidebar #relationship_balances .just_you {
  padding-top: 1px;
}

#right_sidebar #relationship_balances .breakdown {
  margin-top: 15px;
}

#right_sidebar #relationship_balances .breakdown ul {
  font-size: 14px;
  line-height: 15px;
  color: #333;
  margin: 3px 0 0 16px;
}

#right_sidebar #relationship_balances .breakdown ul li {
  font-size: 12px;
  list-style: disc;
  margin-bottom: 4px;
}

#right_sidebar #relationship_balances .breakdown ul .positive .amount {
  color: #5bc5a7;
}

#right_sidebar #relationship_balances .breakdown ul .negative .amount {
  color: #ff652f;
}

#right_sidebar #relationship_balances .breakdown ul .amount {
  font-size: 13px;
  font-weight: bold;
}

#right_sidebar #relationship_balances .calc_links .btn {
  display: block;
  margin: 10px 15px 10px 0;
  line-height: 16px;
  padding-bottom: 5px;
}

#right_sidebar #relationship_balances .calc_links .btn img {
  width: 50px;
  height: 50px;
  padding-left: 8px;
}

#right_sidebar #relationship_balances .calc_links .btn i {
  display: block;
  height: 50px;
  line-height: 50px;
  margin: 0 4px -2px 0;
  font-size: 50px;
}

#right_sidebar #relationship_balances .exchange_rates {
  margin: 10px 0 0;
}

#right_sidebar #relationship_balances .exchange_rates li {
  list-style: none;
}

#right_sidebar a.personal_balance {
  display: inline-block;
  width: 123px;
  vertical-align: top;
  padding: 8px 0 8px 55px;
  margin-left: -8px;
  font-size: 13px;
  color: #444;
  text-decoration: none;
}

#right_sidebar a.personal_balance .name {
  margin-top: 3px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-size: 14px;
}

#right_sidebar a.personal_balance img.avatar {
  float: left;
  width: 38px;
  height: 38px;
  margin-right: 7px;
  margin-left: -47px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  background: #fff;
}

#right_sidebar a.personal_balance img.registration_status {
  height: 16px;
  width: 16px;
  margin: -5px 3px 0 0;
}

#right_sidebar a.personal_balance .balance {
  margin-top: 0px;
  font-size: 12px;
  line-height: 14px;
}

#right_sidebar a.personal_balance .balance.i_owe {
  color: #ff652f;
}

#right_sidebar a.personal_balance .balance.owes_me {
  color: #5bc5a7;
}

#right_sidebar a.personal_balance .balance.settled_up {
  color: #999;
}

#right_sidebar a.personal_balance .balance .amount {
  font-size: 14px;
  font-weight: bold;
}

#right_sidebar a.personal_balance:hover {
  background: #f9f9f9;
}

#right_sidebar #relationship_settings {
  margin-right: 15px;
}

#right_sidebar #relationship_settings a {
  padding-left: 6px;
  padding-right: 2px;
  font-size: 12px;
  text-align: left;
  display: block;
  margin: 5px 0 0;
}

#right_sidebar #charts .stat {
  margin: 5px 0 10px;
}

#right_sidebar #charts .net_change {
  margin-bottom: 10px;
}

#right_sidebar #charts .amount {
  color: #999;
}

#right_sidebar #charts .amount.positive {
  color: #5bc5a7;
}

#right_sidebar #charts .amount.negative {
  color: #ff652f;
}

#right_sidebar #charts .amount.big.positive,
#right_sidebar #charts .amount.big.negative {
  font-size: 18px;
  font-weight: bold;
}

#right_sidebar #ad_block {
  padding: 10px 0 10px;
}

.ads_disabled {
  display: none;
}

.ads_disabled .social a.btn {
  color: #fff;
  text-shadow: none;
  display: inline-block;
  opacity: 0.9;
  height: auto;
  margin: 0;
  padding: 2px 10px 2px 3px;
  font-size: 14px;
  border-left: none;
  margin-top: 10px;
}

.ads_disabled .social a.btn :hover {
  color: #006699;
  background: none;
  opacity: 1;
}

.ads_disabled .social a.btn img {
  width: 24px;
  height: 24px;
  vertical-align: -7px;
}

.ads_disabled .social a.btn.btn-facebook {
  background: #3b5998;
}

.ads_disabled .social a.btn.btn-twitter {
  background: #4099ff;
}

#center_column {
  background: #fff;
}

#center_column .container {
  width: auto;
}

#center_column > .header {
  position: relative;
  background: #eee;
  padding: 63px 10px 0;
  border-bottom: 1px solid #ddd;
}

#center_column #scroll_indicator {
  padding: 10px;
  position: fixed;
  right: 20px;
  background: #333;
  background: rgba(0, 0, 0, 0.9);
  -webkit-border-radius: 4px;
  -moz-border-radius: 4px;
  border-radius: 4px;
  color: #fff;
  z-index: 10;
  display: none;
}

#center_column #scroll_indicator::after {
  content: " ";
  position: absolute;
  top: 50%;
  right: -10px;
  height: 0;
  width: 0;
  margin-top: -5px;
  border: 5px solid transparent;
  border-left-color: rgba(0, 0, 0, 0.9);
}

#center_column .dashboard.header {
  padding: 0;
  height: 64px;
  border-bottom: none;
}

#center_column .dashboard.header .topbar {
  border-bottom: 1px solid #ddd;
}

#center_column .friend.header {
  background: #eee;
  padding-top: 64px;
  padding-bottom: 0;
  border-bottom: 1px solid #ddd;
}

#center_column .friend.header img {
  display: block;
  float: left;
  border: 3px solid #fff;
  -webkit-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
  width: 50px;
  height: 50px;
  margin-right: 10px;
  margin-bottom: 10px;
}

#center_column .friend.header .user_info {
  display: inline-block;
  padding-top: 4px;
  line-height: 22px;
}

#center_column .friend.header .email {
  font-size: 16px;
  color: #999;
}

#center_column .friend.header .label {
  vertical-align: 1px;
}

#center_column #dashboard_balances {
  position: relative;
  padding: 10px 15px;
}

#center_column #dashboard_balances h2 {
  font-size: 14px;
  text-transform: uppercase;
  color: #999;
  padding: 5px 0;
}

#center_column #dashboard_balances h2 .right {
  float: right;
}

#center_column #dashboard_balances .total_balances {
  font-size: 0px;
  margin: -10px -15px 0;
  padding: 7px 0 2px;
  background: #eee;
  border-bottom: 1px solid #ddd;
  color: #999;
  text-align: center;
}

#center_column #dashboard_balances .total_balances .block {
  display: inline-block;
  width: 175px;
  text-align: center;
  padding: 0 5px;
  border-left: 1px solid #ddd;
  line-height: 16px;
  font-size: 13px;
}

#center_column #dashboard_balances .total_balances .block:first-child {
  border-left: none;
}

#center_column #dashboard_balances .total_balances .positive {
  color: #5bc5a7;
}

#center_column #dashboard_balances .total_balances .negative {
  color: #ff652f;
}

#center_column #dashboard_balances .total_balances .multiple_currencies {
  font-size: 12px;
  border-top: 1px solid #ddd;
  padding-top: 4px;
}

#center_column #dashboard_balances .toggle-chart-list {
  display: inline-block;
  margin-left: -12px;
}

#center_column #dashboard_balances .toggle-chart-list .btn {
  padding: 2px 5px 1px;
  text-align: center;
  display: inline-block;
  font-size: 12px;
  color: #999;
  background: #fff;
  border-color: rgba(0, 0, 0, 0.1);
  text-shadow: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  opacity: 0.75;
}

#center_column #dashboard_balances .toggle-chart-list .btn i {
  font-size: 14px;
  margin-right: 2px;
  vertical-align: -1px;
}

#center_column #dashboard_balances .toggle-chart-list .btn.active {
  background: #eee;
  color: #333;
  opacity: 1;
  border-bottom-color: rgba(0, 0, 0, 0.25);
}

#center_column #dashboard_balances .toggle-chart-list .btn:hover {
  opacity: 1;
}

#center_column #dashboard_balances .summary {
  margin: -5px 0 10px 0;
  text-align: center;
}

#center_column #dashboard_balances .summary .total_summary {
  margin: 0px 0 8px;
  border: 1px solid #d6d6d6;
}

#center_column #dashboard_balances .summary div.img {
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 110px;
  font-size: 12px;
  line-height: 15px;
}

#center_column #dashboard_balances .summary div.img img {
  display: inline-block;
  vertical-align: top;
  width: 83px;
  height: 182px;
  margin-top: 8px;
  margin-bottom: 10px;
}

#center_column #dashboard_balances .summary .balances {
  display: inline-block;
  vertical-align: top;
  width: 208px;
  margin-top: 10px;
}

#center_column #dashboard_balances .summary .balances .bar {
  cursor: pointer;
  display: inline-block;
  margin-bottom: 5px;
  min-width: 27px;
  line-height: 16px;
  height: 41px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #fff;
  padding: 2px 5px;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

#center_column #dashboard_balances .summary .balances .bar .name {
  display: block;
  line-height: 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#center_column #dashboard_balances .summary .balances .bar .amount {
  display: block;
  font-size: 14px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#center_column #dashboard_balances .summary .balances.positive {
  text-align: left;
}

#center_column #dashboard_balances .summary .balances.positive .bar {
  background: #5bc5a7;
}

#center_column #dashboard_balances .summary .balances.negative {
  text-align: right;
}

#center_column #dashboard_balances .summary .balances.negative .bar {
  background: #ff652f;
}

#center_column #dashboard_balances .summary .list {
  text-align: left;
  margin-top: 4px;
}

#center_column #dashboard_balances .summary .list .negatives,
#center_column #dashboard_balances .summary .list .positives {
  float: left;
  width: 250px;
}

#center_column #dashboard_balances .summary .list .negatives {
  padding-right: 14px;
  border-right: 1px solid #eee;
}

#center_column #dashboard_balances .summary .list .positives {
  float: right;
  padding-left: 13px;
  border-left: 1px solid #eee;
  margin-left: -1px;
}

#center_column #dashboard_balances .summary .list .positives li.relationship {
  margin-left: 2px;
}

#center_column #dashboard_balances ul {
  list-style: none;
  margin: 0 -15px;
}

#center_column #dashboard_balances li.relationship img {
  width: 30px;
  height: 30px;
  -webkit-border-radius: 16px;
  -moz-border-radius: 16px;
  border-radius: 16px;
  border: 1px solid #ccc;
  float: left;
  margin: 3px 10px 0 1px;
}

#center_column #dashboard_balances li.relationship > a {
  display: block;
  padding: 7px 13px 7px 13px;
  font-size: 16px;
  text-decoration: none;
  color: #000;
}

#center_column #dashboard_balances li.relationship > a:hover {
  background: #f8f8f8;
}

#center_column #dashboard_balances li.relationship .balance {
  text-align: left;
  font-size: 13px;
  line-height: 16px;
}

#center_column #dashboard_balances li.relationship .balance.owes_me {
  color: #5bc5a7;
}

#center_column #dashboard_balances li.relationship .balance.i_owe {
  color: #ff652f;
}

#center_column #dashboard_balances li.relationship .balance.settled_up {
  padding-top: 10px;
}

#center_column #dashboard_balances li.relationship .balance .amount {
  font-weight: bold;
  font-size: 14px;
}

#center_column #dashboard_balances li.relationship .balance_details {
  font-size: 11px;
  color: #aaa;
  line-height: 14px;
  margin: 4px 0 0;
  padding-left: 17px;
}

#center_column #dashboard_balances li.relationship .balance_details li {
  list-style: circle;
}

#center_column #dashboard_balances li.relationship .balance_details li:hover {
  cursor: pointer;
  color: #777;
  text-decoration: underline;
}

#center_column
  #dashboard_balances
  li.relationship
  .balance_details
  li
  span.negative {
  color: #ff652f;
}

#center_column
  #dashboard_balances
  li.relationship
  .balance_details
  li
  span.positive {
  color: #5bc5a7;
}

#center_column #dashboard_balances #calculator_ad {
  display: block;
  margin-top: 20px;
  border: 1px solid #ddd;
  background: #f6f6f6;
  text-align: center;
  padding: 10px;
}

#center_column #dashboard_balances .calculator.btn {
  width: 216px;
  margin: 15px 10px 10px;
  text-align: right;
  padding: 23px 14px 10px 10px;
  font-size: 14px;
}

#center_column #dashboard_balances .calculator.btn img {
  width: 80px;
  height: 80px;
  float: left;
  margin-top: -13px;
}

#center_column #dashboard_balances .calculator.btn.renters {
  padding-top: 14px;
  width: 210px;
  padding-right: 20px;
}

#center_column #dashboard_balances .calculator.btn.renters img {
  margin-top: -6px;
}

#center_column #recent_activity h2 {
  padding: 15px 0 10px;
}

#center_column #recent_activity a.notification {
  padding: 16px;
  border-bottom: 1px solid #ddd;
  font-size: 16px;
  padding-left: 72px;
  line-height: 21px;
  min-height: 40px;
  position: relative;
}

#center_column #recent_activity a.notification img {
  position: absolute;
  top: 16px;
  left: 16px;
  width: 40px;
  height: 40px;
}

#center_column #recent_activity a.notification img.stamp {
  margin-left: 5px;
  margin-top: 5px;
}

#center_column #recent_activity a.notification img.circle {
  border-radius: 20px;
}

#center_column #recent_activity a.notification img.action_taker {
  top: 42px;
  left: 42px;
  width: 16px;
  height: 16px;
  border-radius: 10px;
  border: 2px solid #fff;
}

#center_column #recent_activity a.notification small {
  font-size: 14px;
}

#center_column #recent_activity a.notification span.description {
  white-space: normal;
  overflow: visible;
}

#center_column #recent_activity a.notification span.net_balance {
  font-size: 14px;
  margin-top: 2px;
}

#center_column #recent_activity a.notification span.added_by {
  font-size: 13px;
  margin-top: 0px;
  margin-top: 1px;
}

#center_column #recent_activity a.notification span.date {
  display: block;
  margin-top: 3px;
  font-size: 13px;
  color: #999;
  line-height: 14px;
}

#center_column #recent_activity #load_more_notifications {
  margin: 15px auto;
  display: block;
  width: 180px;
}

#charts,
#recurring,
#whiteboard,
#relationship_settings,
#relationship_balances {
  display: none;
}

#charts.active,
#recurring.active,
#whiteboard.active,
#relationship_settings.active,
#relationship_balances.active {
  display: block;
}

#expenses_list {
  padding: 0 0 10px;
}

.month-divider {
  padding: 1px 10px;
  background: #eee;
  border-top: 1px solid #f6f6f6;
  border-bottom: 1px solid #ddd;
  font-size: 11px;
}

.month-divider span {
  text-transform: uppercase;
  display: inline-block;
  color: #666;
}

.month-divider a {
  float: right;
  white-space: nowrap;
  margin-left: 10px;
  color: #389bcc;
  opacity: 0.5;
}

.month-divider a:hover {
  opacity: 1;
}

.month-divider.settled {
  display: none;
}

.settle-point {
  text-align: center;
  padding: 10px;
  background: #fff;
  color: #999;
  font-size: 16px;
  line-height: 22px;
}

.settle-point.no-expenses {
  padding: 20px;
}

.settle-point img {
  display: inline-block;
  height: 150px;
  width: 150px;
  margin: 0px 10px 15px;
}

.expense {
  position: relative;
}

.expense > .summary .expense {
  border-bottom: 1px solid #eee;
}

.expense.settled {
  display: none;
}

.expense.current-expense .expense {
  background: #ffc;
}

.expense.current-expense:hover .expense {
  background: #f6f6c6;
}

.expense.current-expense .expense div.actions a.delete {
  background: none;
}

.expense div.main-block {
  cursor: pointer;
  display: inline-block;
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -ms-box-sizing: border-box;
  width: 307px;
  padding: 9px 5px 6px 68px;
  position: relative;
}

.expense div.main-block div.date {
  float: left;
  margin: -1px 10px 0 -65px;
  height: 35px;
  width: 35px;
  text-align: center;
  font-size: 10px;
  text-transform: uppercase;
  color: #999;
  font-weight: normal;
}

.expense div.main-block div.date div.number {
  margin-top: -3px;
  font-size: 20px;
}

.expense div.main-block img.receipt {
  float: left;
  margin: 1px 7px 0 -28px;
  height: 35px;
  width: 35px;
}

.expense div.main-block img.receipt:hover {
  opacity: 0.5;
}

.expense div.main-block img.receipt.group {
  border-radius: 18px;
}

.expense div.main-block > .header {
  font-size: 16px;
  font-weight: bold;
  overflow-x: hidden;
  overflow-y: hidden;
  height: 40px;
  margin-top: 0px;
}

.expense div.main-block > .header .description {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-top: 9px;
  max-width: 200px;
  min-width: 150px;
  display: inline-block;
  padding-bottom: 2px;
}

.expense div.main-block > .header .description.grouped {
  margin-top: 0px;
}

.expense div.main-block > .header .description i {
  height: 19px;
  color: #999;
}

.expense div.main-block > .header .description i.icon-comment {
  color: #999;
}

.expense div.main-block > .header .description .label {
  text-decoration: none;
  font-size: 10px;
  vertical-align: 2px;
  margin-right: 2px;
}

.expense div.main-block > .header .description .label.recurring {
  background: #666;
}

.expense div.main-block > .header .description .label.group {
  display: inline-block;
  background: #eee;
  color: #666;
  font-weight: normal;
  text-shadow: none;
  text-decoration: none;
  max-width: 350px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  border: 1px solid #e6e6e6;
  padding: 0 3px 1px;
}

.expense div.main-block > .header .description .label.group:hover {
  background: #e6e6e6;
  border: 1px solid #ddd;
}

.expense div.main-block > .header .description .label.pending {
  background: #c66;
}

.expense div.main-block > .header .description .label.paypal {
  background: #ddd;
  border: 1px solid #d6d6d6;
  padding: 0 3px 1px;
  color: #777;
  text-shadow: none;
}

.expense div.main-block > .header a {
  color: inherit;
}

.expense div.main-block > .subheader {
  margin-top: -5px;
  font-size: 11px;
  margin-bottom: 0;
  color: #999;
}

.expense div.main-block > .subheader .paid_by {
  margin-right: 5px;
}

.expense div.main-block > .subheader .created_at,
.expense div.main-block > .subheader .updated_at {
  color: #999;
  font-size: 11px;
}

.expense div.main-block button.btn-small {
  padding: 1px 5px;
  vertical-align: 1px;
}

.expense > div.cost {
  text-align: right;
  width: 100px;
  padding: 11px 10px 12px 5px;
  font-size: 12px;
  line-height: 15px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  vertical-align: top;
  color: #aaa;
  cursor: pointer;
}

.expense > div.cost .number {
  color: #000;
  font-weight: bold;
  font-size: 16px;
}

.expense div.you {
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  vertical-align: top;
  padding: 11px 4px 12px;
  font-size: 12px;
  width: 127px;
  color: #aaa;
  line-height: 15px;
}

.expense div.you .positive {
  color: #5bc5a7;
  font-weight: bold;
  font-size: 16px;
}

.expense div.you .negative {
  color: #ff652f;
  font-weight: bold;
  font-size: 16px;
}

.expense div.you i {
  margin-left: 3px;
  color: #ccc;
}

.expense div.you i:hover {
  color: #999;
}

.expense.uninvolved .you {
  background: url("https://www.splitwise.com/assets/adorable/stripe.png") repeat;
}

.expense div.category_picker {
  display: none;
  position: absolute;
  z-index: 10;
  padding: 5px 10px;
  top: 45px;
  left: 39px;
  background: #eee;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #ddd;
  font-size: 14px;
  -webkit-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

.expense div.category_picker img {
  width: 35px;
  height: 35px;
  margin: 4px 2px;
  cursor: pointer;
  opacity: 0.4;
}

.expense div.category_picker img:hover,
.expense div.category_picker img.active {
  border: 2px solid #ccc;
  margin: 2px 0;
  opacity: 1;
}

.expense div.category_picker img.active {
  border: 2px solid #666;
}

.expense div.category_picker span.parent_category {
  display: inline-block;
  width: 120px;
  overflow: hidden;
  white-space: nowrap;
  margin-right: 5px;
}

.expense div.actions {
  display: none;
  vertical-align: top;
  padding-top: 9px;
  font-size: 12px;
  width: 0px;
}

.expense div.actions a.delete {
  color: #c00;
  background: rgba(249, 249, 249, 0.8);
  font-weight: bold;
  font-size: 24px;
  position: absolute;
  top: 12px;
  right: 5px;
  padding: 5px;
}

.expense > .users {
  display: none;
  background: #f8f8f8;
  padding: 15px;
  box-shadow: inset 0 5px 7px -5px rgba(0, 0, 0, 0.25),
    inset 0 -3px 7px -5px rgba(0, 0, 0, 0.25);
}

.expense > .users table {
  table-layout: fixed;
  width: 100%;
  vertical-align: top;
}

.expense > .users td.left {
  width: 265px;
  vertical-align: top;
  padding-right: 15px;
  padding-bottom: 3px;
}

.expense > .users td.right {
  width: 245px;
  padding-top: 4px;
  padding-bottom: 5px;
  vertical-align: top;
}

.expense > .users img.category {
  float: left;
  border: 1px solid #ddd;
  width: 84px;
  height: 84px;
  margin-right: 10px;
}

.expense > .users h3 {
  font-size: 16px;
  font-weight: normal;
  overflow: hidden;
  text-overflow: ellipsis;
}

.expense > .users h4 {
  font-size: 12px;
  margin-top: 8px;
  margin-bottom: 2px;
  text-transform: uppercase;
  color: #999;
}

.expense > .users .cost {
  margin-top: -1px;
  font-size: 20px;
  font-weight: bold;
}

.expense > .users .creation_info {
  margin-top: 3px;
  padding-bottom: 13px;
  padding-left: 96px;
  font-size: 12px;
  color: #999;
}

.expense > .users div.receipt {
  float: right;
  margin-left: 10px;
  margin-bottom: 10px;
}

.expense > .users div.receipt h4 {
  margin-top: -1px;
}

.expense > .users div.receipt img.receipt {
  width: 68px;
  height: 68px;
}

.expense > .users table.shares {
  margin: 5px 0 0;
}

.expense > .users tr.user td {
  padding: 10px 0 0;
}

.expense > .users tr.user td.avatar {
  height: 38px;
  padding-right: 9px;
  width: 38px;
}

.expense > .users tr.user td.avatar img {
  height: 38px;
  width: 38px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
  margin-right: 8px;
  margin-top: -2px;
}

.expense > .users tr.user strong {
  font-weight: bold;
}

.expense div.comment {
  border: 1px solid #ccc;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  padding: 6px 8px;
  background: #fff;
  margin-bottom: 8px;
  word-wrap: break-word;
}

.expense div.comment.notes {
  background: #ffffe9;
}

.expense div.comment.System {
  font-size: 11px;
  background: none;
  color: #666;
  line-height: 16px;
}

.expense div.comment.deleted {
  background: none;
  padding: 0;
  border: none;
  color: #999;
  font-size: 11px;
}

.expense div.comment .header {
  font-weight: bold;
}

.expense div.comment .header .timestamp {
  margin-left: 3px;
  color: #999;
  font-size: 11px;
  font-weight: normal;
}

.expense div.comment .header .delete_comment {
  float: right;
  color: #c00;
  font-weight: bold;
  font-size: 18px;
  margin: -1px -1px 5px 5px;
  cursor: pointer;
}

.expense .comments {
  max-width: 300px;
}

.expense .comments h4 {
  margin-bottom: 4px;
}

.expense .comments textarea {
  width: 200px;
  margin-bottom: 8px;
}

.expense .comments button {
  font-size: 13px;
  padding: 3px 6px;
}

.expense.group {
  cursor: pointer;
  border-bottom: 1px solid #eee;
}

.expense.group div.main-block img.receipt {
  padding: 1px;
  height: 31px;
  width: 31px;
}

.expense.group div.main-block img.receipt:hover {
  opacity: 1;
}

.expense.group div.cost {
  height: 32px;
}

.expense.payment {
  line-height: 0px;
}

.expense.payment .header {
  overflow: visible;
}

.expense.payment div.main-block {
  padding: 7px 0px 9px 8px;
  width: 332px;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

.expense.payment div.main-block > .header {
  padding: 1px 0 0 0;
  margin: 0;
  line-height: 14px;
  height: auto;
  font-size: 12px;
  font-weight: normal;
  overflow: visible;
}

.expense.payment div.main-block > .header .date {
  margin-left: 0;
  padding-left: 0;
  width: 24px;
  height: auto;
  margin-top: -2px;
  font-size: 9px;
  margin-right: 9px;
  line-height: 12px;
}

.expense.payment div.main-block > .header .date .number {
  font-size: 12px;
  line-height: 16px;
}

.expense.payment div.main-block > .header img {
  width: 19px;
  height: 19px;
  margin: 0 8px 0 4px;
}

.expense.payment div.main-block > .header .description {
  margin-top: 3px;
  max-width: 285px;
  vertical-align: middle;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

.expense.payment div.main-block > .header .label {
  vertical-align: 0px;
  margin: 0 3px 0 0;
}

.expense.payment div.cost {
  padding-top: 10px;
  padding-bottom: 10px;
  width: 75px;
}

.expense.payment div.you {
  padding-top: 9px;
  padding-bottom: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.expense.payment .actions a.delete {
  top: 12px;
}

.expense:hover {
  background: #f8f8f8;
}

.expense:hover div.main-block > .header a {
  text-decoration: underline;
}

.expense:hover div.main-block > .header a img {
  text-decoration: inherit;
}

.expense:hover .actions {
  display: inline-block;
}

.expense.payment:hover .actions {
  display: inline;
  float: right;
}

#charts_modal h4 {
  text-align: center;
  font-size: 16px;
  line-height: 26px;
}

#charts_modal h4 a {
  font-size: 14px;
  font-weight: normal;
  display: inline-block;
  text-align: center;
  min-width: 70px;
  padding: 4px 7px;
}

#charts_modal h4 a.previous {
  float: left;
}

#charts_modal h4 a.next {
  float: right;
}

#charts_modal img {
  display: block;
  margin: 10px auto;
}

#charts_modal table {
  margin: 0 auto;
  border: 1px solid #ccc;
}

#charts_modal table th,
#charts_modal table td {
  padding: 3px 15px;
  text-align: right;
}

#charts_modal table th:first-child,
#charts_modal table td:first-child {
  text-align: left;
}

#charts_modal table th.negative,
#charts_modal table td.negative {
  color: #ff652f;
}

#charts_modal table th.positive,
#charts_modal table td.positive {
  color: #5bc5a7;
}

#charts_modal table th.total,
#charts_modal table td.total {
  border-right: 1px solid #ccc;
}

#charts_modal table th.small,
#charts_modal table td.small {
  padding: 3px 5px;
}

#charts_modal table th.summary div,
#charts_modal table td.summary div {
  font-size: 11px;
  color: #999;
  line-height: 14px;
}

#charts_modal table tr.block.top {
  border-bottom: 1px solid #ccc;
}

#charts_modal table tr.block.total {
  border-top: 1px solid #ccc;
}

#charts_modal table tr.block th,
#charts_modal table tr.block td {
  background: #eee;
}

#charts_modal table tr.total td {
  font-weight: bold;
}

#charts_modal table tr.total td.summary div {
  color: inherit;
}

#recurring_list div.bill {
  color: #999;
  margin: 5px 0;
}

#recurring_list div.bill h3 {
  font-size: 16px;
  font-weight: bold;
  color: #333;
  line-height: 20px;
}

#recurring_list div.bill h3 a {
  color: inherit;
  text-decoration: none;
}

#recurring_list div.bill h3 a:hover {
  text-decoration: underline;
}

.whiteboard_instructions {
  color: #666;
  margin: 15px 0 10px;
}

#whiteboard_text {
  cursor: pointer;
  word-break: normal;
}

#whiteboard_text:hover {
  background: #eee;
}

#whiteboard_form {
  width: 98%;
  min-height: 100px;
}

#whiteboard pre {
  margin-top: 5px;
  padding: 5px;
  font-size: 13px;
  font-family: inherit;
}

.modal-backdrop,
.modal-backdrop.fade.in {
  opacity: 0.8;
  background-color: #eee;
}

.modal {
  display: none;
}

.modal .fancy-text {
  font-family: Baskerville, "Baskerville old face", "Hoefler Text", Garamond,
    "Times New Roman", serif;
  font-style: italic;
}

.modal.fade {
  -webkit-transition: e("opacity .3s linear");
  -moz-transition: e("opacity .3s linear");
  -ms-transition: e("opacity .3s linear");
  -o-transition: e("opacity .3s linear");
  transition: e("opacity .3s linear");
  top: 50%;
  opacity: 0;
}

.modal.fade.in {
  opacity: 1;
}

.modal.transparent {
  background: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  border: none;
}

#send_reminder.modal #reminder_summary {
  margin-left: 20px;
  font-size: 12px;
  color: #999;
}

#send_reminder.modal textarea {
  width: 97%;
  height: 200px;
  margin-top: 10px;
}

#user_summary.modal button.close {
  margin-top: -8px;
  z-index: 9999;
  position: relative;
}

#user_summary.modal .bio {
  position: relative;
  min-height: 50px;
  font-size: 18px;
}

#user_summary.modal .bio img.avatar {
  float: left;
  border: 3px solid #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  min-width: 25px;
  min-height: 25px;
  max-width: 75px;
  max-height: 75px;
  height: auto;
  width: auto;
  margin-right: 10px;
  margin-bottom: 15px;
}

#user_summary.modal .bio div.name {
  font-size: 24px;
  padding-top: 1px;
  margin-bottom: 7px;
  margin-right: 20px;
  font-weight: bold;
}

#user_summary.modal .bio div.email {
  color: #999;
  font-size: 14px;
}

#user_summary.modal .bio div.actions {
  margin: 10px 0 15px;
}

#user_summary.modal div.balance_summary {
  border-top: 1px solid #ddd;
  padding-top: 15px;
  clear: both;
  padding-left: 280px;
}

#user_summary.modal div.balance_summary .user_summary_chart_container {
  float: left;
  width: 280px;
  margin-left: -280px;
  margin-right: 20px;
}

#user_summary.modal
  div.balance_summary
  .user_summary_chart_container
  .chart_label {
  font-size: 12px;
  padding-left: 3px;
  color: #999;
}

#user_summary.modal
  div.balance_summary
  .user_summary_chart_container
  #user_summary_chart {
  width: 280px;
  height: 200px;
}

#user_summary.modal div.balance_summary .balance {
  line-height: 20px;
  font-size: 16px;
  color: #999;
}

#user_summary.modal div.balance_summary .balance.owes_me {
  color: #5bc5a7;
}

#user_summary.modal div.balance_summary .balance.i_owe {
  color: #ff652f;
}

#user_summary.modal div.balance_summary .balance .amount {
  font-size: 20px;
  font-weight: bold;
}

#user_summary.modal div.balance_summary h4 {
  margin: 15px 0 10px;
}

#user_summary.modal div.balance_summary ul {
  padding-left: 10px;
}

#user_summary.modal div.balance_summary ul li {
  margin-left: 15px;
  list-style: disc;
}

#user_summary.modal div.balance_summary .btn {
  display: inline-block;
  margin: 2px 0 8px;
}

#settle_up {
  font-size: 14px;
  width: 750px;
  margin-left: -375px;
}

#settle_up #simplified_toggle {
  position: absolute;
  top: 14px;
  right: 40px;
  width: 300px;
  text-align: right;
}

#settle_up #simplified_toggle a {
  text-transform: uppercase;
}

#settle_up #simplified_toggle i {
  padding-left: 2px;
  font-size: 18px;
  vertical-align: -2px;
  cursor: pointer;
  color: #999;
}

#settle_up #simplified_toggle i:hover {
  color: #666;
}

#settle_up .slider {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 20px;
  border-radius: 6px;
  background: #c99;
  text-align: center;
  text-transform: uppercase;
  text-shadow: 0 1px 0 #fff;
}

#settle_up .slider .indicator {
  position: absolute;
  top: -5px;
  left: -5px;
  height: 30px;
  width: 30px;
  border-radius: 15px;
  background: #ccc;
}

#settle_up .slider .simplified {
  display: none;
}

#settle_up .slider.simplified {
  background: #9c9;
}

#settle_up .slider.simplified .original {
  display: none;
}

#settle_up .slider.simplified .simplified {
  display: block;
}

#settle_up .slider.simplified .indicator {
  left: auto;
  right: -5px;
}

#settle_up table {
  margin: -5px -5px -10px;
  width: 101%;
}

#settle_up table tr {
  border-bottom: 10px solid #fff;
}

#settle_up table tr:hover {
  background: #eee;
}

#settle_up table tr:hover ul li {
  color: #333;
}

#settle_up table td {
  vertical-align: top;
  padding: 5px 10px 5px;
  line-height: 18px;
  text-align: left;
}

#settle_up table td strong.name {
  font-size: 16px;
  line-height: 18px;
  vertical-align: text-bottom;
}

#settle_up table td .amount {
  font-size: 20px;
  font-weight: bold;
  line-height: 18px;
  vertical-align: text-bottom;
}

#settle_up table td.avatar {
  width: 50px;
}

#settle_up table td.name {
  line-height: 22px;
  padding-left: 0;
}

#settle_up table img {
  border: 1px solid #ccc;
  height: 40px;
  width: 40px;
  -webkit-border-radius: 21px;
  -moz-border-radius: 21px;
  border-radius: 21px;
}

#settle_up table h3 {
  font-weight: bold;
  font-size: 16px;
  color: #000;
}

#settle_up table h3 img {
  position: absolute;
  left: 0px;
  top: 0px;
  border: 3px solid #fff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  height: 50px;
  width: 50px;
}

#settle_up table h3 .dash {
  font-weight: normal;
  color: #999;
}

#settle_up table h3 .balance {
  font-size: 14px;
  font-weight: normal;
}

#settle_up table h3 .balance .amount {
  font-weight: bold;
  font-size: 20px;
}

#settle_up table ul {
  margin: 0;
}

#settle_up table ul li {
  list-style: disc;
  margin-left: 20px;
  margin-right: 0px;
  color: #999;
  padding: 2px 0 2px 0;
}

#settle_up table ul.simplified_repayments {
  display: none;
}

#settle_up table .owes {
  color: #ff652f;
}

#settle_up table .gets_back {
  color: #5bc5a7;
}

#settle_up table .settled_up {
  color: #999;
}

#settle_up .repayment {
  padding: 10px;
}

#settle_up .repayment img {
  border: 2px solid #fff;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  height: 25px;
  width: 25px;
  margin: 0 2px;
}

#settle_up .repayment a.btn {
  padding: 3px 5px;
  margin-left: 5px;
  margin-top: 3px;
}

#settle_up .repayment:hover {
  background: rgba(0, 0, 0, 0.1);
}

#add_bill,
#settle_up_form {
  font-size: 14px;
  width: 350px;
  min-height: 480px;
  margin-left: -175px;
  overflow: visible;
  background: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#add_bill .btn-cancel,
#settle_up_form .btn-cancel {
  background: #f6f6f6;
  color: #333;
}

#add_bill .btn-cancel:hover,
#settle_up_form .btn-cancel:hover {
  background: #e9e9e9;
  color: #333;
}

#add_bill .btn-mint,
#settle_up_form .btn-mint {
  background: #5cc5a7;
  color: #fff;
  text-shadow: 0 -1px 0px #318a71;
}

#add_bill .btn-mint:hover,
#settle_up_form .btn-mint:hover {
  background: #41b795;
  color: #fff;
}

#add_bill .relative-container,
#settle_up_form .relative-container {
  position: relative;
  min-height: 480px;
}

#add_bill .main-window,
#add_bill .subview,
#settle_up_form .main-window,
#settle_up_form .subview {
  background: #fff;
  width: 350px;
  border: 1px solid #999;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
}

#add_bill .main-window header,
#add_bill .subview header,
#settle_up_form .main-window header,
#settle_up_form .subview header {
  background: #5cc5a7;
  color: #fff;
  padding: 10px;
  border-bottom: 1px solid #36977b;
  text-shadow: 0 -1px 0 #318a71;
  font-size: 18px;
  font-weight: bold;
}

#add_bill .main-window header a.dismiss,
#add_bill .subview header a.dismiss,
#settle_up_form .main-window header a.dismiss,
#settle_up_form .subview header a.dismiss {
  float: right;
  font-size: 28px;
  margin-top: -3px;
  color: #fff;
  text-decoration: none;
}

#add_bill .main-window header a.dismiss:hover,
#add_bill .subview header a.dismiss:hover,
#settle_up_form .main-window header a.dismiss:hover,
#settle_up_form .subview header a.dismiss:hover {
  color: #cdede4;
}

#add_bill .main-window .with_field,
#add_bill .subview .with_field,
#settle_up_form .main-window .with_field,
#settle_up_form .subview .with_field {
  position: relative;
  padding: 4px;
  border-bottom: 1px solid #eee;
  padding-left: 98px;
  max-height: 250px;
  overflow-y: auto;
}

#add_bill .main-window .with_field .with,
#add_bill .subview .with_field .with,
#settle_up_form .main-window .with_field .with,
#settle_up_form .subview .with_field .with {
  position: absolute;
  left: 10px;
  top: 11px;
}

#add_bill .main-window .with_field.group,
#add_bill .subview .with_field.group,
#settle_up_form .main-window .with_field.group,
#settle_up_form .subview .with_field.group {
  padding-left: 44px;
}

#add_bill .main-window .with_field ::-webkit-input-placeholder,
#add_bill .subview .with_field ::-webkit-input-placeholder,
#settle_up_form .main-window .with_field ::-webkit-input-placeholder,
#settle_up_form .subview .with_field ::-webkit-input-placeholder {
  color: #ddd;
}

#add_bill .main-window .body,
#add_bill .subview .body,
#settle_up_form .main-window .body,
#settle_up_form .subview .body {
  max-height: 435px;
  position: relative;
  padding: 10px;
  text-align: center;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  overflow: hidden;
}

#add_bill .main-window .body.inactive,
#add_bill .subview .body.inactive,
#settle_up_form .main-window .body.inactive,
#settle_up_form .subview .body.inactive {
  height: 0px;
  max-height: 0px;
  padding: 0 10px;
  margin-bottom: -1px;
}

#add_bill .main-window .body .overlay,
#add_bill .subview .body .overlay,
#settle_up_form .main-window .body .overlay,
#settle_up_form .subview .body .overlay {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: #fff;
  z-index: 1;
}

#add_bill .main-window .body .main_fields,
#add_bill .subview .body .main_fields,
#settle_up_form .main-window .body .main_fields,
#settle_up_form .subview .body .main_fields {
  position: relative;
  width: 265px;
  margin: 5px auto;
  text-align: right;
}

#add_bill .main-window .body .main_fields img.category,
#add_bill .subview .body .main_fields img.category,
#settle_up_form .main-window .body .main_fields img.category,
#settle_up_form .subview .body .main_fields img.category {
  float: left;
  width: 64px;
  height: 64px;
  margin: 10px 16px 10px 0;
  border-radius: 4px;
  cursor: pointer;
  -webkit-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}

#add_bill .main-window .body .main_fields img.category:hover,
#add_bill .subview .body .main_fields img.category:hover,
#settle_up_form .main-window .body .main_fields img.category:hover,
#settle_up_form .subview .body .main_fields img.category:hover {
  opacity: 0.6;
}

#add_bill .main-window .body .main_fields div.cost_container,
#add_bill .subview .body .main_fields div.cost_container,
#settle_up_form .main-window .body .main_fields div.cost_container,
#settle_up_form .subview .body .main_fields div.cost_container {
  position: relative;
  width: 181px;
  text-align: left;
  display: inline-block;
  border-bottom: 1px dashed #ccc;
  white-space: nowrap;
}

#add_bill .main-window .body .main_fields div.cost_container span.currency_code,
#add_bill .subview .body .main_fields div.cost_container span.currency_code,
#settle_up_form
  .main-window
  .body
  .main_fields
  div.cost_container
  span.currency_code,
#settle_up_form
  .subview
  .body
  .main_fields
  div.cost_container
  span.currency_code {
  cursor: pointer;
  font-size: 20px;
  color: #333;
  display: inline-block;
  padding: 15px 3px 7px;
  vertical-align: bottom;
  text-decoration: none;
}

#add_bill
  .main-window
  .body
  .main_fields
  div.cost_container
  span.currency_code:hover,
#add_bill
  .subview
  .body
  .main_fields
  div.cost_container
  span.currency_code:hover,
#settle_up_form
  .main-window
  .body
  .main_fields
  div.cost_container
  span.currency_code:hover,
#settle_up_form
  .subview
  .body
  .main_fields
  div.cost_container
  span.currency_code:hover {
  color: #999;
  background: #f9f9f9;
}

#add_bill .main-window .body .main_fields input,
#add_bill .subview .body .main_fields input,
#settle_up_form .main-window .body .main_fields input,
#settle_up_form .subview .body .main_fields input {
  outline: none;
  border: none !important;
  box-shadow: none !important;
  text-align: left;
  width: 177px;
  color: #333;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  padding-bottom: 2px;
}

#add_bill .main-window .body .main_fields input.description,
#add_bill .subview .body .main_fields input.description,
#settle_up_form .main-window .body .main_fields input.description,
#settle_up_form .subview .body .main_fields input.description {
  font-size: 20px;
  height: 24px;
  line-height: 24px;
  margin-top: 1px;
  margin-bottom: 3px;
  padding-left: 3px;
  padding-right: 3px;
  border-bottom: 1px dashed #ccc !important;
}

#add_bill .main-window .body .main_fields input.cost,
#add_bill .subview .body .main_fields input.cost,
#settle_up_form .main-window .body .main_fields input.cost,
#settle_up_form .subview .body .main_fields input.cost {
  font-size: 36px;
  font-weight: bold;
  height: 40px;
  line-height: 40px;
  width: 120px;
  padding-bottom: 0;
  margin-bottom: 0;
  vertical-align: bottom;
}

#add_bill .main-window .body .main_fields input::-webkit-input-placeholder,
#add_bill .main-window .body .main_fields input.placeholder,
#add_bill .subview .body .main_fields input::-webkit-input-placeholder,
#add_bill .subview .body .main_fields input.placeholder,
#settle_up_form
  .main-window
  .body
  .main_fields
  input::-webkit-input-placeholder,
#settle_up_form .main-window .body .main_fields input.placeholder,
#settle_up_form .subview .body .main_fields input::-webkit-input-placeholder,
#settle_up_form .subview .body .main_fields input.placeholder {
  color: #ddd;
}

#add_bill .main-window .body .human_summary,
#add_bill .subview .body .human_summary,
#settle_up_form .main-window .body .human_summary,
#settle_up_form .subview .body .human_summary {
  clear: both;
  margin: 15px 0 10px;
  font-size: 14px;
}

#add_bill .main-window .body .human_summary a,
#add_bill .subview .body .human_summary a,
#settle_up_form .main-window .body .human_summary a,
#settle_up_form .subview .body .human_summary a {
  display: inline-block;
  background: #f6f6f6;
  -webkit-border-radius: 10px;
  -moz-border-radius: 10px;
  border-radius: 10px;
  height: 18px;
  line-height: 16px;
  padding: 2px 5px 0;
  border: 1px dashed #ccc;
  vertical-align: middle;
  color: #5cc5a7;
  margin: 0px;
  font-size: inherit;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  white-space: nowrap;
}

#add_bill .main-window .body .human_summary a:hover,
#add_bill .subview .body .human_summary a:hover,
#settle_up_form .main-window .body .human_summary a:hover,
#settle_up_form .subview .body .human_summary a:hover {
  background: #eee;
}

#add_bill .main-window .body .human_summary a:active,
#add_bill .subview .body .human_summary a:active,
#settle_up_form .main-window .body .human_summary a:active,
#settle_up_form .subview .body .human_summary a:active {
  background: #e6e6e6;
}

#add_bill .main-window .body .human_summary span,
#add_bill .subview .body .human_summary span,
#settle_up_form .main-window .body .human_summary span,
#settle_up_form .subview .body .human_summary span {
  vertical-align: middle;
}

#add_bill .main-window .body .human_summary .details,
#add_bill .subview .body .human_summary .details,
#settle_up_form .main-window .body .human_summary .details,
#settle_up_form .subview .body .human_summary .details {
  margin: 3px 0;
  font-size: 14px;
}

#add_bill .main-window .body .slim-button,
#add_bill .subview .body .slim-button,
#settle_up_form .main-window .body .slim-button,
#settle_up_form .subview .body .slim-button {
  display: inline-block;
  background: #f6f6f6;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  height: 24px;
  line-height: 24px;
  width: 140px;
  padding: 0 5px;
  border: 1px solid #ccc;
  color: #666;
  margin: 5px;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#add_bill .main-window .body .slim-button:hover,
#add_bill .subview .body .slim-button:hover,
#settle_up_form .main-window .body .slim-button:hover,
#settle_up_form .subview .body .slim-button:hover {
  background: #eee;
}

#add_bill .main-window .body .slim-button:active,
#add_bill .subview .body .slim-button:active,
#settle_up_form .main-window .body .slim-button:active,
#settle_up_form .subview .body .slim-button:active {
  background: #e6e6e6;
}

#add_bill .main-window .body .slim-button.selected,
#add_bill .subview .body .slim-button.selected,
#settle_up_form .main-window .body .slim-button.selected,
#settle_up_form .subview .body .slim-button.selected {
  background: #5cc5a7;
  border: 1px solid #36977b;
  color: #fff;
  text-shadow: 0 -1px #389d80;
}

#add_bill .main-window .body .slim-button.selected:hover,
#add_bill .subview .body .slim-button.selected:hover,
#settle_up_form .main-window .body .slim-button.selected:hover,
#settle_up_form .subview .body .slim-button.selected:hover {
  background: #49be9d;
}

#add_bill .main-window .body .slim-button.selected:active,
#add_bill .subview .body .slim-button.selected:active,
#settle_up_form .main-window .body .slim-button.selected:active,
#settle_up_form .subview .body .slim-button.selected:active {
  background: #3eb08f;
}

#add_bill .main-window .body .slim-button.wide,
#add_bill .subview .body .slim-button.wide,
#settle_up_form .main-window .body .slim-button.wide,
#settle_up_form .subview .body .slim-button.wide {
  width: 240px;
}

#add_bill .main-window footer,
#add_bill .subview footer,
#settle_up_form .main-window footer,
#settle_up_form .subview footer {
  letter-spacing: 3px;
  border-top: 1px solid #eee;
  text-align: right;
  padding: 8px 10px;
}

#add_bill .main-window footer a,
#add_bill .subview footer a,
#settle_up_form .main-window footer a,
#settle_up_form .subview footer a {
  letter-spacing: 0;
  font-size: 14px;
}

#add_bill .main-window footer button,
#add_bill .subview footer button,
#settle_up_form .main-window footer button,
#settle_up_form .subview footer button {
  letter-spacing: 0;
}

#add_bill .main-window,
#settle_up_form .main-window {
  position: relative;
  z-index: 1;
}

#add_bill .subview,
#settle_up_form .subview {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  opacity: 0;
  zoom: 1;
  pointer-events: none;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -ms-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
}

#add_bill .subview.active,
#settle_up_form .subview.active {
  left: 370px;
  opacity: 1;
  pointer-events: auto;
}

#add_bill .subview .body,
#settle_up_form .subview .body {
  overflow: auto;
}

#add_bill #choose_category li,
#settle_up_form #choose_category li {
  list-style: none;
  width: 154px;
  border-bottom: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

#add_bill #choose_category .body,
#settle_up_form #choose_category .body {
  background: #eee;
}

#add_bill #choose_category .body > ul,
#settle_up_form #choose_category .body > ul {
  overflow: visible;
  width: 175px;
  text-align: left;
  margin: -10px;
}

#add_bill #choose_category .body > ul > li,
#settle_up_form #choose_category .body > ul > li {
  display: block;
  padding: 14px 10px 15px;
  font-size: 14px;
  border-right: 1px solid #bbb;
}

#add_bill #choose_category .body > ul > li i,
#settle_up_form #choose_category .body > ul > li i {
  float: right;
}

#add_bill #choose_category .body > ul > li > ul,
#settle_up_form #choose_category .body > ul > li > ul {
  display: none;
  position: absolute;
  margin: 0;
  top: 0;
  left: 175px;
  width: 175px;
  height: 100%;
  background: #eee;
}

#add_bill #choose_category .body > ul > li > ul > li,
#settle_up_form #choose_category .body > ul > li > ul > li {
  width: 155px;
  padding: 8px 10px 9px;
  background: #eee;
  font-weight: normal;
}

#add_bill #choose_category .body > ul > li > ul > li.selected,
#settle_up_form #choose_category .body > ul > li > ul > li.selected {
  background: #ddd;
  border-bottom: 1px solid #ccc;
  font-weight: bold;
}

#add_bill #choose_category .body > ul > li > ul > li:hover,
#settle_up_form #choose_category .body > ul > li > ul > li:hover {
  background: #ccc;
  border-bottom: 1px solid #bbb;
}

#add_bill #choose_category .body > ul > li:hover,
#add_bill #choose_category .body > ul > li.selected,
#settle_up_form #choose_category .body > ul > li:hover,
#settle_up_form #choose_category .body > ul > li.selected {
  background: #ddd;
  border-bottom: 1px solid #ccc;
}

#add_bill #choose_category .body > ul > li:hover > ul,
#add_bill #choose_category .body > ul > li.selected > ul,
#settle_up_form #choose_category .body > ul > li:hover > ul,
#settle_up_form #choose_category .body > ul > li.selected > ul {
  display: block;
  z-index: 0;
}

#add_bill #choose_category .body > ul > li:hover,
#settle_up_form #choose_category .body > ul > li:hover {
  background: #ccc;
  border-bottom: 1px solid #bbb;
}

#add_bill #choose_category .body > ul > li:hover > ul,
#settle_up_form #choose_category .body > ul > li:hover > ul {
  z-index: 1;
}

#add_bill #choose_category .body > ul > li.selected,
#settle_up_form #choose_category .body > ul > li.selected {
  font-weight: bold;
}

#add_bill #choose_currency,
#add_bill #choose_group,
#settle_up_form #choose_currency,
#settle_up_form #choose_group {
  width: 135px;
}

#add_bill #choose_currency ul,
#add_bill #choose_group ul,
#settle_up_form #choose_currency ul,
#settle_up_form #choose_group ul {
  margin: -10px;
}

#add_bill #choose_currency ul li,
#add_bill #choose_group ul li,
#settle_up_form #choose_currency ul li,
#settle_up_form #choose_group ul li {
  padding: 10px;
  list-style: none;
  cursor: pointer;
  text-align: left;
  border-bottom: 1px solid #eee;
}

#add_bill #choose_currency ul li:hover,
#add_bill #choose_group ul li:hover,
#settle_up_form #choose_currency ul li:hover,
#settle_up_form #choose_group ul li:hover {
  background: #ddd;
}

#add_bill #choose_currency ul li.selected,
#add_bill #choose_group ul li.selected,
#settle_up_form #choose_currency ul li.selected,
#settle_up_form #choose_group ul li.selected {
  font-weight: bold;
  background: #eee;
  border-bottom: 1px solid #ddd;
}

#add_bill #choose_group,
#settle_up_form #choose_group {
  width: 250px;
}

#add_bill #choose_date,
#settle_up_form #choose_date {
  width: 225px;
  overflow: visible;
}

#add_bill #choose_date .body,
#settle_up_form #choose_date .body {
  padding: 3px 5px 5px;
  overflow: visible;
}

#add_bill #choose_date .body .container-for-select,
#settle_up_form #choose_date .body .container-for-select {
  display: inline-block;
  vertical-align: middle;
  margin: 5px 0;
  text-align: left;
}

#add_bill #choose_date #datepicker,
#settle_up_form #choose_date #datepicker {
  position: relative;
}

#add_bill #choose_date #datepicker .datepicker,
#settle_up_form #choose_date #datepicker .datepicker {
  padding: 0;
}

#add_bill #choose_date #datepicker .datepicker span.active,
#add_bill #choose_date #datepicker .datepicker td.active,
#settle_up_form #choose_date #datepicker .datepicker span.active,
#settle_up_form #choose_date #datepicker .datepicker td.active {
  background: #5cc5a7;
}

#add_bill #choose_date #datepicker .datepicker::before,
#add_bill #choose_date #datepicker .datepicker::after,
#settle_up_form #choose_date #datepicker .datepicker::before,
#settle_up_form #choose_date #datepicker .datepicker::after {
  display: none;
}

#add_bill #choose_date #datepicker .dropdown-menu,
#settle_up_form #choose_date #datepicker .dropdown-menu {
  border: none;
  -webkit-border-radius: 0;
  -moz-border-radius: 0;
  border-radius: 0;
  padding-bottom: 5px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#add_bill #choose_date .recurring_options,
#settle_up_form #choose_date .recurring_options {
  clear: both;
  border-top: 1px solid #ddd;
  padding-top: 5px;
}

#add_bill #add_notes .body,
#settle_up_form #add_notes .body {
  text-align: left;
  padding: 15px;
}

#add_bill #add_notes div.upload,
#add_bill #add_notes div.memo,
#settle_up_form #add_notes div.upload,
#settle_up_form #add_notes div.memo {
  margin: -15px -15px 15px;
  padding: 15px;
  border-bottom: 1px solid #eee;
}

#add_bill #add_notes div.upload input[type="file"],
#add_bill #add_notes div.memo input[type="file"],
#settle_up_form #add_notes div.upload input[type="file"],
#settle_up_form #add_notes div.memo input[type="file"] {
  margin: 5px 0;
  height: auto;
  line-height: 1em;
  width: auto;
}

#add_bill #add_notes textarea,
#settle_up_form #add_notes textarea {
  width: auto;
  min-width: 270px;
  margin: 0;
  min-height: 140px;
}

#add_bill #choose_payer,
#settle_up_form #choose_payer {
  width: 300px;
}

#add_bill #choose_payer .body,
#settle_up_form #choose_payer .body {
  text-align: left;
  padding: 0;
}

#add_bill #choose_payer .body > ul,
#settle_up_form #choose_payer .body > ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

#add_bill #choose_payer .body > ul > li,
#settle_up_form #choose_payer .body > ul > li {
  cursor: pointer;
  margin: 0;
  padding: 10px 10px 9px;
  border-bottom: 1px solid #eee;
}

#add_bill #choose_payer .body > ul > li img,
#settle_up_form #choose_payer .body > ul > li img {
  width: 22px;
  height: 22px;
  border: 1px solid #ccc;
  -webkit-border-radius: 12px;
  -moz-border-radius: 12px;
  border-radius: 12px;
  margin-right: 2px;
  margin-top: -2px;
}

#add_bill #choose_payer .body > ul > li:hover,
#settle_up_form #choose_payer .body > ul > li:hover {
  background: #ddd;
}

#add_bill #choose_payer .body > ul > li.selected,
#settle_up_form #choose_payer .body > ul > li.selected {
  background: #eee;
  font-weight: bold;
}

#add_bill #choose_payer .body > ul > li ul,
#settle_up_form #choose_payer .body > ul > li ul {
  border-top: 1px solid #ddd;
  cursor: auto;
  font-weight: normal;
  list-style: none;
  margin: 10px 0 0;
  padding: 0;
}

#add_bill #choose_payer .body > ul > li ul li,
#settle_up_form #choose_payer .body > ul > li ul li {
  list-style: none;
  margin: 0;
  padding: 10px 0 0;
}

#add_bill #choose_payer .body > ul > li ul li:first-child,
#settle_up_form #choose_payer .body > ul > li ul li:first-child {
  font-size: 12px;
  color: #999;
}

#add_bill #choose_payer .body > ul > li ul li div.input-prepend,
#settle_up_form #choose_payer .body > ul > li ul li div.input-prepend {
  margin: 3px 0 1px;
}

#add_bill #choose_split,
#settle_up_form #choose_split {
  width: 350px;
}

#add_bill #choose_split.active.itemized_form.subview,
#settle_up_form #choose_split.active.itemized_form.subview {
  position: fixed;
  top: 5px;
  right: 5px;
  left: 5px;
  bottom: 5px;
  width: auto;
  min-width: 90%;
  z-index: 1000000;
  overflow: scroll;
}

#add_bill #choose_split.active.itemized_form.subview .body,
#settle_up_form #choose_split.active.itemized_form.subview .body {
  max-height: none;
}

#add_bill #choose_split.active.itemized_form.subview .btn-mint.dismiss,
#settle_up_form #choose_split.active.itemized_form.subview .btn-mint.dismiss {
  margin-top: 10px;
}

#add_bill #choose_split.active.itemized_form.subview .iou_buttons,
#settle_up_form #choose_split.active.itemized_form.subview .iou_buttons {
  display: none;
}

#add_bill #choose_split .body,
#settle_up_form #choose_split .body {
  text-align: left;
}

#add_bill #choose_split .split-details,
#settle_up_form #choose_split .split-details {
  padding: 10px;
}

#add_bill #choose_split .split-details #split_method,
#settle_up_form #choose_split .split-details #split_method {
  margin: -5px 0 10px;
  text-align: center;
  display: block;
}

#add_bill #choose_split .split-details #split_method .split_button,
#settle_up_form #choose_split .split-details #split_method .split_button {
  font-size: 24px;
  line-height: 24px;
  padding: 0 8px 4px;
  height: 30px;
}

#add_bill #choose_split .split-details #split_method .split_button.unequal,
#settle_up_form
  #choose_split
  .split-details
  #split_method
  .split_button.unequal {
  font-size: 16px;
  padding-top: 2px;
}

#add_bill #choose_split .split-details #split_method .split_button.percent,
#add_bill #choose_split .split-details #split_method .split_button.adjustment,
#settle_up_form
  #choose_split
  .split-details
  #split_method
  .split_button.percent,
#settle_up_form
  #choose_split
  .split-details
  #split_method
  .split_button.adjustment {
  padding-top: 2px;
  font-size: 20px;
}

#add_bill #choose_split .split-details #split_method .split_button i,
#settle_up_form #choose_split .split-details #split_method .split_button i {
  font-size: 20px;
  padding-top: 1px;
}

#add_bill #choose_split .split-details .split_method,
#settle_up_form #choose_split .split-details .split_method {
  display: none;
}

#add_bill #choose_split .split-details .split_method h3,
#settle_up_form #choose_split .split-details .split_method h3 {
  margin-bottom: 5px;
}

#add_bill #choose_split .split-details .split_method.equal,
#add_bill #choose_split .split-details .split_method.reimbursement,
#settle_up_form #choose_split .split-details .split_method.equal,
#settle_up_form #choose_split .split-details .split_method.reimbursement {
  display: block;
}

#add_bill #choose_split .split-details .split_method.equal .person,
#add_bill #choose_split .split-details .split_method.reimbursement .person,
#settle_up_form #choose_split .split-details .split_method.equal .person,
#settle_up_form
  #choose_split
  .split-details
  .split_method.reimbursement
  .person {
  cursor: pointer;
}

#add_bill #choose_split .split-details .split_method.equal .person:hover,
#add_bill
  #choose_split
  .split-details
  .split_method.reimbursement
  .person:hover,
#settle_up_form #choose_split .split-details .split_method.equal .person:hover,
#settle_up_form
  #choose_split
  .split-details
  .split_method.reimbursement
  .person:hover {
  background: rgba(0, 0, 0, 0.05);
}

#add_bill #choose_split .split-details .split_method.equal .person.nope,
#add_bill #choose_split .split-details .split_method.reimbursement .person.nope,
#settle_up_form #choose_split .split-details .split_method.equal .person.nope,
#settle_up_form
  #choose_split
  .split-details
  .split_method.reimbursement
  .person.nope {
  opacity: 0.3;
}

#add_bill #choose_split .split-details .split_method.equal .person.nope .name,
#add_bill
  #choose_split
  .split-details
  .split_method.equal
  .person.nope
  .subsummary,
#add_bill
  #choose_split
  .split-details
  .split_method.reimbursement
  .person.nope
  .name,
#add_bill
  #choose_split
  .split-details
  .split_method.reimbursement
  .person.nope
  .subsummary,
#settle_up_form
  #choose_split
  .split-details
  .split_method.equal
  .person.nope
  .name,
#settle_up_form
  #choose_split
  .split-details
  .split_method.equal
  .person.nope
  .subsummary,
#settle_up_form
  #choose_split
  .split-details
  .split_method.reimbursement
  .person.nope
  .name,
#settle_up_form
  #choose_split
  .split-details
  .split_method.reimbursement
  .person.nope
  .subsummary {
  text-decoration: line-through;
}

#add_bill #choose_split .split-details .split_method .person,
#settle_up_form #choose_split .split-details .split_method .person {
  padding: 5px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

#add_bill #choose_split .split-details .split_method .person img,
#settle_up_form #choose_split .split-details .split_method .person img {
  margin-right: 5px;
  width: 38px;
  height: 38px;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  border: 1px solid #ccc;
}

#add_bill #choose_split .split-details .split_method .person .name,
#settle_up_form #choose_split .split-details .split_method .person .name {
  display: inline-block;
  max-width: 170px;
  overflow-x: hidden;
  overflow-y: display;
  text-overflow: ellipsis;
  white-space: nowrap;
  vertical-align: middle;
  line-height: 16px;
  min-height: 18px;
}

#add_bill #choose_split .split-details .split_method .person .subsummary,
#settle_up_form #choose_split .split-details .split_method .person .subsummary {
  display: inline-block;
  color: #999;
  font-size: 11px;
}

#add_bill
  #choose_split
  .split-details
  .split_method
  .person
  input[type="checkbox"],
#settle_up_form
  #choose_split
  .split-details
  .split_method
  .person
  input[type="checkbox"] {
  height: 20px;
  width: 20px;
  font-size: 20px;
}

#add_bill #choose_split .split-details .split_method .person .amount,
#settle_up_form #choose_split .split-details .split_method .person .amount {
  float: right;
  margin-top: 8px;
}

#add_bill #choose_split .split-details .split_method .person div.input-prepend,
#add_bill #choose_split .split-details .split_method .person div.input-append,
#settle_up_form
  #choose_split
  .split-details
  .split_method
  .person
  div.input-prepend,
#settle_up_form
  #choose_split
  .split-details
  .split_method
  .person
  div.input-append {
  float: right;
  margin-top: 4px;
  margin-bottom: 2px;
}

#add_bill
  #choose_split
  .split-details
  .split_method
  .person
  div.input-prepend
  input,
#add_bill
  #choose_split
  .split-details
  .split_method
  .person
  div.input-append
  input,
#settle_up_form
  #choose_split
  .split-details
  .split_method
  .person
  div.input-prepend
  input,
#settle_up_form
  #choose_split
  .split-details
  .split_method
  .person
  div.input-append
  input {
  width: 45px;
}

#add_bill #choose_split .split-details .split_method.unequal .name,
#add_bill #choose_split .split-details .split_method.percent .name,
#settle_up_form #choose_split .split-details .split_method.unequal .name,
#settle_up_form #choose_split .split-details .split_method.percent .name {
  max-width: 145px;
}

#add_bill #choose_split .split-details .split_method.unequal .totals,
#add_bill #choose_split .split-details .split_method.percent .totals,
#settle_up_form #choose_split .split-details .split_method.unequal .totals,
#settle_up_form #choose_split .split-details .split_method.percent .totals {
  padding: 5px;
  text-align: left;
  font-size: 16px;
  margin-top: 7px;
}

#add_bill #choose_split .split-details .split_method.unequal .totals .subtotals,
#add_bill #choose_split .split-details .split_method.percent .totals .subtotals,
#settle_up_form
  #choose_split
  .split-details
  .split_method.unequal
  .totals
  .subtotals,
#settle_up_form
  #choose_split
  .split-details
  .split_method.percent
  .totals
  .subtotals {
  float: right;
  margin-top: -7px;
  text-align: right;
}

#add_bill
  #choose_split
  .split-details
  .split_method.unequal
  .totals
  .subtotals
  .owed_total,
#add_bill
  #choose_split
  .split-details
  .split_method.percent
  .totals
  .subtotals
  .owed_total,
#settle_up_form
  #choose_split
  .split-details
  .split_method.unequal
  .totals
  .subtotals
  .owed_total,
#settle_up_form
  #choose_split
  .split-details
  .split_method.percent
  .totals
  .subtotals
  .owed_total {
  font-weight: bold;
  font-size: 16px;
}

#add_bill
  #choose_split
  .split-details
  .split_method.unequal
  .totals
  .subtotals
  .remaining,
#add_bill
  #choose_split
  .split-details
  .split_method.percent
  .totals
  .subtotals
  .remaining,
#settle_up_form
  #choose_split
  .split-details
  .split_method.unequal
  .totals
  .subtotals
  .remaining,
#settle_up_form
  #choose_split
  .split-details
  .split_method.percent
  .totals
  .subtotals
  .remaining {
  font-size: 12px;
  color: #aaa;
}

#settle_up_form .main-window .body .overlay {
  text-align: center;
}

#settle_up_form .main-window .body .overlay .prompt {
  margin: 16px 0 8px;
  color: #666;
  font-size: 16px;
}

#settle_up_form .main-window .body .overlay .btn-payment {
  line-height: 30px;
  margin: 6px auto;
  padding: 3px 0;
  background-image: none;
  position: relative;
  padding: 0;
}

#settle_up_form .main-window .body .overlay .btn-payment img {
  height: 30px;
}

#settle_up_form .main-window .body .overlay .btn-payment .filter {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0);
  padding: 3px 0;
}

#settle_up_form .main-window .body .overlay .btn-payment .filter:hover {
  background: rgba(0, 0, 0, 0.05);
}

#settle_up_form .main-window .body .overlay button,
#settle_up_form .main-window .body .overlay a.drone {
  width: 290px;
  font-size: 16px;
  margin: 8px 0;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

#settle_up_form .main-window .body .overlay .fine_print {
  position: absolute;
  bottom: 10px;
  left: 10px;
  right: 10px;
  font-size: 11px;
  color: #aaa;
  line-height: 14px;
}

#settle_up_form .main-window .body .main_fields {
  text-align: center;
  font-size: 16px;
  margin-bottom: 10px;
  margin-left: 10px;
  margin-right: 10px;
  width: auto;
}

#settle_up_form .main-window .body .main_fields div.images {
  margin-bottom: 15px;
}

#settle_up_form .main-window .body .main_fields div.images img.avatar {
  width: 58px;
  height: 58px;
  -webkit-border-radius: 30px;
  -moz-border-radius: 30px;
  border-radius: 30px;
  border: 1px solid #999;
  -webkit-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3);
  box-shadow: inset 0 1px 4px rgba(0, 0, 0, 0.3);
}

#settle_up_form .main-window .body .main_fields div.images img.arrow {
  width: 32px;
  margin: 0 5px;
}

#settle_up_form .main-window .body .main_fields div.cost_container {
  margin-bottom: 5px;
  width: auto;
}

#settle_up_form .main-window .body .main_fields div.cost_container input.cost {
  width: auto;
  max-width: 220px;
}

#settle_up_form .main-window .body .human_summary {
  margin-bottom: 2px;
  font-size: 16px;
}

#settle_up_form .submit {
  transition: background-color 300ms linear;
}

#invite_friends {
  overflow: visible;
}

#invite_friends h3 {
  font-size: 24px;
  margin-bottom: 20px;
}

#invite_friends h3 img {
  width: 30px;
  height: 30px;
  vertical-align: bottom;
}

#invite_friends div.padding_wrapper {
  padding: 20px 25px;
  position: relative;
  min-height: 103px;
}

#invite_friends div.padding_wrapper div.field_label {
  margin-top: 15px;
}

#invite_friends div.padding_wrapper div.to {
  position: relative;
  padding-left: 8px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px 0 10px;
}

#invite_friends div.padding_wrapper div.to div.to_label {
  display: inline-block;
  font-size: 14px;
  font-weight: bold;
  vertical-align: top;
  margin-top: 10px;
  margin-right: -5px;
}

#invite_friends div.padding_wrapper div.to ul.token-input-list-mac {
  display: inline-block;
  padding: 5px;
  border: none;
  margin: 0;
}

#invite_friends div.padding_wrapper ul.token-input-list-mac {
  padding: 4px 4px 5px 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin: 5px 0 20px;
}

#invite_friends div.padding_wrapper textarea {
  border: 1px solid #e6e6e6;
  margin: 0 0 20px;
  padding: 8px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  width: 492px;
  min-height: 54px;
  font-size: 14px;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
}

#invite_friends div.padding_wrapper textarea:focus {
  border-color: #ccc;
}

#invite_friends div.padding_wrapper a.see_invite {
  display: inline-block;
  margin-top: 6px;
}

#invite_friends div.padding_wrapper button.close {
  position: absolute;
  top: 25px;
  right: 25px;
  font-size: 28px;
  display: inline-block;
  font-weight: bold;
}

#invite_friends div.padding_wrapper .submit {
  width: auto;
  font-size: 18px;
  float: right;
}

#invite_friends div.friends_on_splitwise {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  padding: 20px;
  margin-top: 20px;
  background: rgba(255, 255, 255, 0.8);
  opacity: 0;
  -webkit-transition: opacity 0.3s linear;
  -moz-transition: opacity 0.3s linear;
  -ms-transition: opacity 0.3s linear;
  -o-transition: opacity 0.3s linear;
  transition: opacity 0.3s linear;
}

#invite_friends div.friends_on_splitwise.active {
  opacity: 1;
}

#first_launch {
  position: fixed;
  overflow: auto;
  display: none;
  z-index: 1029;
  top: 33px;
  left: 0;
  right: 0;
  bottom: 0;
  background: #fff;
  text-align: center;
  padding: 30px;
}

#first_launch div.padding_wrapper {
  margin: 0 auto;
  width: 540px;
  padding-left: 160px;
  position: relative;
}

#first_launch img.person {
  position: absolute;
  top: 0;
  left: 0;
  height: 335px;
  width: 153px;
}

#first_launch div.big_buttons {
  font-size: 14px;
}

#first_launch div.big_buttons .main_buttons a.btn,
#first_launch div.big_buttons .keep_track_of_ious a.btn {
  display: block;
  width: 270px;
  font-size: 24px;
  margin: 0 auto 16px;
  text-align: left;
}

#first_launch div.big_buttons i {
  float: left;
  margin-right: 10px;
  width: 34px;
  height: 34px;
  font-size: 34px;
  text-align: center;
}

#first_launch h1 {
  font-size: 40px;
}

#first_launch h1 img {
  width: 50px;
  height: 50px;
  vertical-align: bottom;
  margin-right: 2px;
}

#first_launch .invite_header {
  font-size: 14px;
  margin-bottom: 3px;
}

#first_launch .invite_header span {
  display: inline-block;
  text-align: left;
}

#first_launch .invite_header span.name {
  margin-left: 35px;
  width: 134px;
}

#first_launch .invite_header span.email {
  width: 228px;
}

#first_launch .invite {
  margin-bottom: 10px;
}

#first_launch .invite img {
  height: 26px;
  width: 26px;
  -webkit-border-radius: 13px;
  -moz-border-radius: 13px;
  border-radius: 13px;
  margin-right: 5px;
}

#first_launch .invite input {
  font-size: 16px;
  height: 16px;
  padding: 8px 5px;
  vertical-align: middle;
  margin-bottom: 0;
}

#first_launch .invite input.name {
  width: 120px;
  margin-right: 5px;
}

#first_launch .invite input.email {
  width: 200px;
  margin-right: 5px;
}

#first_launch .invite span {
  display: inline-block;
  vertical-align: middle;
  color: #c00;
  text-decoration: none;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
}

#first_launch .invite span:hover {
  text-decoration: underline;
}

#sharing_prompt,
#share_to_remove_ads {
  font-size: 16px;
}

#sharing_prompt .modal-body,
#share_to_remove_ads .modal-body {
  overflow: hidden;
}

#sharing_prompt img.person,
#share_to_remove_ads img.person {
  float: left;
  width: 203px;
  height: 446px;
  margin-right: 15px;
}

#sharing_prompt .prompt,
#share_to_remove_ads .prompt {
  position: absolute;
  top: 120px;
  left: 235px;
  display: none;
}

#sharing_prompt .prompt.start,
#share_to_remove_ads .prompt.start {
  display: block;
}

#sharing_prompt .rating,
#share_to_remove_ads .rating {
  margin: 50px 0 0px;
  font-size: 60px;
  color: #ccc;
  cursor: pointer;
}

#sharing_prompt p,
#share_to_remove_ads p {
  line-height: 22px;
}

#sharing_prompt p.rating_description,
#share_to_remove_ads p.rating_description {
  height: 16px;
  font-size: 16px;
  margin: 20px 0 0;
  color: #999;
  text-align: left;
}

#sharing_prompt a.btn-cancel,
#share_to_remove_ads a.btn-cancel {
  position: absolute;
  bottom: 15px;
  right: 15px;
}

#sharing_prompt .social a.btn,
#share_to_remove_ads .social a.btn {
  color: #fff;
  text-shadow: none;
  font-size: 18px;
  padding: 5px 10px 3px 3px;
  margin-bottom: 10px;
  opacity: 0.9;
}

#sharing_prompt .social a.btn:hover,
#share_to_remove_ads .social a.btn:hover {
  opacity: 1;
}

#sharing_prompt .social a.btn.btn-facebook,
#share_to_remove_ads .social a.btn.btn-facebook {
  background: #3b5998;
}

#sharing_prompt .social a.btn.btn-twitter,
#share_to_remove_ads .social a.btn.btn-twitter {
  background: #4099ff;
}

#sharing_prompt .social img,
#share_to_remove_ads .social img {
  width: 34px;
  height: 34px;
  margin-right: 0px;
  margin-top: -2px;
}

#subscribe-to-pro {
  font-size: 16px;
  line-height: 24px;
  width: 560px;
  margin-left: -280px;
  max-height: 502px;
  margin-top: -250px;
  overflow: visible;
}

#subscribe-to-pro.non-modal {
  margin: 40px auto;
}

#subscribe-to-pro.non-modal .modal-body {
  box-shadow: none;
  border: 1px solid #ccc;
}

#subscribe-to-pro .big_pic {
  float: left;
  width: 170px;
  height: 431px;
  margin: 34px 30px 34px 0;
}

#subscribe-to-pro .modal-body {
  padding: 15px 15px 10px;
  max-height: 500px;
  width: 320px;
  background: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.5);
}

#subscribe-to-pro .green-header {
  background: #444;
  color: #fff;
  margin: -16px -16px 12px;
  border-bottom: 1px solid #333;
  padding: 16px 15px 5px;
}

#subscribe-to-pro table {
  width: 100%;
}

#subscribe-to-pro h1 {
  margin: -5px 0 5px;
}

#subscribe-to-pro h1 img {
  width: 36px;
  height: 36px;
  vertical-align: -3px;
  margin-right: 2px;
}

#subscribe-to-pro h4 {
  text-transform: uppercase;
  color: #999;
  font-size: 14px;
  margin-bottom: 10px;
}

#subscribe-to-pro strong.price {
  color: #3eaf8f;
  font-size: 18px;
}

#subscribe-to-pro ul {
  margin: 10px auto 15px;
  width: 205px;
  overflow: visible;
  white-space: nowrap;
  font-size: 14px;
  text-align: left;
}

#subscribe-to-pro li {
  line-height: 20px;
  list-style: none;
}

#subscribe-to-pro li i.icon {
  font-size: 20px;
  vertical-align: -2px;
}

#subscribe-to-pro li span.start-block {
  display: inline-block;
  width: 26px;
  text-align: center;
}

#subscribe-to-pro .avg_cost {
  background: #eaf8f4;
  border: 1px solid #94d9c5;
  padding: 4px;
  margin: -3px 5px 7px;
  font-size: 14px;
  line-height: 20px;
}

#subscribe-to-pro .avg_cost .amount {
  font-size: 16px;
  font-weight: bold;
  color: #3eaf8f;
}

#subscribe-to-pro .well {
  width: 200px;
  margin: 0 auto 20px;
  padding: 12px 12px 13px;
}

#subscribe-to-pro .well label {
  width: 85px;
  text-align: left;
  display: block;
  margin: 0 auto;
  font-size: 16px;
  padding: 3px 0;
  overflow: visible;
  white-space: nowrap;
  cursor: pointer;
}

#subscribe-to-pro .well label input {
  margin-right: 4px;
  vertical-align: bottom;
}

#subscribe-to-pro .well label .per-month {
  font-size: 12px;
}

#subscribe-to-pro span.input-prepend {
  font-size: 24px;
  line-height: 36px;
  margin-bottom: 0px;
  display: inline-block;
}

#subscribe-to-pro span.input-prepend .add-on {
  height: 30px;
  line-height: 30px;
}

#subscribe-to-pro span.input-prepend input[type="text"] {
  height: 30px;
  line-height: 30px;
  font-size: 24px;
  font-family: inherit;
  width: 48px;
  margin-right: 1px;
}

#subscribe-to-pro .min-amount,
#subscribe-to-pro .max-amount {
  display: none;
  background: #c45;
  color: #fff;
  padding: 5px;
  font-size: 13px;
  line-height: 16px;
  margin: 15px 0 -5px;
}

#subscribe-to-pro form {
  margin-bottom: 0;
}

#subscribe-to-pro input.btn {
  font-size: 18px;
  margin-bottom: 5px;
}

#subscribe-to-pro a.no-thanks {
  font-size: 14px;
}

#subscribe-to-pro td.big-image {
  text-align: right;
}

#subscribe-to-pro td.big-image img {
  width: 250px;
  height: 250px;
}

#fullscreen_ad {
  height: 600px;
  width: 400px;
  margin-left: -202px;
  margin-top: -300px;
  overflow: visible;
}

#fullscreen_ad iframe {
  display: block;
  padding: 0;
  margin: 0;
  border: none;
  width: 100%;
  height: 100%;
}

#fullscreen_ad a.dismiss {
  position: fixed;
  height: 20px;
  width: 20px;
  padding: 5px;
  border-radius: 15px;
  top: 50%;
  right: 50%;
  margin-right: -214px;
  margin-top: -314px;
  background: #c00;
  color: #fff;
  text-decoration: none;
  text-align: center;
  font-size: 24px;
}

body > div.custom_prompt {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: 99999999999999;
}

body > div.custom_prompt div.custom_prompt_overlay {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: #000;
  opacity: 0.2;
  z-index: 0;
  zoom: 1;
}

body > div.custom_prompt .prompt_body {
  position: relative;
  width: 300px;
  margin: 0 auto;
  margin-top: 100px;
  background: #fff;
  border: 1px solid #999;
  padding: 15px;
  -webkit-border-radius: 6px;
  -moz-border-radius: 6px;
  border-radius: 6px;
  -webkit-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.5);
  z-index: 1;
}

body > div.custom_prompt .prompt_body .error_message {
  display: none;
  color: #c00;
  font-weight: bold;
  font-size: 13px;
  margin: -5px 0 15px;
}

body > div.custom_prompt .prompt_body div.buttons {
  text-align: right;
}

body > div.custom_prompt .prompt_body div.buttons .btn {
  width: 100px;
  margin-left: 10px;
  font-size: 18px;
}

body > div.custom_prompt .prompt_body input {
  padding: 5px;
  font-size: 16px;
  height: 18px;
  line-height: 18px;
  width: 288px;
  margin: 10px 0;
}

#group_member_details img.avatar {
  float: left;
  margin-right: 15px;
  width: 80px;
  height: 80px;
  -webkit-border-radius: 40px;
  -moz-border-radius: 40px;
  border-radius: 40px;
  border: 1px solid #ccc;
}

#group_member_details h4 {
  clear: both;
  font-size: 16px;
  text-transform: uppercase;
  color: #999;
  margin-bottom: 5px;
}

#group_member_details .repayments {
  font-size: 14px;
}

#group_member_details .repayments div {
  padding: 5px;
  line-height: 28px;
}

#group_member_details .repayments div:hover {
  background: #f6f6f6;
}

#group_member_details .repayments .negative {
  color: #ff652f;
}

#group_member_details .repayments .positive {
  color: #5bc5a7;
}

#group_member_details .red {
  color: #c45;
}

#ajax_statuses > div {
  display: none;
  position: fixed;
  z-index: 99999999;
  top: 50px;
  right: 30px;
  width: 66px;
  padding: 3px 5px;
  background: rgba(220, 220, 220, 0.94);
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  -webkit-box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  -moz-box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.4);
  text-align: center;
}

#ajax_statuses > div p {
  color: #666;
  font-size: 12px;
  line-height: 12px;
}

#ajax_statuses > div img {
  opacity: 0.75;
  width: 66px;
  height: 66px;
}

#ajax_activity {
  margin: 6px auto;
  width: 52px;
  height: 53px;
}

.btn-group ul.dropdown-menu li:hover ul.dropdown-menu {
  display: block;
  position: absolute;
  left: 100%;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;
}

.btn-group ul.dropdown-menu li ul.dropdown-menu {
  display: none;
  float: right;
  position: relative;
  top: auto;
  margin-top: -30px;
}

.btn-group .hide-caret span.caret {
  display: none;
}

.btn-group.btn-group-inline {
  display: inline-block;
  vertical-align: -8px;
}

.dropdown-menu i.icon-chevron-right {
  float: right;
}

#itemized_items {
  max-width: none;
  text-align: left;
}

#itemized_items input::-webkit-input-placeholder {
  color: #ddd;
}

#itemized_items input:-moz-placeholder {
  color: #ddd;
}

#itemized_items input:-ms-input-placeholder {
  color: #ddd;
}

#itemized_items input {
  margin-bottom: 0px;
}

#itemized_items th {
  padding-left: 4px;
  padding-right: 4px;
}

#itemized_items .itemized_item_selector {
  border: 1px solid #666;
  font-size: 11px;
  text-align: center;
  padding: 1px;
  cursor: pointer;
}

#itemized_items tr.itemized_item td.selected {
  background-color: #dddddd;
}

#itemized_items .small {
  font-size: 11px;
}

#itemized_items .small.very {
  font-size: 10px;
}

#itemized_items .cost {
  padding: 0 2px;
  width: 25px;
  text-align: center;
}

#itemized_items tr#itemized_total td {
  padding-top: 10px;
  padding-bottom: 5px;
}

#itemized_items tr#itemized_tip td {
  padding-bottom: 7px;
}

#itemized_items tr#itemized_grand_total {
  border-top: 1px solid #ccc;
}

#itemized_items tr#itemized_grand_total td {
  padding-top: 5px;
}

#itemized_items tr#itemized_total td,
#itemized_items tr#itemized_grand_total td {
  font-weight: bold;
}

#itemized_items .amount_column {
  padding: 0 12px 0 3px;
}

#itemized_items .amount_column .amount {
  width: 36px;
}

#itemized_items input.description {
  width: 100px;
}

#itemized_items .initials {
  cursor: pointer;
  text-align: center;
  line-height: 14px;
}

#itemized_items .tax_percent,
#itemized_items .tip_percent {
  width: 36px;
  padding: 2px;
  margin-right: 2px;
}

#itemized_items .tax_amount,
#itemized_items .tip_amount {
  width: 30px;
  padding: 2px;
  margin-right: 2px;
  font-size: 11px;
  text-align: center;
}

@keyframes customimage-slidein {
  from {
    opacity: 0;
    -webkit-transform: translateX(-1000px) rotate(-35deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(-2deg);
  }
}

@keyframes iphone-slidein {
  from {
    opacity: 0;
    -webkit-transform: translateX(1000px) rotate(30deg);
  }

  to {
    opacity: 1;
    -webkit-transform: translateX(0px) rotate(2deg);
  }
}

#flash-container {
  position: absolute;
  width: 100%;
  top: 49px;
  left: 0px;
  color: #333;
  text-shadow: none;
}

#flash-container .alert-message {
  display: none;
  background: #eee;
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 0 0 4px 4px;
}

#flash-container .alert-message.notice {
  background: #ffc;
  border-color: #ddc;
}

#flash-container .alert-message.alert .close {
  right: 0;
}

#flash-container .alert-message.error,
#flash-container .alert-message.alert {
  border-color: #b34;
  background: #c45;
  color: #fff;
}

#flash-container .alert-message.error .close,
#flash-container .alert-message.alert .close {
  color: #fff;
  text-shadow: none;
  opacity: 0.5;
}

#flash-container .alert-message.error .close:hover,
#flash-container .alert-message.alert .close:hover {
  opacity: 1;
}

#flash-container .alert-message.error a,
#flash-container .alert-message.alert a {
  color: #fff;
  text-decoration: underline;
}

#flash-container .alert-message.error a.close,
#flash-container .alert-message.alert a.close {
  text-decoration: none;
}

#center_container #flash-container {
  z-index: 100;
  top: 34px;
}

#fat_rabbit {
  font-size: 14px;
}

#fat_rabbit .flex_container {
  width: 940px;
  padding: 0 10px;
  margin: 0 auto;
  position: relative;
}

@media (max-width: 959px) {
  #fat_rabbit .flex_container {
    width: auto;
  }
}

#fat_rabbit .wrapper {
  margin: 0 0 -114px;
  min-height: 100%;
  height: auto !important;
  height: 100%;
}

#fat_rabbit .wrapper .toppad {
  height: 49px;
}

#fat_rabbit .wrapper .bottompad {
  height: 114px;
}

#fat_rabbit .header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: #5bc5a7;
  z-index: 99;
  border-bottom: 1px solid #48be9d;
  color: #fff;
  text-shadow: 0 -1px 0 #39a385;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
}

#fat_rabbit .header .flex_container {
  height: 48px;
}

#fat_rabbit .header img#logo {
  position: absolute;
  top: 0;
  left: 0;
  height: 24px;
  padding: 12px 10px;
}

#fat_rabbit .header .login_links {
  position: absolute;
  top: 10px;
  right: 10px;
}

#fat_rabbit .header .btn {
  vertical-align: baseline;
  margin-left: 5px;
  font-size: 14px;
}

#fat_rabbit .header .btn-mint {
  margin-right: 4px;
}

#fat_rabbit .header #login-form {
  display: none;
  position: absolute;
  z-index: 98;
  top: 49px;
  right: 0;
  padding: 10px;
  color: #333;
  text-shadow: none;
  background: #eee;
  border: 1px solid #ccc;
  border-radius: 0 0 5px 5px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  text-align: center;
}

#fat_rabbit .header #login-form.captcha input[type="text"],
#fat_rabbit .header #login-form.captcha input[type="email"],
#fat_rabbit .header #login-form.captcha input[type="password"] {
  width: 292px;
}

#fat_rabbit .header #login-form input[type="text"],
#fat_rabbit .header #login-form input[type="email"],
#fat_rabbit .header #login-form input[type="password"] {
  font-size: 14px;
  margin-bottom: 8px;
  text-align: left;
  width: 230px;
}

#fat_rabbit .header #login-form input[type="submit"] {
  display: block;
  margin-left: 0;
  width: 100%;
  margin-bottom: 10px;
}

#fat_rabbit .header #login-form form {
  margin: 0;
}

#fat_rabbit .header #login-form .google {
  background: #fff;
  padding: 4px 6px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  color: #777;
}

#fat_rabbit .header #login-form .google:hover {
  text-decoration: none;
}

#fat_rabbit .header #login-form .google img {
  width: 16px;
  height: 16px;
  padding-right: 2px;
  vertical-align: -3px;
}

#fat_rabbit .footer {
  padding: 20px;
  min-height: 74px;
  position: relative;
  z-index: 1;
  background: #666;
  color: #fff;
  font-size: 14px;
  text-shadow: 0 -1px 0 #000;
}

#fat_rabbit .footer .flex_container {
  padding: 0;
}

#fat_rabbit .footer a {
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin: 0 5px;
  border-bottom: 1px dashed #999;
}

#fat_rabbit .footer a:hover {
  text-decoration: none;
  border-bottom-color: #fff;
}

#fat_rabbit .footer a.block-link {
  display: inline-block;
  border: none;
  vertical-align: middle;
}

#fat_rabbit .footer .about_us {
  float: left;
  width: 420px;
  margin-right: 20px;
  font-size: 16px;
}

#fat_rabbit .footer .about_us .made-with-smiles {
  font-size: 24px;
  margin-top: 0;
  line-height: 30px;
}

#fat_rabbit .footer .about_us #copyright {
  margin: 15px 0 5px;
}

#fat_rabbit .footer .footer_links {
  width: 500px;
  float: left;
  text-align: right;
}

@media (max-width: 959px) {
  #fat_rabbit .footer .about_us,
  #fat_rabbit .footer .footer_links {
    float: none;
    width: auto;
    text-align: center;
    padding: 0;
    margin: 0;
  }
}

#fat_rabbit .masthead {
  width: 100%;
  top: 0;
  left: 0;
  text-align: center;
  z-index: 0;
  padding-top: 21px;
  background: #fff;
  color: #444;
  padding-bottom: 23px;
}

@media (max-width: 959px) {
  #fat_rabbit .masthead {
    padding: 21px 10px 23px;
    width: auto;
  }

  #fat_rabbit .masthead img {
    display: block;
  }
}

#fat_rabbit .masthead h1 {
  font-size: 68px;
  margin-bottom: 10px;
  white-space: nowrap;
}

@media (max-width: 959px) {
  #fat_rabbit .masthead h1 {
    font-size: 40px;
    white-space: normal;
  }
}

#fat_rabbit .masthead img.envelope {
  vertical-align: -2px;
  margin-right: 3px;
}

@media (max-width: 959px) {
  #fat_rabbit .masthead img.envelope {
    display: none;
  }
}

#fat_rabbit .masthead #main_images {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  margin-right: 50px;
  position: relative;
  height: 380px;
  padding: 23px 0;
}

#fat_rabbit .masthead #main_images img {
  display: inline;
  height: 100%;
}

#fat_rabbit .masthead #main_images a img {
  position: relative;
  opacity: 1;
  transform: scale(1);
  transition: all 0.25s ease;
}

@media screen and (max-width: 767px) {
  #fat_rabbit .masthead #main_images a img {
    display: block;
    margin: 0 auto;
  }
}

@media screen and (max-width: 767px) {
  #fat_rabbit .masthead #main_images .web_image {
    display: none;
  }
}

@media screen and (min-width: 767px) {
  #fat_rabbit .masthead #main_images .images a:first-child img {
    margin-left: -10px;
  }

  #fat_rabbit .masthead #main_images .images:hover a:first-child:hover img {
    transform: scale(1.05) translateX(4%);
    z-index: 1;
  }

  #fat_rabbit .masthead #main_images .images:hover a:last-child:hover img {
    transform: scale(1.05) translateX(-14%);
    z-index: 1;
  }

  #fat_rabbit .masthead #main_images .images:hover a:first-child img {
    transform: translateX(4%);
  }

  #fat_rabbit .masthead #main_images .images:hover a:last-child img {
    transform: translateX(-14%);
  }
}

@media screen and (min-width: 767px) and (-webkit-min-device-pixel-ratio: 0) {
  #fat_rabbit .masthead #main_images .images:hover img {
    opacity: 0.4;
  }

  #fat_rabbit .masthead #main_images .images:hover a:hover img {
    opacity: 1;
  }
}

#fat_rabbit .masthead .longer_tagline {
  font-size: 21px;
  margin-top: 20px;
  margin-bottom: 5px;
  padding-left: 20px;
  padding-right: 20px;
  line-height: 26px;
}

@media (max-width: 959px) {
  #fat_rabbit .masthead .longer_tagline {
    white-space: normal;
  }
}

#fat_rabbit .masthead .longer_tagline.custom {
  margin: 15px 0 20px;
  line-height: 32px;
}

#fat_rabbit .masthead .longer_tagline.custom div.image_container {
  position: relative;
}

#fat_rabbit .masthead .longer_tagline.custom img.custom {
  display: inline-block;
  margin: 25px auto 25px;
  border: 10px solid #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  -ms-box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.5);
  animation: customimage-slidein 0.75s;
  opacity: 0;
  max-height: 300px;
  animation-delay: 0.75s;
  animation-fill-mode: forwards;
}

#fat_rabbit .masthead .longer_tagline.custom img.iphone {
  position: relative;
  z-index: 1;
  height: 340px;
  width: 161px;
  margin: 10px 0 10px 20px;
  opacity: 0;
  animation: iphone-slidein 0.75s;
  animation-delay: 1.4s;
  animation-fill-mode: forwards;
}

#fat_rabbit .masthead #sign_up {
  width: 260px;
  font-size: 28px;
  text-align: center;
  padding: 12px 20px;
  z-index: 1;
  position: relative;
  margin-top: 3px;
  margin-bottom: 10px;
}

#fat_rabbit .masthead #sign_up div {
  font-size: 14px;
}

#fat_rabbit .masthead #homepage_signup_form {
  margin: 12px 0 8px;
}

#fat_rabbit .masthead #homepage_signup_form input[type="email"],
#fat_rabbit .masthead #homepage_signup_form input[type="password"] {
  font-size: 20px;
  line-height: 30px;
  height: 30px;
  padding: 4px 7px;
  width: 180px;
  margin: 5px;
}

#fat_rabbit .masthead #homepage_signup_form input[type="submit"] {
  font-size: 20px;
  margin: 5px;
}

#fat_rabbit .more_information {
  margin-top: 3px;
  padding: 20px;
  position: relative;
  z-index: 1;
  background: #fff;
  border-top: 1px solid #ccc;
  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.5);
}

#fat_rabbit .more_information .padded_content {
  position: relative;
  margin: 20px auto;
  min-height: 325px;
  padding-left: 170px;
  font-size: 18px;
  line-height: 24px;
}

@media (max-width: 959px) {
  #fat_rabbit .more_information .padded_content {
    padding-left: 0;
  }

  #fat_rabbit .more_information .padded_content img#persondude {
    display: none;
  }
}

#fat_rabbit #sign_up_two {
  width: 250px;
  font-size: 24px;
  text-align: center;
  padding: 15px 20px;
  z-index: 1;
  position: absolute;
  top: 0;
  right: 0;
  margin-bottom: 9px;
}

@media (max-width: 990px) {
  #fat_rabbit #sign_up_two {
    float: none;
    position: static;
    top: auto;
    right: auto;
    width: auto;
    margin-top: 10px;
  }
}

#fat_rabbit #error_messages,
#fat_rabbit #duplicates_not_allowed {
  padding: 5px 10px;
  border-color: #b34;
  background: #c45;
  text-shadow: 0 -1px #9a2a38;
  color: #fff;
}

#fat_rabbit #error_messages ul,
#fat_rabbit #duplicates_not_allowed ul {
  padding-left: 20px;
}

#fat_rabbit #error_messages li,
#fat_rabbit #duplicates_not_allowed li {
  line-height: 22px;
}

#fat_rabbit #duplicates_not_allowed {
  display: none;
  font-size: 16px;
  line-height: 20px;
  padding: 10px 10px;
  white-space: nowrap;
}

#fat_rabbit .flex_container.blank_page {
  line-height: 36px;
  font-size: 18px;
  width: auto;
  max-width: 600px;
  margin-top: 50px;
  padding-bottom: 50px;
}

#fat_rabbit .flex_container.blank_page .content-block {
  float: left;
  max-width: 360px;
  padding-left: 15px;
}

#fat_rabbit .flex_container.blank_page h2 {
  text-transform: uppercase;
  font-size: 16px;
  color: #999;
  font-weight: bold;
  line-height: 20px;
}

#fat_rabbit .flex_container.blank_page select {
  font-size: 18px;
  min-height: 30px;
  height: 30px;
  line-height: 30px;
  margin-bottom: 17px;
  vertical-align: baseline;
}

#fat_rabbit .flex_container.blank_page ::-webkit-input-placeholder {
  color: #e6e6e6;
}

#fat_rabbit .flex_container.blank_page :focus::-webkit-input-placeholder {
  color: #f6f6f6;
}

#fat_rabbit .flex_container.blank_page input[type="text"],
#fat_rabbit .flex_container.blank_page input[type="email"],
#fat_rabbit .flex_container.blank_page input[type="password"] {
  color: #333;
  width: 95%;
  font-size: 20px;
  width: 95%;
  height: 28px;
  line-height: 110%;
  margin-bottom: 17px;
}

#fat_rabbit .flex_container.blank_page .tos_acceptance {
  line-height: 18px;
  font-size: 14px;
  margin: 20px 0 10px;
}

#fat_rabbit .flex_container.blank_page img.envelope {
  float: left;
  margin-right: 25px;
}

#fat_rabbit .flex_container.blank_page #group_avatar_upload {
  position: absolute;
  top: 225px;
  left: 25px;
}

#fat_rabbit .flex_container.blank_page #error_messages {
  margin: 15px 0 0;
}

#fat_rabbit .flex_container.blank_page #error_messages span.error {
  font-weight: bold;
}

#fat_rabbit .flex_container.blank_page .optional_text {
  color: #ccc;
  font-size: 14px;
}

#fat_rabbit .flex_container.blank_page .btn-large {
  display: inline-block;
  width: auto;
  font-size: 24px;
  margin-top: 9px;
}

#fat_rabbit .flex_container.blank_page .choose-yourself a,
#fat_rabbit .flex_container.blank_page .choose-yourself button {
  display: block;
  box-sizing: content-box;
  width: 90%;
  padding: 8px;
  text-align: left;
  font-size: 16px;
  margin: 8px 0;
  height: 25px;
  line-height: 25px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

#fat_rabbit .flex_container.blank_page .choose-yourself a.disabled,
#fat_rabbit .flex_container.blank_page .choose-yourself a[disabled],
#fat_rabbit .flex_container.blank_page .choose-yourself button.disabled,
#fat_rabbit .flex_container.blank_page .choose-yourself button[disabled] {
  background-color: #fff;
  color: #ccc;
  text-decoration: line-through;
  opacity: 1;
  box-shadow: none;
  border: 1px solid #eee;
}

#fat_rabbit .flex_container.blank_page .choose-yourself a img,
#fat_rabbit .flex_container.blank_page .choose-yourself button img {
  width: 25px;
  height: 25px;
  margin-right: 7px;
  vertical-align: top;
}

#fat_rabbit .flex_container.blank_page .group-member {
  position: relative;
  display: block;
  font-size: 14px;
  line-height: 18px;
  margin-top: 10px;
}

#fat_rabbit .flex_container.blank_page .group-member img {
  vertical-align: middle;
  height: 26px;
  width: 26px;
  border-radius: 13px;
  margin-right: 2px;
}

#fat_rabbit .flex_container.blank_page .group-member img.faded {
  opacity: 0.4;
}

#fat_rabbit .flex_container.blank_page .group-member input[type="text"],
#fat_rabbit .flex_container.blank_page .group-member input[type="email"] {
  vertical-align: middle;
  font-size: 14px;
  height: 19px;
  width: 47%;
  margin-bottom: 0;
}

#fat_rabbit .flex_container.blank_page .group-member input.name[type="text"],
#fat_rabbit .flex_container.blank_page .group-member input.name[type="email"] {
  width: 30%;
  margin-right: 2px;
}

#fat_rabbit .flex_container.blank_page .group-member .delete {
  position: absolute;
  top: 4px;
  right: 5px;
  font-size: 20px;
  font-weight: bold;
  color: #c00;
}

#fat_rabbit .flex_container.blank_page .group-member .delete.disabled {
  color: #999;
}

@media (max-width: 750px) {
  #fat_rabbit .flex_container.blank_page {
    margin-top: 0px;
  }

  #fat_rabbit .flex_container.blank_page img.envelope {
    display: none;
  }
}

#fat_rabbit input[type="file"] {
  line-height: 100%;
}

#fat_rabbit h4 {
  text-transform: uppercase;
  color: #999;
  font-size: 14px;
  margin-bottom: 10px;
}

#fat_rabbit #account-settings input {
  width: 190px;
}

#fat_rabbit #account-settings select {
  width: 200px;
}

#fat_rabbit .notification-settings {
  margin-left: 0;
}

#fat_rabbit .notification-settings li {
  list-style: none;
  font-size: 13px;
  margin-right: 35px;
  margin-bottom: 10px;
}

#fat_rabbit .notification-settings li span {
  display: inline-block;
  width: 210px;
}

#fat_rabbit .notification-settings li label {
  float: right;
  margin-bottom: 0;
  margin-right: 3px;
  cursor: pointer;
}

#fat_rabbit .notification-settings li label input {
  display: inline-block;
  display: none;
}

#fat_rabbit .notification-settings li label input + img {
  padding: 0 2px;
  width: 20px;
  height: 20px;
  cursor: pointer;
  -moz-opacity: 0.3;
  opacity: 0.3;
  zoom: 1;
  pointer-events: none;
}

#fat_rabbit .notification-settings li label input:checked + img {
  -moz-opacity: 1;
  opacity: 1;
}

#fat_rabbit .notification-settings h5 {
  color: #999;
  font-size: 11px;
  text-transform: uppercase;
  margin: 15px 0 5px;
}

#fat_rabbit .notification-settings h5:first-child {
  margin-top: 0;
}

#fat_rabbit .advanced-features .btn {
  margin-bottom: 10px;
}

#fat_rabbit #search-page .search-bar {
  display: inline-block;
  margin-bottom: 10px;
  padding: 12px 12px;
}

#fat_rabbit #search-page .search-bar input {
  margin-bottom: 0;
  vertical-align: middle;
}

#fat_rabbit #search-page .search-bar form {
  margin-bottom: 0;
}

#fat_rabbit #search-page .search-bar .advanced_link {
  display: block;
  margin: 5px 0 -5px;
  font-size: 12px;
}

#fat_rabbit #search-page .search-bar div.more_options {
  margin-top: 8px;
}

#fat_rabbit #search-page .search-bar div.more_options select {
  margin-bottom: 0;
}

#fat_rabbit #search-page .results {
  margin-top: 10px;
  border-top: 1px solid #ddd;
  padding-top: 10px;
}

#fat_rabbit #search-page .results .expense {
  position: relative;
  margin: 15px 0;
  padding-left: 60px;
  min-height: 50px;
}

#fat_rabbit #search-page .results .expense img.category {
  position: absolute;
  top: 0;
  left: 0;
  height: 50px;
}

#fat_rabbit #search-page .results .expense:hover {
  background: none;
}

#fat_rabbit #charts-page .filters {
  display: inline-block;
  margin-bottom: 10px;
  padding: 12px 12px;
}

#fat_rabbit #charts-page .filters input {
  margin-bottom: 0;
  vertical-align: middle;
}

#fat_rabbit #charts-page .filters form {
  margin-bottom: 0;
}

#fat_rabbit #charts-page .filters form select {
  width: auto;
  margin-bottom: 0;
}

#fat_rabbit #charts-page .charts {
  margin: 35px 0 25px;
}

.tooltip {
  font-size: 12px;
  pointer-events: none;
}

.tooltip.in {
  opacity: 1;
}

.tooltip div.left {
  text-align: left;
}

.tooltip div.left h2 {
  font-size: 18px;
  margin: 0 0 3px;
  padding: 0;
  line-height: 22px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.tooltip div.left h3 {
  font-size: 13px;
  font-weight: normal;
  color: #ccc;
  line-height: 17px;
}

.tooltip div.left hr {
  height: 0px;
  border-bottom: none;
  border-top: 1px solid #999;
  margin: 5px 0 5px;
}

.tooltip div.left div.registration_status {
  margin-top: 4px;
  font-size: 12px;
  line-height: 16px;
  color: #ccc;
}

.tooltip .positive {
  color: #5bc5a7;
}

.tooltip .negative {
  color: #ff652f;
}

.tooltip .tooltip-inner {
  background: #000;
  background: rgba(0, 0, 0, 0.9);
  padding: 6px 10px;
  font-size: 13px;
  max-width: 275px;
}

#renters-insurance {
  max-width: 960px;
  padding: 10px 20px 20px;
  margin: 0 auto;
  text-align: center;
}

#renters-insurance h1 {
  margin: 20px 0;
  font-weight: normal;
}

#renters-insurance #big_answer {
  position: relative;
  height: 168px;
  margin: -10px 0;
}

#renters-insurance #big_yes {
  font-size: 144px;
  display: block;
  line-height: 120px;
  position: absolute;
  top: 10px;
  left: 50%;
  width: 800px;
  margin-left: -400px;
  margin-top: 20px;
  opacity: 0;
  font-weight: bold;
  color: #d9534f;
}

#renters-insurance #big_details {
  opacity: 0;
  font-size: 20px;
  margin: 0 auto;
  max-width: 625px;
  line-height: 28px;
}

#renters-insurance .well {
  margin-top: 20px;
  margin-bottom: 10px;
  font-size: 16px;
  line-height: 20px;
  padding: 15px;
  min-height: 0;
}

#renters-insurance .well div {
  text-align: left;
  margin: 15px 0 0;
  font-size: 0;
  line-height: 26px;
  color: #000;
}

#renters-insurance .well span {
  display: inline-block;
  text-align: left;
  font-size: 16px;
  vertical-align: middle;
}

#renters-insurance .well span.first {
  width: 215px;
  padding-left: 3px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

#renters-insurance .well span.second {
  width: 60px;
  margin-right: 20px;
  font-weight: bold;
  text-align: right;
  white-space: nowrap;
  overflow: hidden;
}

#renters-insurance .well span.third {
  background: #62c462;
  margin: 4px 0;
}

#renters-insurance #below_the_fold {
  opacity: 0;
}

#renters-insurance #below_the_fold hr {
  margin: 30px 0;
}

#renters-insurance #below_the_fold .intro {
  font-size: 18px;
  color: #999;
  margin-bottom: 20px;
}

#renters-insurance #below_the_fold .listing {
  text-align: left;
  padding: 10px 0 30px 135px;
  position: relative;
  max-width: 450px;
  margin: 0 auto;
}

#renters-insurance #below_the_fold .listing img {
  position: absolute;
  top: 5px;
  left: 0;
  width: 125px;
  height: 60px;
}

#renters-insurance #below_the_fold .listing h3 {
  line-height: 24px;
}

#renters-insurance #below_the_fold .listing h3 a {
  color: inherit;
}

#renters-insurance #below_the_fold .listing div {
  margin: 12px 0;
  color: #666;
}

#renters-insurance #below_the_fold .listing .btn-orange {
  font-size: 18px;
}

#renters-insurance #state_chooser {
  text-align: center;
  font-size: 18px;
}

#renters-insurance #state_chooser .states {
  max-width: 180px;
  margin: 20px auto 0;
}

#renters-insurance #state_chooser a {
  display: inline-block;
  height: 30px;
  width: 30px;
  font-size: 16px;
}

#renters-insurance #state_chooser .not_us {
  color: #999;
  font-size: 14px;
  margin: 10px 0;
}

.calculator_primary_button {
  display: block;
  width: 432px;
  margin: 0 auto;
  font-size: 24px;
  line-height: 30px;
  padding: 10px;
  border-radius: 8px;
  color: #000;
  background: #eee;
  min-height: 200px;
  margin-bottom: 20px;
}

.calculator_primary_button img {
  float: left;
  margin: 10px;
  width: 180px;
  height: 180px;
}

.calculator_primary_button:hover {
  color: #000;
  background: #e6e6e6;
}

.social-buttons a.btn {
  color: #fff;
  text-shadow: none;
  font-size: 14px;
  padding: 5px 10px 3px 3px;
  margin-bottom: 10px;
  opacity: 0.9;
}

.social-buttons a.btn:hover {
  opacity: 1;
}

.social-buttons a.btn.btn-facebook {
  background: #3b5998;
}

.social-buttons a.btn.btn-twitter {
  background: #4099ff;
}

.social-buttons img {
  width: 26px;
  height: 26px;
  margin-right: 0px;
  margin-top: -2px;
}

body#printable {
  padding: 20px;
}

body#printable td,
body#printable th {
  font-size: 14px;
}

body#printable tr:hover,
body#printable tr:hover td {
  background: none;
}

body#printable .positive {
  color: #3eaf8f;
}

body#printable .negative {
  color: #fb4100;
}

body#printable .settled {
  color: #999;
}

body#printable .net_balance {
  font-weight: bold;
}

body#printable tr.gray {
  border-color: #ddd;
}

body#printable tr.gray td,
body#printable tr.gray th {
  font-weight: bold;
  background: #eee;
  border-color: #ddd;
  vertical-align: middle;
}

body#printable table {
  margin-top: 10px;
  page-break-after: always;
}

@media print {
  body#printable .no_print,
  body#printable .no_print * {
    display: none !important;
  }
}

body#printable #date_control {
  position: fixed;
  top: 20px;
  right: 20px;
  padding: 8px 10px;
  background: rgba(51, 51, 51, 0.85);
  color: #fff;
  z-index: 1000;
}

body#printable #date_control span {
  vertical-align: middle;
}

body#printable #date_control select {
  margin: 0 0 0 3px;
  vertical-align: middle;
  width: auto;
}

body#printable #date_control form {
  margin: 0;
  padding: 0;
}

.query-builder h1 {
  margin-bottom: 20px;
}

table tr.inactive td {
  opacity: 0.3;
}

.navbar.navbar-admin-shadow .navbar-inner {
  background-color: #c45;
  background-image: -moz-linear-gradient(to top, #c45, #c45);
  background-image: -ms-linear-gradient(to top, #c45, #c45);
  background-image: -webkit-gradient(linear, 0 0, 0 100%, from(#c45), to(#c45));
  background-image: -webkit-linear-gradient(to top, #c45, #c45);
  background-image: -o-linear-gradient(to top, #c45, #c45);
  background-image: linear-gradient(to top, #c45, #c45);
  border-bottom-color: #ae2f3f;
}

.navbar.navbar-admin-shadow .nav > li > a:hover {
  background-color: #ae2f3f;
  color: #ffffff;
  text-decoration: none;
}

.navbar.navbar-admin-shadow .nav img {
  border: 1px solid #ae2f3f;
  background: #ae2f3f;
}

.navbar.navbar-admin-shadow .nav .admin-indicator {
  color: #f2d0d5;
}

#fat_rabbit .header.admin-shadow {
  background: #c45;
  border-bottom: 1px solid #ae2f3f;
}

#fat_rabbit .header.admin-shadow .nav img {
  border: 1px solid #ae2f3f;
  background: #ae2f3f;
}

#fat_rabbit .header.admin-shadow .nav a:hover {
  background-color: #ae2f3f;
  color: #ffffff;
  text-decoration: none;
}

tbody.text-message-row {
  cursor: pointer;
}

tbody.text-message-row tr:nth-child(2) {
  display: none;
}

tbody.text-message-row.expanded tr:nth-child(2) {
  display: table-row;
}

tbody.text-message-row.expanded .arrow {
  transform: rotate(90deg);
}
</style>