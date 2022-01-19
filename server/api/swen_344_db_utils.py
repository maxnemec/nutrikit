import psycopg2
import yaml
import os

def connect():
    if(os.environ['DEV'] == 'true'):
        config = {}
        yml_path = os.path.join(os.path.dirname(__file__), 'db.yml')
        with open(yml_path, 'r') as file:
            config = yaml.load(file, Loader=yaml.FullLoader)
        return psycopg2.connect(dbname=config['database'],
                                user=config['user'],
                                password=config['password'],
                                host=config['host'],
                                port=config['port'])
  
    else:
        return psycopg2.connect(dbname=os.environ['DATABASE_NAME'],
                                user=os.environ['DATABASE_USER'],
                                password=os.environ['DATABASE_PASSWORD'],
                                host=os.environ['DATABASE_HOST'],
                                port=os.environ['DATABASE_PORT'])
def exec_sql_file(path):
    full_path = os.path.join(os.path.dirname(__file__), f'{path}')
    conn = connect()
    cur = conn.cursor()
    with open(full_path, 'r') as file:
        cur.execute(file.read())
    conn.commit()
    conn.close()

def exec_get_one(sql, args={}):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    one = cur.fetchone()
    conn.close()
    return one

def exec_get_all(sql, args={}):
    conn = connect()
    cur = conn.cursor()
    cur.execute(sql, args)
    # https://www.psycopg.org/docs/cursor.html#cursor.fetchall
    list_of_tuples = cur.fetchall()
    conn.close()
    return list_of_tuples

def exec_commit(sql, args={}):
    #print("exec_commit:\n" + sql+"\n")
    conn = connect()
    cur = conn.cursor()
    result = cur.execute(sql, args)
    conn.commit()
    conn.close()
    return result
