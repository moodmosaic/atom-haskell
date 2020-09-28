const { AutoLanguageClient } =
  require("atom-languageclient");

class HaskellAutoLanguageClient
    extends AutoLanguageClient {

  getLanguageName() {
    return "Haskell";
  }

  getGrammarScopes() {
    return [
        "source.haskell"
      , "text.tex.latex.haskell"
    ];
  }

  getServerName() {
    return "haskell";
  }

  startServerProcess(projectPath) {
    let proc =
      (require("child_process")).spawn(
          atom.config.get("haskell.exec")
        , atom.config.get("haskell.args").split(",").map(a => a.trim())
        , { "cwd" : projectPath });

    return proc;
  }
}

module.exports =
  new HaskellAutoLanguageClient();
