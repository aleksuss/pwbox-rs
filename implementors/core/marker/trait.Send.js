(function() {var implementors = {};
implementors["pwbox"] = [{"text":"impl&lt;C, M&gt; Send for CipherWithMac&lt;C, M&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;M: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl Send for ErasedPwBox","synthetic":true,"types":[]},{"text":"impl !Send for Eraser","synthetic":true,"types":[]},{"text":"impl Send for CipherOutput","synthetic":true,"types":[]},{"text":"impl Send for MacMismatch","synthetic":true,"types":[]},{"text":"impl Send for ScryptParams","synthetic":true,"types":[]},{"text":"impl Send for SensitiveData","synthetic":true,"types":[]},{"text":"impl&lt;K, C&gt; Send for PwBox&lt;K, C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: Send,<br>&nbsp;&nbsp;&nbsp;&nbsp;K: Send,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl !Send for RestoredPwBox","synthetic":true,"types":[]},{"text":"impl&lt;'a, K, C&gt; !Send for PwBoxBuilder&lt;'a, K, C&gt;","synthetic":true,"types":[]},{"text":"impl Send for EraseError","synthetic":true,"types":[]},{"text":"impl Send for Error","synthetic":true,"types":[]},{"text":"impl Send for Scrypt","synthetic":true,"types":[]},{"text":"impl Send for PureCrypto","synthetic":true,"types":[]},{"text":"impl Send for Aes128Ctr","synthetic":true,"types":[]},{"text":"impl Send for Keccak256","synthetic":true,"types":[]},{"text":"impl Send for Scrypt","synthetic":true,"types":[]},{"text":"impl Send for Aes128Gcm","synthetic":true,"types":[]},{"text":"impl Send for RustCrypto","synthetic":true,"types":[]},{"text":"impl Send for Scrypt","synthetic":true,"types":[]},{"text":"impl Send for ScryptCompat","synthetic":true,"types":[]},{"text":"impl Send for XSalsa20Poly1305","synthetic":true,"types":[]},{"text":"impl Send for ChaCha20Poly1305","synthetic":true,"types":[]},{"text":"impl Send for Sodium","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()