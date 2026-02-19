01 - Abri o cmd e digitar git --version
02 - configura o git hub digitando git config --global user.name "nome" e git config --global user.email "email"

03 - criar uma conta no git hub

SSH - git hub comandos

Is -al ~/.ssh
ssh-keygen -t ed25519 -C "email"
eval '$(ssh-agent -s)
ssh-add ~/.ssh/id_ed25519

SSH - git bash comandos

clip <~/.ssh/id_ed25519.pub
Git -> setting -> SSH and GPG keys -> New SSH Key -> Colar
*Coloca um titulo*

test conexão
ss -T git@github.com
    yes

    