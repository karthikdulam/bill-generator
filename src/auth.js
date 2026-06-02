const SESSION_KEY = '_bs'
const ACCOUNTS_KEY = '_ba'
const SESSION_DURATION = 30 * 60 * 1000

const BUILTIN = [
  {
    u: 'admin',
    s: '8a4a327b6f99f8b3670f8a7dbc2ab31d',
    h: '47a785b344493162801efd33b885c15df205cd0264d62d29f337cc958deab5eb',
    r: 'admin'
  },
  {
    u: 'billgenerator',
    s: 'b6d4d0671b92457df9762f964331c440',
    h: 'd02dbb196fd53a8edb0b50c060929662501d3f43f221ba2dd13da8b2b9ca34f9',
    r: 'user'
  }
]

const VAULT = {
  s: '09feae1817e6e9c49218358962f8a34c',
  v: 'ff759b6395a99aef99d1f511',
  c: '4f12e0b6c2d4f9c27556c8f4bd07545eee591e8aeca7bbe4838ed1008d7b7933c9d83037494ba344947819bd3051a26a8a5bdbac7323be7c3eecf224ae46e70a7ca6b56d3df2bcf75b9bd25a677179fbe78ab5b1bf6cf467550807d6d3ea214623dea2516f2647ba21f52a4d8fddf5025b3af3199bc531a246fe36f49127566954e99f68ff4afcd535397348b044f3acaa2cf8cf450ade07b3449cbf1cf23812568ec772da9e13f029b097ce22d0b8dd1186182dcd5ec74b77015a08e0e6679931f7c74a804414939c2f7191d4aee6d3af0fcdbcf90061bdc68cdad95057c7efac5addce87cdb3ac8deaa977cb30c0d8067b6285d5690de8620128609de95ba41e5c875d452056422c5702faa35079fb381e3378bf0ea198d68c62292f878d0df4720dc9c115edd56ddc99f58b191c8a49614687e1412dbc12f8bff17b26f48b1373593c3f659b72eb3db5fba32005e4a7597be98026d2787f79e051828fb4c2f9119e633b44334643a5a9b584746a58ddd5d0b935f8b5a46076e81e571c9bfb70edcdeaaa7658dcee808aea0e178ae5e8db368b9565b434f6b3bb222762546e0070cac8d655881bb8f3f8ca7a0734fa99a10dc246318e9d34a4fc26c4f007bc87a6e1f62c6c2f348aa5ff9435da9a02a2daec2fd2a6f746a716119493240ecc75c299ac826190a41219c7e22d408c06dfa28a49b85af44393d70f385bccb04e4ba082e7981e8f71ded458da8ed361a852254914c9ce51e9c10bec4093a028a9cc8709b1ab3306cd0bea5eb8675acedd94e0cbdc329f72c16d6af53b3e447c65230c900d3ae56dceab02409a6b6c78d400f29704345fa96ec87c994120704b680aed3ab961a7e59a20e4d527b3f86867599ee3d8415c6acd699afb76aefe1431199c7445f7e012bfd2d1f194e71653bccc369d5b99e62afc87b437b3d19ecdc06dac98fe6450bd2282f33ec49fba23ce7e2abeaa9abe7306d4b56e404837bdbf1fc62a2d239637a1e1f3fc94b6f74c2d1b56dd2b1757fb133b6731cc1afe405b93b7b8b34ed9f6b6b231dcb189295ef9240648fe63d7051cfdb4f7ea907e39538e1317818e10df55f77c2cafaa7700ff2c75ff36b37541c173a3fba8d8cfa046e8bde6c29bd5b2e988ea268aa37f38270cd58a97725a43e9011aa49416e3f810225e1169baa167f96aca81e716f9a0c045556d8df675092c39c807085b8e9a1d473936a91021c3cf27ef958f262f2737c1bcf6bc1060d7b748dc86c13323d9ecc2d9e8c87704bbdca2b6b960dd10f781c482163199997e2c14a2a921400930bb68ba79a8bc6c204f2b7fe7bccc980abed6e358d04d2d7e1b5182dab3c08b033b983111f0b6dd08d93d086142f6479707376457c3c6e2864920680dd018ca7b7480e3e5f5b95c339a0c857504345c7d8b3dda7871ef6ecfa41c6e643c22bd83d38b8febb67d5cb22a589f1a0bfca4567a8ce38020d5bd81cf14f6093b93602cb4fae8b112e8ba77b5f3c03f39966f0ff3252b96c99d9d9d31dae1b707fdd64d9bc34e352805b1b6be82665205e0fc66d2c2db0e4efb287a56a8ef5264f86497e05eed040488ea437a3a6f7817130faf19c0cfc1d00eae7f53df1a97da5dc7afab9453fe3be790d21a69cc4299d93ab77d1132055aa32b9d7074b5d50493ff568d37fa58556ac3a1dbfa90ed200cad0bcf7df18985ce3b09c20164b1ca71792aeac663ef1af98017136884e4e918bd19c10cdda81f314c3802a16cd5bb081021dc6c7466eba7ac5f16f0108361f7b135d35e96ce7ddc97a0970bee9aea57c03cc63c4b541b260cff81525f6b420c96a5d9f0a15ccf09570e945907143d04100dbdce3e15a76972dcf5058e7fbad0a0c69da05f57d91590915f754eff8c1fb059644fc8a46cf402c4ace2ddaa636e2ed1c79f7d47d345f83431ea13b9b058204061f4746190ed25788762ae71b6686797ee6ecc076587d937f9345d5e2ad8eae1cfe972798a801cf1932dba98387277fd1b45ec648b9612d096e97eba47a5557e50f7fa9100f7c7495160d685bdd6013b2044820e9e7aa5e7c0f0c04c7fec7e52e831295b4ba6ed113aefd3b804cbfbbe20bbb272b5d210a676b884434c55901c5225b4f5a756c17f3aa1b21ebefda17decc30b8434ae72b6170f234685661b0993f9c9b649c11a191f0d5262a5c722a6d3ce20af48005046e89d302c270fdf15f9dd47ed835f6953eaa1c83230d6433681bce7217fe66d61196cebc4656a3f8abf3e2f32f85f0be4bd5999a7adab6010e660b35d04f9209fbf04ffca1db0e76bfcc9c0e9e2ce57daa02c53fc35ee38f04e0b0c27b7b7dac438b44120cc6e70051a9fe30866951739a84c76a790a5975d82e39ecd1938e211ff6756f3f8754721e65716de0afee8a8293286f92b8dcb770f90bf2605be9edcbbff2c9677fd032c0f5b68c5bfde031a8fdccda3917c251b5e3cbed40ccf94cb2a24f7f2754692149a388600c7dfaa896ef518a5512792fb3cd56dfb16e362f7e3bdc1dd0bd4a51489a853c54bd08711927a8fe15a952bbc508003646803c3183ee93692f6195c022a02caddaa2a0a56bfea7ce2e267396cd8d55aa1b4ff68b85b82999cd38f432f72b939a1ab9376bad1737994411becff04d470450d56b82cbbb252d80f559f0d6161bd499bf6a413bf56de49927e3e0affa7a2b9fc6e6410148a6c6a1710219a5148939ec8ca05c051de48cf328467752521a8cff43137d15eeedb507729fa22ec09010dbaaebfddf8f22d5330aecb03f7beb456124a34d7bac2fce80667769d86edfca01bdc6c14dc8c7920a821ab137346cf0a784f92e431154eb7dbc241fbc22f93cc1f01fa8c033c6af5a2ba84490c04'
}

