import json,re
from PIL import Image
U='/mnt/user-data/uploads/179085626098'
files={'Eye of Mirror':('2_Eye-of-Mirror','eye-of-mirror'),'Eight Extremities':('2_Eight-Extremities','eight-extremities'),'Dark Eye':('2_Dark-Eye','dark-eye'),'Deadly Performance':('1_Deadly-Performance','deadly-performance')}
pos={'eye-of-mirror':[(197,62),(197,225),(57,415),(333,415),(57,580),(333,580)],
'eight-extremities':[(107,62),(107,228),(283,228),(107,390),(107,550),(283,550)],
'dark-eye':[(203,62),(58,248),(58,410),(330,248),(330,410),(203,595)],
'deadly-performance':[(57,62),(333,62),(57,210),(333,210),(200,395),(200,545)]}
# dark-eye order: 1 root,2 L-row2,3 L-row3,4 R-row2,5 R-row3,6 bottom
pos['dark-eye']=[(203,62),(58,248),(58,410),(330,248),(330,410),(203,595)]
out=[];cur=None
for line in open('skills.txt'):
    line=line.strip()
    if line.startswith('TALENT:'):
        n=line[7:].strip();slug=files[n][1]
        im=Image.open(U+files[n][0]+'.png').convert('RGBA');W,H=im.size
        im.save(f'images/{slug}.png')
        x,y=pos[slug][0];im.crop((x-48,y-48,x+48,y+48)).resize((64,64)).save(f'thumbs/{slug}.png')
        cur={'name':n,'image':f'images/{slug}.png','thumb':f'thumbs/{slug}.png','desc':'','skills':[]};out.append(cur);cur['_p']=pos[slug];cur['_s']=(W,H)
    elif line.startswith('TALENT DESCRIPTION:'): cur['desc']=line[19:].strip()
    elif re.match(r'\d \|',line):
        p=[s.strip() for s in line.split('|')]
        i=int(p[0])-1;x,y=cur['_p'][i];W,H=cur['_s']
        g=lambda s:re.search(r':\s*(\d+)',s).group(1)
        cur['skills'].append({'name':p[1],'desc':p[2],'damage':g(p[3]),'cp':g(p[4]),'cd':g(p[5]),'x':round(x/W*100,2),'y':round(y/H*100,2)})
for t in out: del t['_p'],t['_s']
open('data.js','w').write('// Edit this file to add talents. Tabs: extreme, secret, senjutsu\nconst TABS = '+json.dumps({'extreme':out,'secret':[],'senjutsu':[]},indent=1,ensure_ascii=False)+';\n')