function hexToBytes(hex) {
  const b = new Uint8Array(hex.length / 2)
  for (let i = 0; i < hex.length; i += 2) b[i / 2] = parseInt(hex.substr(i, 2), 16)
  return b
}

function bytesToHex(bytes) {
  return Array.from(new Uint8Array(bytes)).map(b => b.toString(16).padStart(2, '0')).join('')
}

async function deriveHash(password, saltHex) {
  const enc = new TextEncoder()
  const km = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveBits'])
  const bits = await crypto.subtle.deriveBits(
    { name: 'PBKDF2', salt: hexToBytes(saltHex), iterations: 100000, hash: 'SHA-256' },
    km, 256
  )
  return bytesToHex(bits)
}

async function deriveAesKey(password, saltHex) {
  const enc = new TextEncoder()
  const km = await crypto.subtle.importKey('raw', enc.encode(password), 'PBKDF2', false, ['deriveKey'])
  return crypto.subtle.deriveKey(
    { name: 'PBKDF2', salt: hexToBytes(saltHex), iterations: 100000, hash: 'SHA-256' },
    km,
    { name: 'AES-GCM', length: 256 },
    false,
    ['decrypt']
  )
}

export async function login(username, password) {
  const all = [...BUILTIN, ...getCustomAccounts()]
  const acct = all.find(a => a.u === username)
  if (!acct) return null

  const hash = await deriveHash(password, acct.s)
  if (hash !== acct.h) return null

  const session = { u: acct.u, r: acct.r, t: Date.now() }

  if (acct.r === 'admin') {
    try {
      const key = await deriveAesKey(password, VAULT.s)
      const ct = hexToBytes(VAULT.c)
      const dec = await crypto.subtle.decrypt({ name: 'AES-GCM', iv: hexToBytes(VAULT.v) }, key, ct)
      const data = JSON.parse(new TextDecoder().decode(dec))
      sessionStorage.setItem(SESSION_KEY + 'd', JSON.stringify(data))
    } catch { /* decryption failed */ }
  }

  sessionStorage.setItem(SESSION_KEY, JSON.stringify(session))
  return session
}

export function getSession() {
  try {
    const s = JSON.parse(sessionStorage.getItem(SESSION_KEY))
    if (!s) return null
    if (Date.now() - s.t > SESSION_DURATION) {
      logout()
      return null
    }
    return s
  } catch {
    return null
  }
}

export function getAdminData() {
  try {
    return JSON.parse(sessionStorage.getItem(SESSION_KEY + 'd'))
  } catch {
    return null
  }
}

export function logout() {
  sessionStorage.removeItem(SESSION_KEY)
  sessionStorage.removeItem(SESSION_KEY + 'd')
}

export function isAdmin() {
  const s = getSession()
  return s?.r === 'admin'
}

function getCustomAccounts() {
  try {
    return JSON.parse(localStorage.getItem(ACCOUNTS_KEY) || '[]')
  } catch {
    return []
  }
}

export function getAccountList() {
  return getCustomAccounts().map(a => ({ username: a.u, role: a.r }))
}

export async function createAccount(username, password) {
  const accounts = getCustomAccounts()
  const all = [...BUILTIN, ...accounts]
  if (all.some(a => a.u === username)) {
    throw new Error('Username already exists')
  }

  const saltBytes = crypto.getRandomValues(new Uint8Array(16))
  const saltHex = bytesToHex(saltBytes)
  const hash = await deriveHash(password, saltHex)

  accounts.push({ u: username, s: saltHex, h: hash, r: 'user' })
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
}

export function deleteAccount(username) {
  if (BUILTIN.some(a => a.u === username)) {
    throw new Error('Cannot delete built-in accounts')
  }
  const accounts = getCustomAccounts().filter(a => a.u !== username)
  localStorage.setItem(ACCOUNTS_KEY, JSON.stringify(accounts))
}
